import {useState, useEffect} from 'react';

/**
 *
 * @returns {*[]}
 * @param module
 */
export default (module) => {
    const endpoint = 'ws://localhost:3000';

    const [value, updateValue] = useState([]);
    const socket = new WebSocket(endpoint, 'echo-protocol');

    const listener = ({data}) => {
        updateValue(data);
    };

    const bind = () => {
        socket.addEventListener('message', listener);
        socket.addEventListener('open', (w) => {
            socket.send('connected');
            console.info('asd', w);
        });
    };

    const unbind = () => {
        socket.removeEventListener('message', listener);
        socket.close();
    };

    const send = (payload) => (
        socket.send(JSON.stringify({module, payload}))
    );

    useEffect(bind, unbind);

    return [value, send];
}
