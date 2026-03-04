import { useState, useEffect } from "react";

const useFetch = (url: string): { data: any; loading: boolean; error: any } => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
            } catch (err: any) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;