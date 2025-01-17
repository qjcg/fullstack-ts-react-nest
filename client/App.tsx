import { notification } from 'antd';
import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import './App.less';
// Pages
import { AppLayout } from './Layout/AppLayout';

notification.config({
    placement: 'topRight',
    top: 72,
    duration: 5,
});

const AppImpl: React.FC = () => {
    return (
        <BrowserRouter>
            <div className='App'>
                <AppLayout />
            </div>
        </BrowserRouter>
    );
};

export const App = hot(module)(AppImpl);
