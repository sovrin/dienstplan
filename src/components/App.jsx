import React, {Component} from 'react';
import Link from 'react-router-dom/es/Link';

import Login from '../routes/Login'
import Route from 'react-router/es/Route';

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 24.02.2019
 * Time: 19:30
 */
export default class App extends Component {

    /**
     *
     * @returns {*}
     */
    render() {
        return (
            <div className="container">
                <div>
                    <nav>
                        <Link to="/login">Login</Link>
                    </nav>

                    <Route path="/login" component={Login}/>
                </div>
            </div>
        );
    }
}