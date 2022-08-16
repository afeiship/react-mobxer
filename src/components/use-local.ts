import { useLocalObservable } from 'mobx-react';

function useLocal<TStore extends Record<string, any>>(value: TStore, annotations?): TStore {
  return useLocalObservable(() => value, annotations);
}

export default useLocal;
