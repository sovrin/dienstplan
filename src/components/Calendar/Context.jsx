import React from 'react';

const Context = React.createContext({});

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 01.04.2019
 * Time: 00:50
 */
export default ({children, date}) => (
    <Context.Provider value={date}>
        {children}
    </Context.Provider>
);

export const Consumer = Context.Consumer;
export {Context};