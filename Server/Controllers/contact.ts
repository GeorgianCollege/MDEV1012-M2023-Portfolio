import express from 'express';

// import the Contact Model
import Contact from '../Models/contact';

import { UserDisplayName } from '../Util';

// create a function that displays the Contact List page in the index view
export function DisplayContactListPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
  // db.contacts.find()
  Contact.find()
  .then((contactCollection) => {
     // render the contact-list content partial page
     console.log(contactCollection);
     res.render('index', {title: 'Contact List', page: 'contact-list', contacts: contactCollection, displayName: UserDisplayName(req) });
  })
  .catch((err) => {
    console.error(err);
  });
}
