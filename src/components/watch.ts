import { toJS, autorun } from 'mobx';

type WatchCallback = (inTarget: any, inPlain) => void;

export default function watch(inTarget: any, inCallback: WatchCallback) {
  return autorun(() => {
    const plain = toJS(inTarget);
    inCallback(inTarget, plain);
  });
}
