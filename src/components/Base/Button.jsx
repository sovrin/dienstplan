import React from 'react';
import {composer} from '../../utils';

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 26.02.2019
 * Time: 21:06
 */
export default ({children, loading, block, ...rest}) => {
    const className = composer('btn', {loading, block});

    return (
        <button className={className} {...rest}>
            {children}
        </button>
    );
}