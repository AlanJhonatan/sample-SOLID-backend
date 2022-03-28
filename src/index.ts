import { Client } from 'minio';
import path from 'path';
import crypto from 'crypto';

const hash = crypto.randomBytes(10).toString('hex');

const minioClient = new Client({
  endPoint: 'localhost',
  port: 9000,
  accessKey: 'admin',
  secretKey: 'password',
  useSSL: false,
});

(async () => {
  const exists = await minioClient.bucketExists('my-bucket');

  if(!exists) {
    throw new Error('Bucket does not exist');
  }

  const filename = 'sample.txt';
  const filepath = path.resolve(__dirname, filename);
  const uploadName = `${hash}-${filename}`;

  const upload = await minioClient.fPutObject('my-bucket', uploadName, filepath, { object: hash});
  console.log({upload, hash})
})()