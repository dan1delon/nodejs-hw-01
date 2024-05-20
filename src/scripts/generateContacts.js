import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  const contacts = [];

  for (let i = 1; i <= number; i += 1) {
    contacts.push(createFakeContact());
  }

  try {
    let existingData = [];

    try {
      const fileData = await fs.readFile(PATH_DB);
      if (fileData) {
        existingData = JSON.parse(fileData);
      }
    } catch (err) {
      console.error('Помилка читання файлу:', err);
    }

    const updatedData = [...existingData, ...contacts];

    await fs.writeFile(PATH_DB, JSON.stringify(updatedData));
  } catch (err) {
    console.error('Помилка додавання даних до файлу:', err);
  }
};

await generateContacts(5);
