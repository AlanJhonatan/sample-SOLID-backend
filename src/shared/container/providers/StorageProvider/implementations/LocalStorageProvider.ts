import fs from 'fs';
import { resolve } from 'path';

import upload from '../../../../../config/upload';
import { IStorageProvider } from '../IStorageProvider';

class LocalStorageProvider implements IStorageProvider {
  async save(file: string, folder: string): Promise<void> {
    const uploadPath = resolve(upload.path, file);
    const storagePath = resolve(upload.path, '..', 'storage', folder, file);

    await fs.promises.rename(uploadPath, storagePath);
  }

  async delete(file: string, folder: string): Promise<void> {
    const storagePath = resolve(upload.path, '..', 'storage');
    const finalPath = resolve(storagePath, folder, file);

    try {
      await fs.promises.stat(finalPath);
    } catch {
      return;
    }

    await fs.promises.unlink(finalPath);
  }
}

export { LocalStorageProvider };
