"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeleteRequest = exports.ProcessEditPage = exports.ProcessAddPage = exports.DisplayEditPage = exports.DisplayAddPage = exports.DisplayContactListPage = void 0;
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
    let id = req.params.id;
    contact_1.default.findById(id)
        .then((contact) => {
        res.render('index', { title: 'Edit Contact', page: 'details', contact: contact, displayName: (0, Util_1.UserDisplayName)(req) });
    })
        .catch((err) => {
        console.log(err);
        res.end(err);
    });
}
exports.DisplayEditPage = DisplayEditPage;
function ProcessAddPage(req, res, next) {
    let contact = new contact_1.default({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        EmailAddress: req.body.EmailAddress,
        ContactNumber: req.body.ContactNumber
    });
    contact_1.default.create(contact)
        .then(() => {
        console.log("Added New Contact");
        res.redirect('/contact-list');
    })
        .catch((err) => {
        console.log(err);
        res.end(err);
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedContact = new contact_1.default({
        _id: id,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        EmailAddress: req.body.EmailAddress,
        ContactNumber: req.body.ContactNumber
    });
    contact_1.default.updateOne({ _id: id }, updatedContact)
        .then(() => {
        console.log(`Updated Contact with id: ${id}`);
        res.redirect('/contact-list');
    })
        .catch((err) => {
        console.log(err);
        res.end(err);
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessDeleteRequest(req, res, next) {
    let id = req.params.id;
    contact_1.default.deleteOne({ _id: id })
        .then(() => {
        console.log(`Deleted Contact with id: ${id}`);
        res.redirect('/contact-list');
    })
        .catch((err) => {
        console.log(err);
        res.end(err);
    });
}
exports.ProcessDeleteRequest = ProcessDeleteRequest;
//# sourceMappingURL=contact.js.map