import { CoreValues } from "./coreValues";
import { Module } from "./module";

type ModuleConstructor = (core: CoreValues) => Module;

export { CoreValues, Module, ModuleConstructor };
