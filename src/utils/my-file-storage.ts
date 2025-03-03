import * as multer from 'multer';
import { Request } from 'express';
import * as fs from 'node:fs';

const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, callback: any) => {
    try {
      fs.mkdirSync('uploads');
    } catch (e) {
      callback(null, 'uploads');
    }
  },
  filename: (req: Request, file: Express.Multer.File, callback: any) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}-${file.originalname}`;
    callback(null, uniqueSuffix);
  },
});

export { storage };
