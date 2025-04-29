import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, message } = req.body;

    const filePath = path.resolve('./', 'donations.json');
    const data = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath))
      : [];

    const newDonation = {
      name,
      message,
      timestamp: Date.now()
    };

    data.unshift(newDonation);
    fs.writeFileSync(filePath, JSON.stringify(data.slice(0, 50), null, 2));

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
