import React, {useState} from 'react'

function Modal() {
// modal handler
const [showModal, setShowModal] = useState(false)
const openModal = () => setShowModal(true);
const closeModal = () => setShowModal(false)




    return (
        <div className ="modal">
            <h1>Creating react modal</h1>
            {!showModal && <button onClick={openModal}>Show Modal</button>}
            <Modal closeModal={closeModal} show={showModal} />
        </div>
    )
}


export default Modal