import { success } from 'zod';
import { validateTutorData } from '../../helpers/validateBodyData/validateTutorData.js';
import { Tutor } from '../../models/tutor.model.js';

export async function getAllTutors(req, res) {
  const { show, tutorsName, startDate, endDate } = req.query;

  try {
    const options = {};

    const limit = Number(show) || 0;

    if (startDate || endDate) {
      options.sessionStartDate = {};
      if (startDate) options.sessionStartDate.$gte = new Date(startDate);
      if (endDate) options.sessionStartDate.$lte = new Date(endDate);
    }

    if (tutorsName) {
      options.name = { $regex: tutorsName, $options: 'i' };
    }

    const tutors = await Tutor.find(options).limit(limit);

    return res.status(200).json({
      success: true,
      data: tutors,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: error.message });
  }
}
