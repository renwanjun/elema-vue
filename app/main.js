//main.js 

// var greeter = require('./Greeter.js');
// document.getElementById('root').appendChild(greeter());

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css';  //使用require导入css文件

//  class -> className ; for ->htmlFor
render(<Greeter name="greeter1" >
    <span>hello</span>
</Greeter>, document.getElementById('root'));

