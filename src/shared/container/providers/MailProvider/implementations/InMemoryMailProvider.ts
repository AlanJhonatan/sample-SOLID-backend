import { IMailProvider } from '../IMailProvider';

class InMemoryMailProvider implements IMailProvider {
  async sendMail(to: string, subject: string, body: string): Promise<void> {
    console.log({
      to,
      subject,
      body,
    });
  }
}

export { InMemoryMailProvider };
