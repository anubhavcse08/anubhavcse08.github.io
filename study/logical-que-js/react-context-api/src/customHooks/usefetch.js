import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(url).then(res => setData(res.data)).catch(err => setData(err));
    }, [url]);

    return [data];
}

export default useFetch;