import React from 'react';
import {composer} from '../../utils';

export const SIZE = {
    1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: '0', 11: '1', 12: '2',
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 14.03.2019
 * Time: 15:11
 */
export default ({children, size}) => {
    const className = composer('column', {
        ['col-' + size]: (size)
    });

    return (
        <div className={className}>{children}</div>
    );
}