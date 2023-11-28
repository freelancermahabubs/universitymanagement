/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';
const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
<<<<<<< HEAD
    needsPasswrodchange: {
=======
    needsPasswrodChange: {
>>>>>>> 2f215544aec3abba236c353516a0a56f07eb7ec3
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
<<<<<<< HEAD

=======
>>>>>>> 2f215544aec3abba236c353516a0a56f07eb7ec3
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
<<<<<<< HEAD
  { timestamps: true },
);

userSchema.pre('save', async function (next) {
=======
  {
    timestamps: true,
  },
);


userSchema.pre('save', async function (next) {


>>>>>>> 2f215544aec3abba236c353516a0a56f07eb7ec3
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});
<<<<<<< HEAD
// post save middleware  / hook
=======

// set ' ' after saving passwrodn 
>>>>>>> 2f215544aec3abba236c353516a0a56f07eb7ec3
userSchema.post('save', function (doc, next) {
  doc.password = ' ';

  next();
});

export const User = model<TUser>('User', userSchema);
