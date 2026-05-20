import { connectDB } from '../../config/db.js';
import { MySession } from '../../models/mySession.model.js';

export async function getMyBookedSession(req, res) {
  try {
    await connectDB();

    const currentUser = req.user;

    const myBookSession = await MySession.find({
      email: currentUser.email,
    });

    if (!myBookSession) {
      return res.status(404).json({
        success: false,
        message: 'User does not have any Book Session',
      });
    }

    return res.status(201).json({
      success: true,
      data: myBookSession,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
