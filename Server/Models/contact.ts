import mongoose from 'mongoose';
const Schema = mongoose.Schema; // Schema alias

// create a model interface
interface IContact extends mongoose.Document
{
  FirstName: string;
  LastName: string;
  EmailAddress: string;
  ContactNumber: string;
}

// create a Contact Schema using the IContact Interface
const ContactSchema = new Schema<IContact>
({
  // define the properties of the ContactSchema with their types and that they are required
  FirstName: {
    type: String,
    trim: true,
    required: true
  },
  LastName: {
    type: String,
    trim: true,
    required: true
  },
  EmailAddress: {
    type: String,
    trim: true,
    required: true
  },
  ContactNumber: {
    type: String,
    trim: true,
    required: true
  }
},
{
  collection: "contacts"
});

// create a Contact Model from the Contact Schema
export default mongoose.model<IContact>("Contact", ContactSchema);
