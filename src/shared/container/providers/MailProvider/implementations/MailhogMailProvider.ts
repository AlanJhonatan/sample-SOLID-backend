import { createTransport, Transporter } from 'nodemailer';

import { IMailProvider } from '../IMailProvider';

class MailhogMailProvider implements IMailProvider {
  private client: Transporter;

  constructor() {
    this.client = createTransport({
      host: 'mailhog',
      port: 1025,
      auth: null,
    });
  }

  async sendMail({ to, subject, body }): Promise<void> {
    this.client.sendMail({
      from: 'Engineering <eng.systems@lenovo.com>',
      to,
      subject,
      html: body,
    });
  }
}

export { MailhogMailProvider };
