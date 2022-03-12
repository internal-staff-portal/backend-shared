import { Router } from "express";

export interface ISocketEvent {
  name: string;
  callback: Function
}

export interface Module {
  router: Router;
  name: string;
  path: `/${string}`;
  socketEvents?: ISocketEvent[];
}
