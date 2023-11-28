export type TUser = {
  id: string;
  password: string;
<<<<<<< HEAD
  needsPasswrodchange: boolean;
=======
  needsPasswrodChange: boolean;
>>>>>>> 2f215544aec3abba236c353516a0a56f07eb7ec3
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};
