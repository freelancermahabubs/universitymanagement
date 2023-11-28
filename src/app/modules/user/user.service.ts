import config from '../../config';
<<<<<<< HEAD
import { Students } from '../students/students.Model';
import { TStudent } from '../students/students.interface';
import { TUser } from './user.interface';
import { User } from './user.model';

const crateStudentIntoDb = async (password: string, studentData: TStudent) => {
  // crate  a user object

  const userData: Partial<TUser> = {};
  // if password is not given , use default password

  userData.password = password || (config.default_password as string);
  // set a student fole

  userData.role = 'student';
  // set manually generated id

  userData.id = '20230210';

  const newUser = await User.create(userData);

  // crate a student
  if (Object.keys(newUser).length) {
    // set id , _id as user
    studentData.id = newUser?.id;
    studentData.user = newUser._id; // reference  _id

    const newStudent = await Students.create(studentData);
=======
import { Student } from '../students/students.Model';
import { TStudents } from './../students/students.interface';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (
  password: string,
  studentData: TStudents,
) => {
  //create a user object

  const userData: Partial<TUser> = {};

  // if passwrod is not fiven, use default passwrod

  userData.password = password || (config.default_password as string);

  //   set a student  role

  userData.role = 'student';

  //   set manually generated id

  userData.id = '20301001';

  //   crate a user
  const newUser = await User.create(userData);

  //   crate a student

  if (Object.keys(newUser).length) {
    // set id , _id as user
    studentData.id = newUser?.id;
    studentData.user = newUser._id; //reference _id

    const newStudent = await Student.create(studentData);
>>>>>>> 2f215544aec3abba236c353516a0a56f07eb7ec3
    return newStudent;
  }
};

export const UserServices = {
<<<<<<< HEAD
  crateStudentIntoDb,
=======
  createStudentIntoDB,
>>>>>>> 2f215544aec3abba236c353516a0a56f07eb7ec3
};
