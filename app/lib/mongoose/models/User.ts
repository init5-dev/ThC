import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

interface IUser extends Document {
  email: string;
  password: string;
  comparePassword(enteredPassword: string): Promise<boolean>;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6,
  },
});

userSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err as Error);
  }
});

userSchema.methods.comparePassword = async function (enteredPassword: string): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.models?.User || mongoose.model<IUser>('User', userSchema);
export default User;
