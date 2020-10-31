import React from 'react';
import Modal from 'react-modal';
import FormModal from "./FormModal";

const customStyles = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        marginTop : '50%',
        transform : 'translate(-50%, -50%)'
    },
    overlay:{
        zIndex: '99'
    }
};

Modal.setAppElement('#root')

export default function PricingItem(props) {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="pricing-wrap mb-30">
                    <h3>{props.h3}</h3>
                    <h4>{props.price}</h4>
                    <p className="text-center">
                        {props.p}
                    </p>
                    <button onClick={openModal}>Получить</button>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button className="button-modal btn-default" onClick={closeModal}>Х</button>
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
                    <div className="section-title text-center">
                        <h2>Мы Вам перезвоним!</h2>
                        <p>Оставьте Ваши контакты!</p>
                    </div>
                    <FormModal/>
                </div>
            </Modal>
        </div>
    )
}

