import { connectDB } from '../../config/db.js';

export async function createTutor(req, res) {
  try {
    await connectDB();
    res.json({ message: 'Tutor created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}
