import { container } from 'tsyringe';

// import { LocalStorageProvider } from './implementations/LocalStorageProvider';
import { MinioStorageProvider } from './implementations/MinioStorageProvider';
import { IStorageProvider } from './IStorageProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  MinioStorageProvider
);
