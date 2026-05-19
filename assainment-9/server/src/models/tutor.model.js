import mongoose from 'mongoose';

const tutorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    photo: { type: String, required: true },
    subject: { type: String, required: true },
    availableDays: { type: [String], required: true },
    availableTimeSlot: { type: String, required: true },
    hourlyFee: { type: Number, required: true },
    totalSlot: { type: Number, required: true },
    sessionStartDate: { type: Date, required: true },
    institution: { type: String, required: true },
    experience: { type: Number, required: true },
    location: { type: String, required: true },
    teachingMode: { type: String, required: true },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    creatorEmail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Tutor =
  mongoose.models.Tutor || mongoose.model('Tutor', tutorSchema);
