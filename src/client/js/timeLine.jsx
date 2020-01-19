import React from 'react';
import {Task} from './task';

export function Timeline(props) {
    const taskList = props.tasks.map((tw) => (
      <Task
        key={tw.id}
        icon={tw.icon}
        displayName={tw.displayName}
        accountName={tw.accountName}
        content={tw.content}
      />
    ));
  
    return <div className="timeline">{taskList}</div>;
}