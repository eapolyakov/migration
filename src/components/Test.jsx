import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import FormModal from "./FormModal";

let appElement = document.getElementById('#root');

Modal.setAppElement(appElement);

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
export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = { modalIsOpen: false };
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    }

    handleModalCloseRequest = () => {
        // opportunity to validate something and keep the modal open even if it
        // requested to be closed
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.openModal}>Open Modal</button>
                <Modal
                    style={customStyles}
                    closeTimeoutMS={150}
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.handleModalCloseRequest}
                >
                    <button className="button-modal btn-default" onClick={this.handleModalCloseRequest}>Х</button>
                    <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
                        <div className="section-title text-center">
                            <h2>Мы Вам перезвоним!</h2>
                            <p>Оставьте Ваши контакты!</p>
                        </div>
                        <FormModal/>

                    </div>
                </Modal>
            </div>
        );
    }
}