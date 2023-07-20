"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayEditPage = exports.DisplayAddPage = exports.DisplayContactListPage = void 0;
const contact_1 = __importDefault(require("../Models/contact"));
const Util_1 = require("../Util");
function DisplayContactListPage(req, res, next) {
    contact_1.default.find()
        .then((contactCollection) => {
        console.log(contactCollection);
        res.render('index', { title: 'Contact List', page: 'contact-list', contacts: contactCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    })
        .catch((err) => {
        console.error(err);
    });
}
exports.DisplayContactListPage = DisplayContactListPage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add New Contact', page: 'details', contact: '', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayAddPage = DisplayAddPage;
function DisplayEditPage(req, res, next) {
    res.render('index', { title: 'Edit Contact', page: 'details', contact: '', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayEditPage = DisplayEditPage;
//# sourceMappingURL=contact.js.map