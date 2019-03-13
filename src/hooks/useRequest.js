import {useState, useEffect} from 'react';
import fetch from 'unfetch';

export default (url, req) => {
    const [res, setRes] = useState({
        data: null,
        pending: false,
        completed: false,
        error: false,
    });

    useEffect(() => {
        setRes({
            data: null,
            pending: true,
            completed: false,
            error: false,
        });
        fetch(url, req)
            .then(res =>
                setRes({
                    data: res.data,
                    pending: false,
                    error: false,
                    complete: true
                }),
            )
            .catch(() =>
                setRes({
                    data: null,
                    pending: false,
                    error: true,
                    complete: true
                }),
            );
    }, []);
    return res;
}
