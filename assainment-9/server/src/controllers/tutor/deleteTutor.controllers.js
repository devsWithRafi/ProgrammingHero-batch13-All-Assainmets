import { validateTutorData } from '../../helpers/validateBodyData/validateTutorData.js';
import { Tutor } from '../../models/tutor.model.js';

export async function deleteTutor(req, res) {
  try {
    const user = req.user;
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Tutor ID is required',
      });
    }

    const tutor = await Tutor.findOneAndDelete({
      _id: id,
      createdBy: user.id,
    });

    if (!tutor) {
      return res.status(404).json({
        success: false,
        message: 'Tutor not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Tutors Deleted Successful',
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: error.message });
  }
}
