import { Namespace } from "socket.io";
import { NextFunction, Request, Response } from "express";
import { IPayload } from "@authfunctions/express";
import { JwtPayload } from "jsonwebtoken";

interface CoreAuthValues {
  sendData: (res: Response, httpStatus: number, data: any) => void;
  validateMiddleware: (req: Request, res: Response, next: NextFunction) => void;
  validate: (token?: string) => [0 | 1 | 2 | 5, (JwtPayload & IPayload) | null]
}

export type LogLevels = "info" | "warn" | "error" | "debug";

export type LogFunction = (level: LogLevels, message: string) => void;

export interface CoreValues {
  auth: CoreAuthValues;
  logger: LogFunction;
  createNamespace: (path: `/${string}`) => Namespace
}
