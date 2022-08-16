import { useLocalObservable } from 'mobx-react';

export default (inValue: any, annotations?: any) => {
  return useLocalObservable(() => inValue, annotations);
};
