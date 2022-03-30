import { inject, injectable } from 'tsyringe';

import { IStorageProvider } from '@shared/container/providers/StorageProvider/IStorageProvider';

@injectable()
class InsertImageUseCase {
  constructor(
    @inject('StorageProvider')
    private storageProvider: IStorageProvider
  ) {}

  async execute(images: string[]): Promise<string[]> {
    const linksPromise = images.map(async (image) => {
      const link = await this.storageProvider.save(image, 'defaults');
      return link;
    });

    const links = await Promise.all(linksPromise);

    return links;
  }
}

export { InsertImageUseCase };
