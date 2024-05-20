import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const fileData = await fs.readFile(PATH_DB);
    return JSON.parse(fileData);
  } catch (error) {
    console.error('Помилка читання даних з файлу:', error);
  }
};

console.log(await getAllContacts());
