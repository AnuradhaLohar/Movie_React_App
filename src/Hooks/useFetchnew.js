import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const useFetchnew = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(url);
                setData(res.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [url]);

    return { data, error, loading };
}

export default useFetchnew