import upload from "@config/upload";
import { Client } from "minio";
import { resolve } from "path";
import { IStorageProvider } from "../IStorageProvider";

class MinioStorageProvider implements IStorageProvider {
  private client: Client;
  
  constructor() {
    this.client = new Client({
      endPoint: 'bucket',
      port: 9000,
      accessKey: 'admin',
      secretKey: 'password',
      useSSL: false,
    });
  }

  async save(file: string, folder: string): Promise<string> {
    const temppath = resolve(upload.path, file);

    const bucketPath = `${folder}/${file}`

    const finalpath = await this.client.fPutObject(
      'my-bucket',
      bucketPath,
      temppath,
      { sample: 'meta'}
    );

    console.log(finalpath);

    return finalpath.etag;
  }

  delete(file: string, folder: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { MinioStorageProvider }