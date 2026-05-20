import { connectDB } from '../../config/db.js';
import { validateTutorData } from '../../helpers/validateBodyData/validateTutorData.js';
import { Tutor } from '../../models/tutor.model.js';

export async function updateTutorData(req, res) {
  try {
    const user = req.user;
    const { id } = req.params;
    const data = req.body;

    const validatedDate = validateTutorData.parse(data);

    await connectDB();

    const tutor = await Tutor.findOneAndUpdate(
      {
        _id: id,
        createdBy: user.id,
      },
      {
        $set: validatedDate,
      },
      { returnDocument: 'after' },
    );

    if (!tutor) {
      return res.status(404).json({
        success: false,
        message: 'Tutor not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Tutors data updated successful',
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: error.message });
  }
}
