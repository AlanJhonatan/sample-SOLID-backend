import nodemailer, { Transporter } from 'nodemailer';
import { injectable } from 'tsyringe';

import { IMailProvider } from '../IMailProvider';

@injectable()
class EtherealMailProvider implements IMailProvider {
  private client: Transporter;

  private async createClient(): Promise<void> {
    const account = await nodemailer.createTestAccount();

    this.client = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });
  }

  async sendMail({ to, subject, body }): Promise<void> {
    await this.createClient();

    const message = await this.client.sendMail({
      to,
      from: 'System Eng. <engineering@lenovo.com>',
      subject,
      html: body,
    });

    console.log('Message sent: %s', message.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}

export { EtherealMailProvider };
