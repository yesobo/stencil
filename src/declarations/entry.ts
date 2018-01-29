import * as d from './index';


export interface EntryModule {
  entryKey?: string;
  moduleFiles: d.ModuleFile[];
  compiledModuleJsText?: string;
  compiledModuleLegacyJsText?: string;
  requiresScopedStyles?: boolean;
  modeNames?: string[];
  entryBundles?: EntryBundle[];
}

export interface EntryBundle {
  fileName?: string;
  outputs?: {
    filePath?: string;
  }[];
  modeName?: string;
  scopedStyles?: boolean;
  target?: string;
}

export type EntryPoint = EntryComponent[];

export interface EntryComponent {
  tag: string;
  dependencyOf?: string[];
}