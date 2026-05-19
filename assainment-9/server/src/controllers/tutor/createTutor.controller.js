import { success } from 'zod';
import { connectDB } from '../../config/db.js';
import { validateTutorData } from '../../helpers/validateBodyData/validateTutorData.js';
import { Tutor } from '../../models/tutor.model.js';

export async function createTutor(req, res) {
  try {
    await connectDB();
    const data = req.body;
    const validate = validateTutorData.parse(data);

    const tutor = await Tutor.create({
      ...validate,
      createdBy: req.user.id,
      creatorEmail: req.user.email,
    });

    return res.status(201).json({
      success: true,
      data: tutor,
      message: 'Tutor created successful',
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: error.message });
  }
}
