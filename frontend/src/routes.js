import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Produto from './pages/Produto';
import Menu from './pages/Menu';
import NewProduct from './pages/NewProduct';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/produto" component={Produto} />
                <Route path="/menu" component={Menu} />
                <Route path="/product/novo" component={NewProduct} />
            </Switch>
        </BrowserRouter>
    );
}