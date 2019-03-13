import {useState, useEffect} from 'react';
import fetch from 'unfetch';

/**
 *
 * @param url
 * @returns {*[]}
 */
export default (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const execute = async () => {
        const response = await fetch(url);
        const json = await response.json();

        setData(json);
        setLoading(false);
    };

    useEffect(() => {
        execute();
    }, []);

    return [data, loading];
}
