import React from 'react';

import Input from '../components/Input';
import Button from '../components/Button'

export default class FormModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            SendMail:{
                name: '',
                phone: ''
            },
        }
        this.handlePhone = this.handlePhone.bind(this);
        this.handleFullName = this.handleFullName.bind(this);
        this.handleSendMail = this.handleSendMail.bind(this);
    }

    /* This lifecycle hook gets executed when the component mounts */

    handleFullName(e) {
        let value = e.target.value;
        this.setState( prevState => ({ SendMail :
                {...prevState.SendMail, name: value
                }
        }), () => console.log(this.state.SendMail))
    }

    handlePhone(e) {
        let value = e.target.value;
        this.setState( prevState => ({ SendMail :
                {...prevState.SendMail, phone: value
                }
        }), () => console.log(this.state.SendMail))
    }

    handleSendMail(e) {
        e.preventDefault();
        let userData = this.state.SendMail;


        fetch('http://edu.eapolyak.beget.tech/sendMail',{
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            response.json().then(data =>{
                console.log("Successful" + data);
            })
        })
    }

    render() {
        return (<form className="container" onSubmit={this.handleSendMail}>
                <Input
                    inputType={'text'}
                       name= {'name'}
                       title= {''}
                       value={this.state.SendMail.name}
                       placeholder = {'Имя'}
                       handleChange = {this.handleFullName}

                />
                <Input
                    inputType={'phone'}
                       name={'phone'}
                       title= {''}
                       value={this.state.SendMail.phone}
                       placeholder = {'Телефон'}
                       handleChange={this.handlePhone}
                />
                <Button
                    action = {this.handleSendMail}
                    type = {'secondary'}
                    title = {'Отправить'}
                    style={buttonStyle}

                />
            </form>
        );
    }
}

const buttonStyle = {
    margin : '10px 10px 10px 10px'
}