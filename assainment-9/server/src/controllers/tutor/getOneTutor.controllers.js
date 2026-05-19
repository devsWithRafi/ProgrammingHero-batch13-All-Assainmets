import { success } from 'zod';
import { connectDB } from '../../config/db.js';
import { validateTutorData } from '../../helpers/validateBodyData/validateTutorData.js';
import { Tutor } from '../../models/tutor.model.js';

export async function getOneTutor(req, res) {
  const { id } = req.params;

  try {
    await connectDB();

    const tutor = await Tutor.find({ _id: id });

    if (!tutor) {
      return res
        .status(404)
        .json({ success: false, message: 'Tutor not found' });
    }

    return res.status(201).json({
      success: true,
      data: tutor,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: error.message });
  }
}
