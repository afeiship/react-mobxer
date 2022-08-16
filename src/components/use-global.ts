import { createContext, useContext, useRef } from 'react';
import { sharedStore } from './config-provider';

export default () => {
  const storeCtx = useRef(createContext(sharedStore.compositeStore));
  return useContext(storeCtx.current);
}
