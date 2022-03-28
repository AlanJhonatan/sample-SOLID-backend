interface ISendMail {
  to: string;
  subject: string;
  body: string;
}

interface IMailProvider {
  sendMail({ to, subject, body }: ISendMail): Promise<void>;
}

export { IMailProvider };
