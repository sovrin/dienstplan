import {useState, useEffect} from 'react';
import fetch from 'unfetch';

/**
 *
 * @param module
 * @returns {*[]}
 */
export default (module) => {
    const endpoint = process.env.API_ENDPOINT + module;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const execute = async () => {
        const response = await fetch(endpoint);
        const json = await response.json();

        setLoading(false);
        setData(json);
    };

    useEffect(() => {
        execute();
    }, []);

    return [data, loading];
}
