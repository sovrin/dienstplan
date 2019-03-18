import React from 'react';
import {composer} from '../../utils';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 13.03.2019
 * Time: 23:45
 */
export default ({...rest}) => {
    const className = composer('form-input');

    return (
        <input
            className={className}
            {...rest}
        />
    );
}