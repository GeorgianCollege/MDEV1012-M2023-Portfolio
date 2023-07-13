"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactListPage = void 0;
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
//# sourceMappingURL=contact.js.map