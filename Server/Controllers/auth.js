"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLogout = exports.ProcessRegister = exports.DisplayRegisterPage = exports.ProcessLogin = exports.DisplayLoginPage = void 0;
const passport_1 = __importDefault(require("passport"));
const user_1 = __importDefault(require("../Models/user"));
function DisplayLoginPage(req, res, next) {
    res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage') });
}
exports.DisplayLoginPage = DisplayLoginPage;
function ProcessLogin(req, res, next) {
    passport_1.default.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        if (!user) {
            console.log("ERROR: Authentication Error");
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.logIn(user, (err) => {
            if (err) {
                console.error(err);
                res.end(err);
            }
            return res.redirect('/contact-list');
        });
        return;
    })(req, res, next);
}
exports.ProcessLogin = ProcessLogin;
function DisplayRegisterPage(req, res, next) {
    res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage') });
}
exports.DisplayRegisterPage = DisplayRegisterPage;
function ProcessRegister(req, res, next) {
    let newUser = new user_1.default({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.firstName + " " + req.body.lastName
    });
    user_1.default.register(newUser, req.body.password, (err) => {
        if (err) {
            if (err.name == "UserExistsError") {
                console.error('ERROR: User Already Exists!');
            }
            console.error(err.name);
            req.flash('registerMessage', 'Registration Error');
            return res.redirect('/register');
        }
        req.flash('loginMessage', 'User Registered Successfully');
        return res.redirect('/login');
    });
}
exports.ProcessRegister = ProcessRegister;
function ProcessLogout(req, res, next) {
    req.logout(() => {
        console.log("User Logged Out");
    });
    res.redirect('/login');
}
exports.ProcessLogout = ProcessLogout;
//# sourceMappingURL=auth.js.map