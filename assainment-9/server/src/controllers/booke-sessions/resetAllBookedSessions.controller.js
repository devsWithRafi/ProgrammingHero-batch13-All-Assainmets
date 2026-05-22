import { MySession } from '../../models/mySession.model.js';
import { Tutor } from '../../models/tutor.model.js';

export async function resetAllBookedSessions(req, res) {
  try {
    const user = req.user;

    const result = await MySession.deleteMany({
      email: user.email,
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'No sessions found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'All booked sessions deleted successfully',
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
