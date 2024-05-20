import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts.length !== 0) {
      try {
        await fs.writeFile(PATH_DB, JSON.stringify([]));
      } catch (error) {
        console.error('Помилка запису вмісту в файл:', error);
      }
    } else {
      console.log('Вміст файлу вже порожній.');
    }
  } catch (error) {
    console.error('Помилка читання даних з файлу:', error);
  }
};

await removeAllContacts();
