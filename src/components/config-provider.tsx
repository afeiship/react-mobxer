import { ReactElement } from 'react';
import { configure } from 'mobx';
import camelcase from 'camelcase';

const FILENAME_RE = /[.-_/]/;

interface MobxConfigProps {
  children: ReactElement;
  context: any;
  inject?: (v: any) => void;
  options?: {};
}

// type object key is a string, value is dynamic Class, use T generic to avoid error
type SharedStore<T> = {
  compositeStore: T;
};

function getFileName(inKey) {
  const paths = inKey.split(FILENAME_RE);
  const valid = paths.filter(Boolean);
  valid.pop();
  return camelcase(valid.join('-'));
}

export const sharedStore: SharedStore<any> = {
  compositeStore: {}
};

function ConfigProvider<T>({ children, context, inject, options }: MobxConfigProps) {
  // config mobx
  configure({ enforceActions: 'never', ...options });

  const keys = context.keys();

  sharedStore.compositeStore = keys.reduce((acc, key) => {
    const StoreClass = context(key).default;
    const storeKey = StoreClass.storeKey || getFileName(key);
    acc[storeKey] = new StoreClass();
    return acc;
  }, {}) as T;

  if (inject) inject(sharedStore.compositeStore);

  return children;
}

export default ConfigProvider;
