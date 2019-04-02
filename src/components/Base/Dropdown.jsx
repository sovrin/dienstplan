import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Icon from './Icon';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 09.03.2018
 * Time: 16:27
 */
export default ({label, children}) => (
    <div className="dropdown">
        <Button
            toggle
            link
        >
            {label}
            <Icon type={Icon.Type.CARET}/>
        </Button>
        <ul className="menu">
            {children}
        </ul>
    </div>
);

export const Entry = ({children}) => (
    <li className="menu-item">
        <a href="#dropdowns">{children}</a>
    </li>
);