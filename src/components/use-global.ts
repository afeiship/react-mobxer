import { sharedStore } from './config-provider';

function useGlobal<T>() {
  return sharedStore.compositeStore as T;
}

export default useGlobal;
