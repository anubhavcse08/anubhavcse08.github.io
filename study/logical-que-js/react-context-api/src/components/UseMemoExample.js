import React, { useEffect, useMemo, useState } from 'react';
//Custom hook
const useTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return time;
}

const isPrime = (num) => {
    if (num === 2) {
        return true;
    }
    console.log(num);
    for (let i = 2; i < Math.ceil(num / 2); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

const UseMemoExample = () => {
    const [selectedNum, setSelectedNum] = React.useState(100);

    // `time` is a state variable that changes once per second,
    // so that it's always in sync with the current time.
    const time = useTime();

    // Calculate all of the prime numbers.
    // (Unchanged from the earlier example.) ------ Without useMemo
    /* const allPrimes = [];
    for (let counter = 2; counter < selectedNum; counter++) {
        if (isPrime(counter)) {
            allPrimes.push(counter);
        }
    } */

    // ------ With useMemo
    const allPrimes = useMemo(() => {
        let result = [];
        for (let counter = 2; counter < selectedNum; counter++) {
            if (isPrime(counter)) {
                result.push(counter);
            }
        }
        return result;
    }, [selectedNum]);

    return (
        <>
            <p className="clock">
                {`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}
            </p>
            <form>
                <label htmlFor="num">Your number:</label>
                <input
                    type="number"
                    value={selectedNum}
                    onChange={(event) => {
                        // To prevent computers from exploding,
                        // we'll max out at 100k
                        let num = Math.min(100_000, Number.parseInt(event.target.value));

                        setSelectedNum(num);
                    }}
                />
            </form>
            <address>
                There are {allPrimes.length} prime(s) between 1 and {selectedNum}:
                {' '}
                <span className="prime-list">
                    {allPrimes.join(', ')}
                </span>
            </address>
        </>
    );
}

export default UseMemoExample;