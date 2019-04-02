import React, {cloneElement} from 'react';
import {composer} from '../../utils';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 01.04.2019
 * Time: 23:06
 */
export default ({children, className, striped, hover}) => {
    className = composer('table', className, {
        ['table-striped']: (striped),
        ['hover-hover']: (hover),
    });

    return (
        <table className={className}>
            {children}
        </table>
    );
}

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
export const Head = ({children}) => (
    <thead className="head">
        {children}
    </thead>
);

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
export const Body = ({children}) => (
    <tbody className="body">
        {children}
    </tbody>
);

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
export const Row = ({children}) => (
    <tr className="row">
        {children}
    </tr>
);

/**
 *
 * @param children
 * @param className
 * @returns {*}
 * @constructor
 */
export const Column = ({children, className}) => (
    <td className={composer('column', className)}>
        {children}
    </td>
);