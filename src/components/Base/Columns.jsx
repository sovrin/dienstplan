import React from 'react';
import {composer} from '../../utils';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 14.03.2019
 * Time: 15:15
 */
export default ({children}) => {
    const className = composer('columns');

    return (
        <div className={className}>{children}</div>
    );
}