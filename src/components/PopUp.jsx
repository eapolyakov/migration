import React from 'react';
import Modal from 'react-modal';
import FormModal from "./FormModal";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay:{
        zIndex: '99'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

export default function PopUp() {

    let subtitle;

    const [modalIsOpen, setIsOpen] = React.useState(false);


    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#922936';
    }

    function closeModal() {
        setIsOpen(false);

    }
    setTimeout(function openModal() {
        setIsOpen(true);
        }, 2000);

    clearTimeout(function openModal() {
        setIsOpen(false);
    }, 1000);

    return (
        <div>
            <button onClick>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button className="button-modal btn-default" onClick={closeModal}>Х</button>
            <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
                <div className="section-title text-center">
                    <h2 ref={_subtitle => (subtitle = _subtitle)}>Мы Вам перезвоним!</h2>
                    <p>Оставьте Ваши контакты!</p>
                </div>
                <FormModal/>

            </div>
            </Modal>
        </div>
    );
}