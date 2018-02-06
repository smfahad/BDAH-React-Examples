import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddComment from './AddComment';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AddComment />, document.getElementById('root'));

registerServiceWorker();
