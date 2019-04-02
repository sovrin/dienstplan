import React from 'react';
import moment from 'moment';
import useFetch from '../../hooks/useFetch';
import Container from '../Base/Container';
import Table, {Body, Head, Row} from '../Base/Table';
import Assignment from './Assignment';
import Context from './Context';
import Slot from './Slot';
import Week from './Week';
import Day from './Day';

moment.locale('de');

// wednesday
const WEEK_STARTS_AT = 3;

// count of days to show
const DAYS = 4;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 14.03.2019
 * Time: 15:14
 */
export default () => {
    const [data, isLoading] = useFetch('/dashboard');
    const date = moment()
        .day(WEEK_STARTS_AT)
    ;

    if (!data) {
        return null;
    }

    const days = [...Array(DAYS)]
        .map((_, i) => <Day offset={i} key={i}/>)
    ;

    const {assignments} = data;

    const children = assignments
        .map(({name}, j) => (
            <Row
                gapless
                key={name}
            >
                <Assignment name={name}/>
                {[...Array(DAYS)]
                    .map((_, i) => <Slot id={[j, i]} key={i}/>)
                }
            </Row>
        ));

    return (
        <Context date={date}>
            <Container
                className="calendar"
            >
                <Table
                    hover
                    striped
                >
                    <Head>
                        <Row>
                            <Week/>
                            {days}
                        </Row>
                    </Head>
                    <Body>
                        {children}
                    </Body>
                </Table>

                {/*<Columns*/}
                {/*    gapless*/}
                {/*>*/}

                {/*    {days}*/}
                {/*</Columns>*/}

            </Container>
        </Context>
    );
}

