import mongoose from 'mongoose';

const mySessionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phoneNumber: { type: String, required: true },
    tutorName: { type: String, required: true },
    tutorId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'tutors',
    },
    email: { type: String, required: true },
    status: { type: String, required: true },
  },
  { timestamps: true },
);

export const MySession =
  mongoose.models.MySession || mongoose.model('MySession', mySessionSchema);
