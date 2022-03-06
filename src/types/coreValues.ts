import { NextFunction, Request, Response } from "express";

interface CoreAuthValues {
  sendData: (res: Response, httpStatus: number, data: any) => void;
  validateMiddleware: (req: Request, res: Response, next: NextFunction) => void;
}

export type LogLevels = "info" | "warn" | "error" | "debug";

export type LogFunction = (level: LogLevels, message: string) => void;

export interface CoreValues {
  auth: CoreAuthValues;
  logger: LogFunction;
}
