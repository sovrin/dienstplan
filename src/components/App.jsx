import React from 'react';
import Link from 'react-router-dom/es/Link';
import Route from 'react-router/es/Route';

import Login from '../routes/Login'
import Private from '../routes/Private';
import Dashboard from '../routes/Dashboard';

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 24.02.2019
 * Time: 19:30
 */
export default () => (
    <div className="container">
        <div>
            <nav>
                <Link to="/login">Login</Link>
            </nav>

            <Route
                path="/login"
                component={Login}
            />

            <Private
                path='/dashboard'
                authenticated={true}
                component={Dashboard}
            />
        </div>
    </div>
)