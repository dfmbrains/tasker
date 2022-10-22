import React from 'react';
import './tasksCard.scss';
import TasksImg from './img/tasks.png';

const TasksCard = () => {
    return (
        <div className="tasksCard">
            <img src={TasksImg} className="tasksCard__img"/>
        </div>
    );
};

export default TasksCard;