import React from 'react';
export function TimerInput(props) {

    const textareaRef = React.useRef(null);
    const startTask = React.useCallback((limit) => {
      if(textareaRef.current) {
        props.addTask({
          id: new Date().getTime(), // IDはユニークな値にする
          icon: '☠️', // このあたりの値は好きにしてください
          displayName: 'ミスター死',
          accountName: 'mr_death',
          content: textareaRef.current.value,
          limit: limit
        });
        {textareaRef.current.value = "";}
      }
    }, [textareaRef.current, props.addTask]);
    const startTaskBy = limit => () => startTask(limit);
    return (
      <div>
        <div><textarea className="task-textarea" ref={textareaRef}></textarea></div>
        <div><button onClick={startTaskBy(1000 * 60 * 5)} className="send-task" >Start 5min</button></div>
        <div><button onClick={startTaskBy(1000 * 60 * 30)} className="send-task" >Start 30min</button></div>
      </div>
    );
  }

  