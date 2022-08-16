import { sharedStore } from './config-provider';

export default () => {
  return sharedStore.compositeStore;
};
