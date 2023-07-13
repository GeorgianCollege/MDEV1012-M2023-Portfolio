import express, {Request, Response, NextFunction} from 'express';

import passport from 'passport';

import User from '../Models/user';

export function DisplayLoginPage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage') });
}

// Process Functions
export function ProcessLogin(req: Request, res: Response, next: NextFunction): void
{
    passport.authenticate('local', (err: Error, user: UserDocument, info: any) =>
    {
        // are there server errors?
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        // are there login errors?
        if(!user)
        {
            console.log("ERROR: Authentication Error")
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }

        req.logIn(user, (err) =>
        {
            // are there db errors?
            if(err)
            {
                console.error(err);
                res.end(err);
            }

            return res.redirect('/contact-list');
        });
        return;
    })(req, res, next);
}

export function DisplayRegisterPage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage') });
}


export function ProcessRegister(req: Request, res: Response, next: NextFunction): void
{
    // instantiate a new user object
    let newUser = new User
    ({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.firstName + " " + req.body.lastName
    });

    User.register(newUser, req.body.password, (err) =>
    {
        if(err)
        {
            if(err.name == "UserExistsError")
            {
                console.error('ERROR: User Already Exists!');
            }
            console.error(err.name); // other error
            req.flash('registerMessage', 'Registration Error');
            return res.redirect('/register');
        }
        req.flash('loginMessage', 'User Registered Successfully');
        return res.redirect('/login');
    });
}

export function ProcessLogout(req: Request, res: Response, next: NextFunction): void
{
    req.logout(() =>{
        console.log("User Logged Out");
    });

    res.redirect('/login');
}