import { Router } from "express";

export interface Module {
  router: Router;
  name: string;
  path: `/${string}`;
}
