import { toJS, autorun } from 'mobx';
import { useEffect } from 'react';
import type { IAutorunOptions } from 'mobx';

type WatchCallback = (inPlain: any) => void;

const defaults: IAutorunOptions = { delay: 10 };

export function watch(inTarget: any, inCallback: WatchCallback, inOptions?: IAutorunOptions) {
  const opts = { ...defaults, inOptions };
  return autorun(() => {
    const plain = toJS(inTarget);
    inCallback(plain);
  }, opts);
}

export const useWatch = (inTarget: any, inCallback: WatchCallback, inOptions?: IAutorunOptions) => {
  useEffect(() => watch(inTarget, inCallback, inOptions), []);
};
