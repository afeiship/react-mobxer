import { ReactElement } from 'react';
import { configure } from 'mobx';
import camelcase from 'camelcase';

interface MobxConfigProps {
  children: ReactElement;
  context: any,
  options?: {};
}

function getFileName(inKey) {
  const paths = inKey.split(/[.-_/]/);
  const valid = paths.filter(Boolean);
  valid.pop();
  return camelcase(valid.join('-'));
}

// type object key is a string, value is dynamic Class, use T generic to avoid error
type SharedStore = {
  compositeStore: { [key: string]: unknown }
};

export const sharedStore: SharedStore = {
  compositeStore: {}
};


export default ({ children, context, options }: MobxConfigProps) => {
  // config mobx
  configure({ enforceActions: 'never', ...options });

  // @ts-ignore
  const keys = context.keys();

  sharedStore.compositeStore = keys.reduce((acc, key) => {
    const StoreClass = context(key).default;
    const storeKey = StoreClass.storeKey || getFileName(key);
    acc[storeKey] = new StoreClass();
    return acc;
  }, {});

  return children;
}
