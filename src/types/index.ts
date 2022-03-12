import { CoreValues, LogFunction, LogLevels } from "./coreValues";
import { Module } from "./module";

type ModuleConstructor = (core: CoreValues) => Module;

export { CoreValues, LogFunction, LogLevels, Module, ModuleConstructor };
