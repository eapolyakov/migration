import React from 'react';
import Modal from 'react-modal';
import FormModal from "./FormModal";

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    },
    overlay:{
        zIndex: '99'
    }
};

Modal.setAppElement('#root')

export default function SliderItem(props){

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <div className="slider-active2 slider-next-prev-style">
                <div className="slider-items">
                    <div className="item">
                        <img src={props.img} alt={props.alt} className="slider"/>
                        <div className="slider-content text-center black-opacity">
                            <div className="table">
                                <div className="table-cell">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xs-12 col-md-8 col-md-offset-2">
                                                <h1>{props.h2}</h1>
                                                <p>{props.p}</p>
                                                <ul>
                                                    <li><a className="btn" href="#faq">Узнать больше</a></li>
                                                    <li><button className="btn btn-style" onClick={openModal}>Оставить заявку</button></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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