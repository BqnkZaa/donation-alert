import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.resolve('./', 'donations.json');
  const data = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath))
    : [];

  res.status(200).json(data);
}
