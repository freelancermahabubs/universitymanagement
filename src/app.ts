/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
<<<<<<< HEAD
import router from './app/routes';
import globalErrorHandler from './app/middlwares/globalErrorHandler';
=======

import globalErrorHandler from './app/middlwares/globalErrorhandler';
import router from './app/routes';
import notFound from './app/middlwares/notFound';
>>>>>>> 2f215544aec3abba236c353516a0a56f07eb7ec3

const app: Application = express();

// parsers

app.use(express.json());
app.use(cors());
// application Routes

<<<<<<< HEAD
app.use('/api/v1/', router);
=======
app.use('/api/v1', router);
>>>>>>> 2f215544aec3abba236c353516a0a56f07eb7ec3

const test = (req: Request, res: Response) => {
  res.send('Hello World!');
};
app.get('/', test);
<<<<<<< HEAD
app.use(globalErrorHandler)
=======

app.use(globalErrorHandler);

app.use(notFound)
>>>>>>> 2f215544aec3abba236c353516a0a56f07eb7ec3
export default app;
