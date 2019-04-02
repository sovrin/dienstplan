import React, {useContext} from 'react';
import moment from 'moment';
import {Context} from './Context';
import {Column} from '../Base/Table';
import Button from '../Base/Button';

const DATE_FORMAT = 'DD.MM. ddd';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 01.04.2019
 * Time: 00:32
 */
export default ({offset}) => {
    const date = useContext(Context);

    const display = moment(date)
        .add(offset, 'days')
        .format(DATE_FORMAT)
    ;

    return (
        <Column
            className="day"
        >
            <Button
                block
                link
            >
                {display}
            </Button>
        </Column>
    );
}