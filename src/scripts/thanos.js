import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  const contacts = await fs.readFile(PATH_DB, 'utf-8');
  const parsedContacts = JSON.parse(contacts);

  const thanosContacts = parsedContacts.filter(
    () => Math.random() >= 0.5 && !null,
  );

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(thanosContacts));
  } catch (error) {
    console.error('Помилка запису вмісту в файл:', error);
  }
};

await thanos();
