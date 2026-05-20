import { connectDB } from '../../config/db.js';
import { Tutor } from '../../models/tutor.model.js';
import { validateMySessionData } from '../../helpers/validateBodyData/validateMySessionData.js';
import { MySession } from '../../models/mySession.model.js';

export async function createBookSession(req, res) {
  try {
    await connectDB();
    const data = req.body;
    const validateMySession = validateMySessionData.parse(data);

    //  check if already booked
    const alreadyBooked = await MySession.findOne({
      tutorId: validateMySession.tutorId,
      email: validateMySession.email,
    });

    if (alreadyBooked) {
      return res.status(400).json({
        success: false,
        message: 'You already booked this tutor',
      });
    }

    // check if slots available and update slots
    const tutor = await Tutor.findOneAndUpdate(
      {
        _id: validateMySession.tutorId,
        totalSlot: { $gt: 0 },
      },
      {
        $inc: { totalSlot: -1 },
      },
      { returnDocument: 'after' },
    );

    if (!tutor) {
      return res.status(404).json({
        success: false,
        message: 'No slots available',
      });
    }

    const isTimeAvailable = new Date(tutor.sessionStartDate) >= new Date();

    if (!isTimeAvailable) {
      return res.status(400).json({
        success: false,
        message: 'Booking time expired',
      });
    }

    const mySession = await MySession.create({
      ...validateMySession,
    });

    return res.status(201).json({
      success: true,
      data: mySession,
      message: 'Session booked successfully',
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
