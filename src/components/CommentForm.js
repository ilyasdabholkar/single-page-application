import React, { Component } from 'react';
import {
    Modal, ModalHeader, ModalBody, Label, Row, Col, Button
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

//Functions for Validations
//(1)Required field
const required = (val) => val && val.length;
//(2)Range 
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);
class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.handleClose();
    };

    render() {
        return (
            <Modal isOpen={this.props.show} toggle={this.props.handleClose}>
                <ModalHeader><b>Submit Comment</b></ModalHeader>
                <ModalBody>
                    <div className="container">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating"><b>Rating</b></Label>
                                <Control.select model=".rating" name="rating" id="rating" className="form-control" defaultValue="1">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Control.select>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="your name"><b>Your Name</b></Label>
                                <Control.text model=".yourname" id="lastname" name="lastname" placeholder="Your Name" className="form-control"
                                    validators={{
                                        required,minLength: minLength(3), maxLength: maxLength(15)
                                    }}/>
                                <Errors className="text-danger" model=".yourname" show="touched" messages={{
                                    required : ' Must be greater than 2 characters',
                                    minLength: ' Must be greater than 2 characters',
                                    maxLength: ' Must be 15 characters or less',
                                }} />
                            </Row>
                            <Row className="form-group">
                                    <Label htmlFor="comment"><b>Comment</b></Label>
                                    <Control.textarea model=".message" id="message" name="message" placeholder="" rows="6" className="form-control"/>        
                            </Row>
                            <Row className="form-group">
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </Row>
                        </LocalForm>
                    </div>

                </ModalBody>
            </Modal>
        );
    }
}
