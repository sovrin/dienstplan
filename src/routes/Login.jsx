import React, {useState} from 'react';
import {useImmer} from 'use-immer';
import useRequest from '../hooks/useRequest';
import Button from '../components/Base/Button';

import {compose} from '../utils';

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 26.02.2019
 * Time: 21:05
 */
export default () => {

    const data = useRequest('http://localhost:3000/api/login', {
            method: 'POST',
            body: JSON.stringify({username: 'foo', password: 'bar'}),
        },
    );

    console.info(data);

    return (
        <div className="login">
            <div className="columns">
                <div className="column col-3"/>
                <div className="column col-6">
                    <input className="form-input" type="text" id="username" placeholder="Name"/>
                    <input className="form-input" type="text" id="password" placeholder="Passwort"/>
                    <Button loading={false}>Login</Button>
                </div>
            </div>
        </div>
    );
}