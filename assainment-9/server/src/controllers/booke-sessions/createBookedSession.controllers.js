import { Tutor } from '../../models/tutor.model.js';
import { validateMySessionData } from '../../helpers/validateBodyData/validateMySessionData.js';
import { MySession } from '../../models/mySession.model.js';

export async function createBookedSession(req, res) {
  try {
    const data = req.body;
    const validateMySession = validateMySessionData.parse(data);

    // Checking tutor exists
    const tutor = await Tutor.findById(validateMySession.tutorId);

    if (!tutor) {
      return res.status(404).json({
        success: false,
        message: 'Tutor not found',
      });
    }

    // Session date validation
    const isTimeAvailable = new Date(tutor.sessionStartDate) >= new Date();

    if (!isTimeAvailable) {
      return res.status(400).json({
        success: false,
        message: 'Booking is not available yet for this tutor',
      });
    }

    // Checking active booking only
    const alreadyBooked = await MySession.findOne({
      tutorId: validateMySession.tutorId,
      email: validateMySession.email,
      status: { $ne: 'Cancelled' },
    });

    if (alreadyBooked) {
      return res.status(400).json({
        success: false,
        message: 'You already booked this tutor',
      });
    }

    // check if slots available and update slots
    const updatedTutor = await Tutor.findOneAndUpdate(
      {
        _id: validateMySession.tutorId,
        totalSlot: { $gt: 0 },
      },
      {
        $inc: { totalSlot: -1 },
      },
      { returnDocument: 'after' },
    );

    if (!updatedTutor) {
      return res.status(400).json({
        success: false,
        message: 'No available slots left',
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
