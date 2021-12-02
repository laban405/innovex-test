import { useEffect,useState } from "react";

const useClock = (initialTime) => {
    const [time, setTime] = useState(initialTime);
  
    useEffect(() => {
      const id = setInterval(() => {
        setTime(() => time);
      }, 1000);
      return () => clearInterval(id);
    }, []);
  
    return time;
  }


  export default useClock;