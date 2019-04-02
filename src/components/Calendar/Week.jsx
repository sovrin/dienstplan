import React, {useContext} from 'react';
import moment from 'moment';
import {Column} from '../Base/Table';
import {Context} from './Context';
import Dropdown, {Entry} from '../Base/Dropdown';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 01.04.2019
 * Time: 00:46
 */
export default () => {
    const date = useContext(Context);

    const week = moment(date)
        .endOf('year')
        .day(-1)
        .week()
    ;

    const weeks = [...Array(week)]
        .map((_, i) => i + 1)
        .map(week => (
            <Entry
                key={week}
            >
                KW. {week}
            </Entry>
        ));

    return (
        <Column className="week">
            <Dropdown
                label={'Kalenderwoche'}
            >
                {weeks}
            </Dropdown>
        </Column>
    );
}