import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Clock from "./Clock";

function App() {
  const [logsArray, setLogsArray] = useState([]);
  const [activeServers, setActiveServers] = useState(0);
  const [programTime, setProgramTime] = useState(
    new Date(new Date().setHours(12, 0, 0, 0))
  );
  const [actualTime, setActualTime] = useState(new Date());

  // //start logs
  // useEffect(() => {
  //   function randomIntFromInterval(min, max, action) {
  //     // min and max included
  //     let serverNo = Math.floor(Math.random() * (max - min + 1) + min);
  //     console.log(`start server min ${min} max ${max} random ${serverNo}`)
  //     if (action === "START") {
  //       setActiveServers((activeServers) => activeServers + serverNo);
  //     } else {
  //       setActiveServers((activeServers) => activeServers - serverNo);
  //     }
  //     return serverNo;
  //   }

  //   const interval = setInterval(function () {
  //     let date = new Date();
  //     let reportObj = {
  //       task: "START",
  //       interval: 30,
  //       precedence: 1,
  //       servers: randomIntFromInterval(10, 20, "START"),
  //       programtime: new Date(
  //         programTime.setSeconds(
  //           programTime.getSeconds() + (date - actualTime) / 1000
  //         )
  //       ).toLocaleTimeString(),
  //       actualtime: actualTime.toLocaleTimeString(),
  //     };
  //     setLogsArray((logsArray) => [...logsArray, reportObj]);

  //     console.log("date current", date);
  //     console.log("date hook", actualTime);
  //     console.log("date diff", (date - actualTime) / 1000);
  //     setActualTime(date);
  //   }, 1000 * 30);

  //   return () => clearInterval(interval);
  // }, []);

  function randomIntFromInterval(min, max, action) {
    // min and max included
    let serverNo = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(`${action} server min ${min} max ${max} random ${serverNo}`);
    if (action === "START") {
      setActiveServers((activeServers) => activeServers + serverNo);
    } else {
      setActiveServers((activeServers) => activeServers - serverNo);
    }
    return serverNo;
  }

  useInterval(() => {
    let date = new Date();
    let reportObj = {
      task: "START",
      interval: 30,
      precedence: 1,
      servers: randomIntFromInterval(10, 20, "START"),
      programtime: new Date(
        programTime.setSeconds(
          programTime.getSeconds() +
            Math.round((date - actualTime) / 1000 / 10) * 10
        )
      ).toLocaleTimeString(),
      actualtime: actualTime.toLocaleTimeString(),
    };
    setLogsArray((logsArray) => [...logsArray, reportObj]);

    console.log("date current", date);
    console.log("date hook", actualTime);
    console.log("date diff", Math.round((date - actualTime) / 1000 / 10) * 10);
    setActualTime(date);
  }, 1000 * 30);

  //stop logs
  // useEffect(() => {
  //   function randomIntFromInterval(min, max, action) {
  //     // min and max included
  //     let serverNo = Math.floor(Math.random() * (max - min + 1) + min);
  //     console.log(`stop server min ${min} max ${max} random ${serverNo}`)
  //     if (action === "START") {
  //       setActiveServers((activeServers) => activeServers + serverNo);
  //     } else {
  //       setActiveServers((activeServers) => activeServers - serverNo);
  //     }
  //     return serverNo;
  //   }

  //   const interval = setInterval(function () {
  //     let date = new Date();
  //     let reportObj = {
  //       task: "STOP",
  //       interval: 40,
  //       servers: randomIntFromInterval(10, activeServers, "STOP"),
  //       precedence: 2,
  //       programtime: new Date(
  //         programTime.setSeconds(
  //           programTime.getSeconds() + (date - actualTime) / 1000
  //         )
  //       ).toLocaleTimeString(),
  //       actualtime: actualTime.toLocaleTimeString(),
  //     };
  //     setLogsArray((logsArray) => [...logsArray, reportObj]);

  //     console.log("date current", date);
  //     console.log("date hook", actualTime);
  //     console.log("date diff", (date - actualTime) / 1000);
  //     setActualTime(date);
  //   }, 1000 * 40);

  //   return () => clearInterval(interval);
  // }, []);

  useInterval(() => {
    let date = new Date();
    let reportObj = {
      task: "STOP",
      interval: 40,
      servers: randomIntFromInterval(10, activeServers, "STOP"),
      precedence: 2,
      programtime: new Date(
        programTime.setSeconds(
          programTime.getSeconds() +
            Math.round((date - actualTime) / 1000 / 10) * 10
        )
      ).toLocaleTimeString(),
      actualtime: actualTime.toLocaleTimeString(),
    };
    setLogsArray((logsArray) => [...logsArray, reportObj]);

    console.log("date current", date);
    console.log("date hook", actualTime);
    console.log("date diff", Math.round((date - actualTime) / 1000 / 10) * 10);
    setActualTime(date);
  }, 1000 * 40);

  //report logs
  // useEffect(() => {
  //   const interval = setInterval(function () {
  //     let servers = activeServers;
  //     let date = new Date();
  //     let reportObj = {
  //       task: "REPORT",
  //       interval: 50,
  //       precedence: 3,
  //       servers: servers,
  //       programtime: new Date(
  //         programTime.setSeconds(
  //           programTime.getSeconds() + (date - actualTime) / 1000
  //         )
  //       ).toLocaleTimeString(),
  //       actualtime: actualTime.toLocaleTimeString(),
  //     };
  //     setLogsArray((logsArray) => [...logsArray, reportObj]);

  //     console.log("date current", date);
  //     console.log("date hook", actualTime);
  //     console.log("date diff", (date - actualTime) / 1000);
  //     setActualTime(date);
  //   }, 1000 * 50);

  //   return () => clearInterval(interval);
  // }, []);

  useInterval(() => {
    let servers = activeServers;
    let date = new Date();
    let reportObj = {
      task: "REPORT",
      interval: 50,
      precedence: 3,
      servers: servers,
      programtime: new Date(
        programTime.setSeconds(
          programTime.getSeconds() +
            Math.round((date - actualTime) / 1000 / 10) * 10
        )
      ).toLocaleTimeString(),
      actualtime: actualTime.toLocaleTimeString(),
    };
    setLogsArray((logsArray) => [...logsArray, reportObj]);

    console.log("date current", date);
    console.log("date hook", actualTime);
    console.log("date diff", Math.round((date - actualTime) / 1000 / 10) * 10);
    setActualTime(date);
  }, 1000 * 50);

  console.log("date hook out", actualTime);
  return (
    <div className="App">
      <div className="clock">
        <Clock initialTime={programTime}/>
      </div>
      <header className="App-header">
        <div className="App">
          <header className="App-header">
            <ul>
              {logsArray.map((item) => (
                <li>{`${item.actualtime} ${item.programtime} - ${item.task} ${
                  item.servers
                } servers ${
                  item.task === "REPORT" ? "running" : ""
                } ${activeServers}`}</li>
              ))}
            </ul>
          </header>
        </div>
      </header>
    </div>
  );
}

export default App;

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
