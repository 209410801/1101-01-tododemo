import { useState } from 'react';
import Backdrop_01 from './Backdrop_01';
import Modal_01 from './Modal_01';

function Todo_01 (props) {
    const [showModal, setShowModal] = useState(); //const [值, 方法] = useState(); //當useState資料被改過後，return會重新跑一次。

    function showModalHandler() {
        setShowModal(true);
    }

    function closeModalHandler() {
        setShowModal(false);
    }
    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={showModalHandler}>Delete</button>
            </div>
            {showModal && <Backdrop_01 onClose={closeModalHandler}/>}
            {showModal && <Modal_01 text='Are you sure?' onClose={closeModalHandler}/> }
       </div>       
    );
}

export default Todo_01;