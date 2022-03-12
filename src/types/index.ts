import { CoreValues, LogFunction, LogLevels } from "./coreValues";
import { ISocketEvent, Module } from "./module";

type ModuleConstructor = (core: CoreValues) => Module;

export {
  CoreValues,
  ISocketEvent,
  LogFunction,
  LogLevels,
  Module,
  ModuleConstructor,
};
