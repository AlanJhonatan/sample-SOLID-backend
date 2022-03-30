import { container } from 'tsyringe';

import { IMailProvider } from './IMailProvider';
// import { LenovoMailProvider } from './implementations/LenovoMailProvider';
// import { EtherealMailProvider } from './implementations/EtherealMailProvider';
import { MailhogMailProvider } from './implementations/MailhogMailProvider';
// import { InMemoryMailProvider } from './implementations/InMemoryMailProvider';

container.registerSingleton<IMailProvider>(
  'MailProvider',
  MailhogMailProvider
);
