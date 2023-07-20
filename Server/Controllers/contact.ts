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

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
  res.render('index', {title: 'Add New Contact', page: 'details', contact: '', displayName: UserDisplayName(req) });
}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
  let id = req.params.id;

  Contact.findById(id)
  .then((contact)=>{
    res.render('index', {title: 'Edit Contact', page: 'details', contact: contact, displayName: UserDisplayName(req) });
  })
  .catch((err)=>{
    console.log(err);
    res.end(err);
  });
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
  // add a new contact 

  let contact = new Contact({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    EmailAddress: req.body.EmailAddress,
    ContactNumber: req.body.ContactNumber
  });

  Contact.create(contact)
  .then(()=>{
    console.log("Added New Contact");
    res.redirect('/contact-list');
  })
  .catch((err)=>{
    console.log(err);
    res.end(err);
  });
}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
  let id = req.params.id;

  let updatedContact = new Contact({
    _id: id,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    EmailAddress: req.body.EmailAddress,
    ContactNumber: req.body.ContactNumber
  });

  Contact.updateOne({_id: id}, updatedContact)
  .then(()=>{
    console.log(`Updated Contact with id: ${id}`);
    res.redirect('/contact-list');
  })
  .catch((err)=>{
    console.log(err);
    res.end(err);
  });
}

export function ProcessDeleteRequest(req: express.Request, res: express.Response, next: express.NextFunction): void
{
  let id = req.params.id;

  Contact.deleteOne({_id: id})
  .then(()=>{
    console.log(`Deleted Contact with id: ${id}`);
    res.redirect('/contact-list');
  })
  .catch((err)=>{
    console.log(err);
    res.end(err);
  });
}
