import React from 'react';
import {composer} from '../../utils';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 14.03.2019
 * Time: 15:16
 */
export default ({children, className}) => {

    className = composer('container', className);

    return (
        <div className={className}>
            {children}
        </div>
    );
}
