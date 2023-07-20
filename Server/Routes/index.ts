import express from 'express';
let router = express.Router();

// import the index controller
import { DisplayHomePage, DisplayAboutPage, DisplayServicesPage, DisplayProjectsPage, DisplayContactPage } from '../Controllers';

// import the Contact controller
import { DisplayAddPage, DisplayContactListPage, DisplayEditPage } from '../Controllers/contact';

// import the auth controller
import { ProcessLogin, DisplayLoginPage, ProcessLogout, DisplayRegisterPage, ProcessRegister } from '../Controllers/auth';

import { AuthGuard } from '../Util';

/*********************** TOP-LEVEL ROUTES ***********************/

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

/******************  AUTHENTICATION ROUTES *******************************/

/* Process the login request */
router.post('/login', ProcessLogin);

/* Display the Login Page */
router.get('/login', DisplayLoginPage);

/* Process the register request */
router.post('/register', ProcessRegister);

/* Display the Register Page */
router.get('/register', DisplayRegisterPage);

/* Process the logout request */
router.get('/logout', ProcessLogout);


/***************** CONTACT MANAGEMENT ROUTES ****************/

/* GET Contact List page - with /contact-list */
router.get('/contact-list', AuthGuard, DisplayContactListPage );

/* GET Details page - with /add */
router.get('/add', AuthGuard, DisplayAddPage );

/* GET Details page - with /edit/:id */
router.get('/edit/:id', AuthGuard, DisplayEditPage );

export default router;
