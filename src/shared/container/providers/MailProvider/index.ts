import { container } from 'tsyringe';

import { IMailProvider } from './IMailProvider';
import { InMemoryMailProvider } from './implementations/InMemoryMailProvider';

container.registerSingleton<IMailProvider>(
  'MailProvider',
  InMemoryMailProvider
);
