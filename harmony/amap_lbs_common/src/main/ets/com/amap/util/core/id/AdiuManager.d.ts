import { k45 } from './ADIURunner'; export declare class AdiuManager { private f15; private i15; private static o15; private static v15; g15: string; private h15; private static instance?; constructor(context: Context); static getInstance(context: Context): AdiuManager; l15(): Promise<string>; p15(m45: k45): Promise<string>; u15(context: Context, l45: string): void; private m15; private w15; private x15; private n15; } 