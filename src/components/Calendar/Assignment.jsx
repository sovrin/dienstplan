import React from 'react';
import {Column} from '../Base/Table';
import Button from '../Base/Button';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 01.04.2019
 * Time: 00:29
 */
export default ({name}) => (
    <Column className="assignment">
        <Button
            link
        >
            {name}
        </Button>
    </Column>
)