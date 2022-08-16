import ConfigProvider from './components/config-provider';
import { observer } from 'mobx-react';
import useGlobal from './components/use-global';
import { useLocalObservable } from 'mobx-react';

export const obs = observer;
export const useLocal = useLocalObservable;
export { ConfigProvider, useGlobal };
