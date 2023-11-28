import { Model, Types } from 'mongoose';

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
export type TStudent = {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: TUserName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanetAddress: string;
  guardian: TGuardian;
  email: string;
  profileImage?: string;
  localGuardian: TLocalGuardian;
<<<<<<< HEAD
  isActive: 'active' | 'inActive';
=======
>>>>>>> 2f215544aec3abba236c353516a0a56f07eb7ec3
  isDeleted: boolean;
};

// for creating static

<<<<<<< HEAD
export interface StudnetModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>;
=======
export interface StudnetModel extends Model<TStudents> {
  isUserExists(id: string): Promise<TStudents | null>;
>>>>>>> 2f215544aec3abba236c353516a0a56f07eb7ec3
}

// for crating instance
// export type StudnetMethods = {
//   isUserExists(id: string): Promise<TStudents | null>;
// };

// export type StudentModel = Model<
//   TStudents,
//   Record<string, never>,
//   StudnetMethods
// >;
