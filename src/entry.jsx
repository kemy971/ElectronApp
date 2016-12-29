import * as React from 'react';
import * as ReactDom from 'react-dom';

import {App} from './App.jsx';
import style from './css/style.css';


var element = React.createElement(App, {});

ReactDom.render(element, document.getElementById('app'));
