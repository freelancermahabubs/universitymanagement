import { Router } from 'express';
<<<<<<< HEAD
import { StudentsRoutes } from '../modules/students/stundents.route';
import { UserRoutes } from '../modules/user/user.route';

const router = Router();
const moduleRoutes = [{ path: '/users', route: UserRoutes }, { path: '/students', route: StudentsRoutes }];

moduleRoutes.forEach(route => router.use(route.path, route.route));
=======

import { UserRoutes } from '../modules/user/user.route';
import { StudentsRoutes } from '../modules/students/stundents.route';

const router = Router();

const moduleRoutes = [
  { path: '/users', route: UserRoutes },
  { path: '/students', route: StudentsRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route)); 

>>>>>>> 2f215544aec3abba236c353516a0a56f07eb7ec3
export default router;
