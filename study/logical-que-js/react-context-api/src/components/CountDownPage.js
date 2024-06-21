import { useEffect, useState } from "react";

const CountDownPage = () => {
    const [currentCounDownValue, setCurrentCounDownValue] = useState(100);

    useEffect(() => {
        for (let i = 100; i >= 0; i--) {
            setTimeout(() => {
                setCurrentCounDownValue(i);
            }, 1000 * (100 - i));
        }
    }, []);

    return (
        <h1>100 seconds count down: {currentCounDownValue}</h1>
    )
}

export default CountDownPage;