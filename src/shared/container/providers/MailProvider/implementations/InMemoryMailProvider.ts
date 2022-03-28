import { IMailProvider } from '../IMailProvider';

class InMemoryMailProvider implements IMailProvider {
  async sendMail({ to, subject, body }): Promise<void> {
    console.log('in-memo', {
      to,
      subject,
      body,
    });
  }
}

export { InMemoryMailProvider };
