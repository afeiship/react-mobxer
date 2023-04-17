import { toJS, autorun } from 'mobx';
import { useEffect } from 'react';

type WatchCallback = (inPlain: any) => void;

export function watch(inTarget: any, inCallback: WatchCallback) {
  return autorun(() => {
    const plain = toJS(inTarget);
    inCallback(plain);
  });
}

export const useWatch = (inTarget: any, inCallback: WatchCallback) => {
  useEffect(() => watch(inTarget, inCallback), []);
};
