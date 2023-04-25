import { ElectronHandler } from 'main/preload';

declare global {
  interface Window {
    DataStore: {
      store: {
        get: (key: string) => any;
        set: (key: string, val: any) => void;
        // any other methods you've defined...
      };
    };
  }
}

export {};
