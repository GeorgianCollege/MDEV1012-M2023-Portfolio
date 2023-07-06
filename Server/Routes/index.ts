import express from 'express';
let router = express.Router();

// import the index controller
import { DisplayHomePage, DisplayAboutPage, DisplayServicesPage, DisplayProjectsPage, DisplayContactPage } from '../Controllers';

// import the Contact controller
import { DisplayContactListPage } from '../Controllers/contact';

/* GET Default Route */
router.get('/', (req, res, next) => DisplayHomePage(req, res, next) );

/* GET Home Page */
router.get('/home', (req, res, next) => DisplayHomePage(req, res, next) );

/* GET About Page */
router.get('/about', (req, res, next) => DisplayAboutPage(req, res, next) );

/* GET Services Page */
router.get('/services', (req, res, next) => DisplayServicesPage(req, res, next) );

/* GET Projects Page */
router.get('/projects', (req, res, next) => DisplayProjectsPage(req, res, next) );

/* GET Contact Page */
router.get('/contact', (req, res, next) => DisplayContactPage(req, res, next) );

/* GET Contact List page - with /contact-list */
router.get('/contact-list', (req, res, next) => DisplayContactListPage(req, res, next) );

export default router;
