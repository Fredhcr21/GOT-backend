const emailConfig = {
  host: 'smtp.mailgun.org',
  port: 521,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'brad@sandbox5c41d640108045a396732b965123e8de.mailgun.org', // generated ethereal user
    pass: 'fred152124', // generated ethereal password
  },
  fromEmail: '"FredHcr 👻" <brad@sandbox5c41d640108045a396732b965123e8de.mailgun.org>',
  fromEmailAddress: 'brad@sandbox5c41d640108045a396732b965123e8de.mailgun.org ',
};

export default emailConfig;
