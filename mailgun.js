const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: '9bd7571166f1a584fecd934915d44f6e-7764770b-1a028fd5',
});
mg.messages
  .create(sandbox5c41d640108045a396732b965123e8de.mailgun.org, {
    from: 'Mailgun Sandbox <postmaster@sandbox5c41d640108045a396732b965123e8de.mailgun.org>',
    to: ['frederycastillo21@gmail.com'],
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness!',
  })
  .then((msg) => console.log(msg)) // logs response data
  .catch((err) => console.log(err)); // logs any error`;

// You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

// You can send up to 300 emails/day from this sandbox server.
// Next, you should add your own domain so you can send 10000 emails/month for free.
