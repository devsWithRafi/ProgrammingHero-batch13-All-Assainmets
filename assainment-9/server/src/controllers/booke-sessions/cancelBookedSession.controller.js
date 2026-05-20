import { connectDB } from '../../config/db.js';
import { MySession } from '../../models/mySession.model.js';
import { Tutor } from '../../models/tutor.model.js';

export async function cancelBookedSession(req, res) {
  try {
    const { id } = req.params;
    const { action } = req.body;
    const user = req.user;

    if (!action || action.toLowerCase() !== 'cancel') {
      return res.status(400).json({
        success: false,
        message: 'Invalid action',
      });
    }

    await connectDB();

    //  Update my book session status
    const session = await MySession.findOneAndUpdate(
      {
        _id: id,
        status: 'Confirmed',
        email: user.email,
      },
      {
        $set: { status: 'Cancelled' },
      },
      { returnDocument: 'after' },
    );

    if (!session) {
      return res.status(404).json({
        success: false,
        message: 'User does not have any Book Session',
      });
    }

    //  Update tutor slots
    await Tutor.findByIdAndUpdate(session.tutorId, {
      $inc: { totalSlot: 1 },
    });

    return res.status(200).json({
      success: true,
      message: 'Session cancelled successfully',
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
