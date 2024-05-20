import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  const newContact = createFakeContact();

  try {
    const fileData = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(fileData);
    contacts.push(newContact);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
  } catch (err) {
    console.error('Помилка додавання даних до файлу:', err);
  }
};

await addOneContact();
