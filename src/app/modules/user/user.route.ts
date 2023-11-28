<<<<<<< HEAD
import { Router } from 'express';
import { UserControllers } from './user.controller';

const router = Router();
router.post('/create-student', UserControllers.createStudent);
=======
import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();
// will call controller func
router.post('/create-student', UserControllers.createStudent);

>>>>>>> 2f215544aec3abba236c353516a0a56f07eb7ec3
export const UserRoutes = router;
