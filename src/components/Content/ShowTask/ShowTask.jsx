import React from 'react';
import './ShowTask.css'

const ShowTask = () => {
    return <form className="showing">
        <div><input type="text" name="" id="" placeholder="Исполнитель"/></div>
        <div><input type="text" name="" id="" placeholder="Крайний срок"/></div>
        <div><input type="text" name="" id="" placeholder="Комментарии"/></div>
        <button type="button">+</button>
    </form>
}

export default ShowTask;