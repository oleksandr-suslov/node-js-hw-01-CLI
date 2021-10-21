const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");
const contactsPath = path.join(__dirname, "./db/contacts.json");

const readData = async () => {
  const result = await fs.readFile(
    contactsPath,
    "utf-8"
  );
  return JSON.parse(result);
};

const listContacts = async () => {
  return await readData();
};

const getContactById = async(contactId) => {
    const contacts = await readData();
    const [result] = contacts.filter(contact => String(contact.id) === String(contactId))
    return result
}

const removeContact = async(contactId) => {
    const contacts = await readData();
    const newContacts = contacts.filter(contact => String(contact.id) !== String(contactId))
    await fs.writeFile(
        contactsPath,
        JSON.stringify(newContacts, null, 2)
      );
    return newContacts
}

const addContact = async (name, email, phone) => {
  const contacts = await readData();
  const newContact = { id: crypto.randomUUID(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(
    contactsPath,
    JSON.stringify(contacts, null, 2)
  );
  return newContact;
};

module.exports = { listContacts, getContactById, removeContact, addContact };
