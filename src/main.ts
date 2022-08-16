import ConfigProvider from './components/config-provider';
import { observer } from 'mobx-react';
import useGlobal from './components/use-global';
import useLocal from './components/use-local';

export const obs = observer;
export { ConfigProvider, useGlobal, useLocal };
