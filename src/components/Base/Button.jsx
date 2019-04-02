import React from 'react';
import {composer} from '../../utils';

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 26.02.2019
 * Time: 21:06
 */
export default ({children, loading, block, link, toggle, ...rest}) => {
    const className = composer('btn', {
        loading,
        'dropdown-toggle': (toggle),
        'btn-link': (link),
        block,
    });

    return (
        <button className={className} {...rest}>
            {children}
        </button>
    );
}