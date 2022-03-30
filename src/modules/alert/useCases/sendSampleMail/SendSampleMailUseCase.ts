import { inject, injectable } from 'tsyringe';

import { IMailProvider } from '@shared/container/providers/MailProvider/IMailProvider';

@injectable()
class SendSampleMailUseCase {
  constructor(
    @inject('MailProvider')
    private mailProvider: IMailProvider
  ) {}

  async execute() {
    await this.mailProvider.sendMail({
      to: 'afranca2@lenovo.com',
      subject: 'Just an sample email',
      body: '<h1>Sample body</h1>',
    });
  }
}

export { SendSampleMailUseCase };
