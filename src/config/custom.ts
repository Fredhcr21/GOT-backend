const customConfig = {
  /**************************************************************************
   *                                                                         *
   * Automated email configuration                                           *
   *                                                                         *
   * Sandbox Mailgun credentials for use during development, as well as any  *
   * other default settings related to "how" and "where" automated emails    *
   * are sent.                                                               *
   *                                                                         *
   * (https://app.mailgun.com/app/domains)                                   *
   *                                                                         *
   **************************************************************************/
  mailgunDomain: 'sandbox5c41d640108045a396732b965123e8de.mailgun.org',
  mailgunSecret: '9bd7571166f1a584fecd934915d44f6e-7764770b-1a028fd5',

  supportEmail: 'frederycastillo21@gmailcom',
  baseURL: 'https://api.mailgun.net/v3/sandbox5c41d640108045a396732b965123e8de.mailgun.org',
  frontUrl: 'https://api.mailgun.net/v3/sandbox5c41d640108045a396732b965123e8de.mailgun.org',
};

export default customConfig;
