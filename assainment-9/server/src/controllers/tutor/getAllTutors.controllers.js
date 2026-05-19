import { success } from 'zod';
import { connectDB } from '../../config/db.js';
import { validateTutorData } from '../../helpers/validateBodyData/validateTutorData.js';
import { Tutor } from '../../models/tutor.model.js';

export async function getAllTutors(req, res) {
  try {
    await connectDB();
    const tutors = await Tutor.find();

    return res.status(201).json({
      success: true,
      data: tutors,
      message: 'Tutor created successful',
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: error.message });
  }
}
