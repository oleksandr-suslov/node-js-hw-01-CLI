const { Command } = require('commander');
const chalk = require('chalk')
const {listContacts, getContactById, addContact,
    removeContact,} = require('./contacts')

const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();


(async ({ action, id, name, email, phone }) => {
    try {
    switch (action) {
    case 'list':
      const contacts = await listContacts()
      console.table(contacts)
      break;

    case 'get':
      const findContactById = await getContactById(id)
      if (findContactById) {
          console.log(chalk.green('Contact found'))
          console.log(findContactById)
      } else {
        console.log(chalk.red('Contact not found'))
      }
      break;

    case 'add':
        const contact = await addContact(name, email, phone);
        console.log(chalk.green("Add New Contact"));
        console.log(contact);
      break;

    case 'remove':
        const arr = await listContacts()
        const findContact = arr.some(contact => String(contact.id) === String(id))
        const newContacts = await removeContact(id);
        if (findContact) {
            console.log(chalk.green(`Contact have id=${id} successfully deleted`))
        } else {
          console.log(chalk.red(`Contact have id=${id} not found`))
        }

      break;

    default:
      console.warn(chalk.red('Unknown action type!'));
    };
      } catch (error) {
console.error(chalk.red(error.message))
    } 
}
)(argv);