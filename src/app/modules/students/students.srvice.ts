<<<<<<< HEAD

import { Students } from './students.Model';


=======
import { Student } from "./students.Model";




>>>>>>> 2f215544aec3abba236c353516a0a56f07eb7ec3
const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};
const getSingleStudentsFromDB = async (id: string) => {
  // const result = await Students.findOne({ id });
  // Aggregate

<<<<<<< HEAD
  const result = await Students.aggregate([
=======
  const result = await Student.aggregate([
>>>>>>> 2f215544aec3abba236c353516a0a56f07eb7ec3
    {
      $match: { id: id },
    },
  ]);
  return result;
};
const deleteStudentsFromDB = async (id: string) => {
<<<<<<< HEAD
  const result = await Students.updateOne({ id }, { isDeleted: true });
=======
  const result = await Student.updateOne({ id }, { isDeleted: true });
>>>>>>> 2f215544aec3abba236c353516a0a56f07eb7ec3
  return result;
};

export const StudentsServices = {

  getAllStudentsFromDB,
  getSingleStudentsFromDB,
  deleteStudentsFromDB,
};
