import 'reflect-metadata';

import {Container} from 'typedi';
import {useContainer} from 'routing-controllers';
import {Application} from './config/Application';


useContainer(Container);
Container.get(Application).start();
