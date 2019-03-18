import React from 'react';
import Column from './Base/Column';
import Columns from './Base/Columns';
import Container from './Base/Container';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 14.03.2019
 * Time: 15:14
 */
export default () => {
    return (
        <Container className="calendar">
            <Columns>
                <Column size={3}>KW: 11 | 11.03 - 17.03</Column>
                <div className="column col-1">a</div>
                <div className="column col-1">a</div>
                <div className="column col-1">a</div>
                <div className="column col-1">a</div>
                <div className="column col-1">a</div>
                <div className="column col-1">a</div>
                <div className="column col-1">a</div>
            </Columns>
        </Container>
    );
}
