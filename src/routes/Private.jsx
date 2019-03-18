import React from 'react';
import Redirect from 'react-router/es/Redirect';
import Route from 'react-router/es/Route';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 14.03.2019
 * Time: 00:07
 */
export default ({component: Component, authenticated, ...rest}) => {

    const render = (props) => (authenticated === true)
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
    ;

    return (
        <Route
            {...rest}
            render={render}
        />
    );
}