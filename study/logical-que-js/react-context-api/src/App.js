import { createContext, useEffect, useState } from 'react';
import './App.css';
import UserComments from './components/UserComments';
import useFetch from './customHooks/usefetch';
import HocWithLoadingComp from './components/HocWithLoadingComp';
import { Link } from 'react-router-dom';

export const CommentContext = createContext({});

function App() {
  const [count, setCount] = useState(0);
  // const [data] = useFetch('https://jsonplaceholder.typicode.com/comments');
  const [data] = useFetch('https://jsonplaceholder.typicode.com/users');

  const WithLoadingUserComment = HocWithLoadingComp(UserComments);

  // useEffect(() => {
  //   if(count >= 5) {
  //     const countReg = setTimeout(() => {
  //       console.log("Reseting Count after 5 times clicked");
  //     }, 1000);

  //     return () => clearTimeout(countReg);
  //   }
  // }, [count]);

  const promiseFn = () => {
    return new Promise((resolve, reject) => {
      console.log("count reached to higher limit. it will be reset to 0 in 5 seconds");
      setTimeout(() => {
        console.log("Reseting Count after 5000 milliseconds");
        setCount(0);
      }, 5000);
    });
  }

  const handleCount = () => {
    if (count >= 5) {
      setCount("Count reached to higher limit. it will be reset to 0 in 5 seconds");
      setTimeout(() => {
        console.log("Reseting Count after 5000 milliseconds");
        setCount(0);
      }, 5000);
    } else {
      setCount(prevState => prevState + 1);
    }
  }

  return (
    // <CommentContext.Provider value={data}>
    //   <div className="App">
    //     <h2 style={{ textAlign: "center" }}>User's comment</h2>
    //     <div style={{display: "flex", flexDirection: "column", gap: 5, margin: 20}}>
    //       <Link to="/countDownPage">Go to Count down page</Link>
    //       <Link to="/LRU">Go to Least Recently Used activities page</Link>
    //     </div>
    //     <WithLoadingUserComment isLoading={!data} hello={"Hello Anubhav"} />
    //   </div>
    // </CommentContext.Provider>


    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => handleCount()}>Increment</button>
    </div>
  );
}

export default App;
