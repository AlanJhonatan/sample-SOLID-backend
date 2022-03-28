import { inject, injectable } from 'tsyringe';

import { IStorageProvider } from '../../../../shared/container/providers/StorageProvider/IStorageProvider';

@injectable()
class InsertImageUseCase {
  constructor(
    @inject('StorageProvider')
    private storageProvider: IStorageProvider
  ) {}

  async execute(images: string[]) {
    images.map(async (image) => {
      await this.storageProvider.save(image, 'defaults');
    });
  }
}

export { InsertImageUseCase };
