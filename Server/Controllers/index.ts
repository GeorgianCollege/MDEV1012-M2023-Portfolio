import express from 'express';

import { UserDisplayName } from '../Util';

// Controller Logic to display your home page
export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req)  });
}

// Controller Logic to display your about page
export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    res.render('index', { title: 'About Us', page: 'about', displayName: UserDisplayName(req)  });
}

// Controller Logic to display your services page
export function DisplayServicesPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    res.render('index', { title: 'Our Services', page: 'services', displayName: UserDisplayName(req)  });
}

// Controller Logic to display your projects page
export function DisplayProjectsPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    res.render('index', { title: 'Our Projects', page: 'projects', displayName: UserDisplayName(req)  });
}

// Controller Logic to display your projects page
export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    res.render('index', { title: 'Contact Us', page: 'contact', displayName: UserDisplayName(req)  });
}