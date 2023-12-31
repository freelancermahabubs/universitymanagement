/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import  {  Request, Response, NextFunction } from 'express';
const globalErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = 500;
    const message = error.message || 'Something went Wrong!';
    return res.status(statusCode).json({
      success: false,
      message,
      error: error,
    });
  }

  export default globalErrorHandler