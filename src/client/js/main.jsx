import React from 'react';
import ReactDOM from 'react-dom';
import {TimerInput} from './taskInput';
import {Timeline} from './timeLine';
import './../css/style';

export function App() {
  const [tasks, setTask] = React.useState([]);
  const addTask = React.useCallback(task => {
    setTask(prev => [task, ...prev]), [setTask];
    {
      setTimeout(() => {
        // ブラウザが通知をサポートしているか確認する
        if (!("Notification" in window)) {
          alert("未対応のブラウザです");
        } else {
          // 許可を求める
          Notification.requestPermission().then(permission => {
            if (permission == "granted") {
              console.log(task.limit);
              new Notification("孤独なタスク管理", {
                body: task.content + " が終了予定です。",
                data: {
                  taskData: task
                }
              });
            } else if (permission == "denied") {
              // 拒否
            } else if (permission == "default") {
              // 無視
            }
          });
        }
      }, Number(task.limit));
    }
  });

  return (
    <div>
      <TimerInput addTask={addTask} />
      <Timeline tasks={tasks} />
    </div>
  );
}

const target = document.querySelector("#app");
ReactDOM.render(<App />, target);
