/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './src/page/Home'
import Products from './src/component/Products'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
