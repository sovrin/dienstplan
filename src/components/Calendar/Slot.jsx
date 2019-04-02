import React, {useContext} from 'react';
import {Context} from './Context';
import {Column} from '../Base/Table';
import Button from '../Base/Button';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 02.04.2019
 * Time: 00:30
 */
export default ({}) => {
    const date = useContext(Context);

    return (
        <Column
            className="slot"
        >
            <Button
                link
            >

            </Button>

        </Column>
    );
}