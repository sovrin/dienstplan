import React from 'react';
import auth from '../services/auth';
import Button from '../components/Base/Button';
import Input from '../components/Base/Input';

import {produce} from '../utils';

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 26.02.2019
 * Time: 21:05
 */
export default () => {
    const [params, updateParams] = produce({
        username: "",
        password: ""
    });
    const [loading, setLoading] = produce(false);

    /**
     *
     * @param e
     * @returns {Promise<void>}
     */
    const onLogin = async (e) => {
        e.preventDefault();

        setLoading(true);
        try {
            await auth('http://localhost:3000/api/login', params);
        } catch (e) {
            console.info(e);
        } finally {
            setLoading(false);
        }
    };

    /**
     *
     * @param e
     */
    const onInput = (e) => {
        const {target: {name, value}} = e;

        updateParams(draft => {
            draft[name] = value;
        });
    };

    return (
        <div className="login">
            <div className="columns">
                <div className="column col-3"/>
                <div className="column col-6">
                    <form onSubmit={onLogin}>
                        <Input
                            name="username"
                            type="text"
                            placeholder="Username"
                            onInput={onInput}
                        />

                        <Input
                            name="password"
                            type="password"
                            placeholder="Password"
                            onInput={onInput}
                        />

                        <Button
                            type="submit"
                            loading={loading}
                            onClick={onLogin}
                        >
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}