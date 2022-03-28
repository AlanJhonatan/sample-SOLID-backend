import { randomBytes } from 'crypto';
import multer from 'multer';
import { resolve } from 'path';

const path = resolve(__dirname, '..', '..', 'temp');

export default {
  path,
  storage: multer.diskStorage({
    destination: path,
    filename: (request, file, callback) => {
      const filehash = randomBytes(10).toString('hex');
      const filename = `${filehash}-${file.originalname}`;

      return callback(null, filename);
    },
  }),
};
