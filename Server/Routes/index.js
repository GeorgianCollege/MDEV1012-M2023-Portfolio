"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
const Controllers_1 = require("../Controllers");
const contact_1 = require("../Controllers/contact");
const auth_1 = require("../Controllers/auth");
const Util_1 = require("../Util");
router.get('/', (req, res, next) => (0, Controllers_1.DisplayHomePage)(req, res, next));
router.get('/home', (req, res, next) => (0, Controllers_1.DisplayHomePage)(req, res, next));
router.get('/about', (req, res, next) => (0, Controllers_1.DisplayAboutPage)(req, res, next));
router.get('/services', (req, res, next) => (0, Controllers_1.DisplayServicesPage)(req, res, next));
router.get('/projects', (req, res, next) => (0, Controllers_1.DisplayProjectsPage)(req, res, next));
router.get('/contact', (req, res, next) => (0, Controllers_1.DisplayContactPage)(req, res, next));
router.post('/login', auth_1.ProcessLogin);
router.get('/login', auth_1.DisplayLoginPage);
router.post('/register', auth_1.ProcessRegister);
router.get('/register', auth_1.DisplayRegisterPage);
router.get('/logout', auth_1.ProcessLogout);
router.get('/contact-list', Util_1.AuthGuard, contact_1.DisplayContactListPage);
router.get('/add', Util_1.AuthGuard, contact_1.DisplayAddPage);
router.get('/edit/:id', Util_1.AuthGuard, contact_1.DisplayEditPage);
exports.default = router;
//# sourceMappingURL=index.js.map