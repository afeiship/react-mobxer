import ConfigProvider from './components/config-provider';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import useGlobal from './components/use-global';
import useLocal from './components/use-local';
import watch from './components/watch';

export const obs = observer;
export const obsb = observable;
export { ConfigProvider, useGlobal, useLocal, watch };
