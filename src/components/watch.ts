import { toJS, autorun } from 'mobx';
import { useEffect } from 'react';

type WatchCallback = (inTarget: any, inPlain) => void;

export function watch(inTarget: any, inCallback: WatchCallback) {
  return autorun(() => {
    const plain = toJS(inTarget);
    inCallback(inTarget, plain);
  });
}

export const useWatch = (inTarget: any, inCallback: WatchCallback) => {
  useEffect(() => watch(inTarget, inCallback), []);
};
