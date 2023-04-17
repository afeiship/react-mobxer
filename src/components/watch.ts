import { toJS, autorun } from 'mobx';
import { useEffect } from 'react';
import type { IAutorunOptions } from 'mobx';

type WatchCallback = (inPlain: any) => void;

export function watch(inTarget: any, inCallback: WatchCallback, inOptions?: IAutorunOptions) {
  return autorun(() => {
    const plain = toJS(inTarget);
    inCallback(plain);
  }, inOptions);
}

export const useWatch = (inTarget: any, inCallback: WatchCallback, inOptions?: IAutorunOptions) => {
  useEffect(() => watch(inTarget, inCallback, inOptions), []);
};
