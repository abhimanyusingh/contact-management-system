import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ContactDashboardPage from '../components/ContactDashboardPage';
import AddContactPage from '../components/AddContactPage';
import EditContactPage from '../components/EditContactPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div className="contact-container">
            <Header />
            <Switch>
                <Route path="/" component={ContactDashboardPage} exact={true} />
                <Route path="/create" component={AddContactPage} />
                <Route path="/edit/:id" component={EditContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
