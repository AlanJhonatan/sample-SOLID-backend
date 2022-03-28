class MailhogMailProvider implements IMailProvider {
  constructor () {}
  
  sendMail(to: string, subject: string, body: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { MailhogMailProvider }