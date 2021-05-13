import React, { Component } from 'react';
import {
    Card, CardImg, CardBody, CardTitle, CardText, BreadcrumbItem, Breadcrumb, Button,
    Modal, ModalHeader, ModalBody, Label, Row
} from 'reactstrap';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';

//Functions for Validations
//(1)Required field
const required = (val) => val && val.length;
//(2)Range 
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isCommentModalOpen: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleCommentModal = this.toggleCommentModal.bind(this);

    }

    toggleCommentModal() {
        this.setState({ isCommentModalOpen: !this.state.isCommentModalOpen });
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        //alert('Current State is: ' + JSON.stringify(values));
        this.toggleCommentModal();
        this.props.addComment(this.props.dishId,values.rating,values.yourname,values.message);
    };

    render() {
        return (
            <>
                <Button outline color="secondary" onClick={this.toggleCommentModal}><i class="fa fa-lg fa-pencil" aria-hidden="true"></i> Submit Comment</Button>{' '}
                <Modal isOpen={this.state.isCommentModalOpen} toggle={this.handleSubmit}>
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
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }} />
                                    <Errors className="text-danger" model=".yourname" show="touched" messages={{
                                        required: ' Must be greater than 2 characters',
                                        minLength: ' Must be greater than 2 characters',
                                        maxLength: ' Must be 15 characters or less',
                                    }} />
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="comment"><b>Comment</b></Label>
                                    <Control.textarea model=".message" id="message" name="message" placeholder="" rows="6" className="form-control" />
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
            </>
        );
    }
}

function RenderComments({ comments ,addComment ,dishId}) {
    if (comments != null) {
        return (
            <div className="col-12 col-md-5 mt-3 mb-3">
                <h3>Comments</h3>
                <div className="row">
                    {comments.map((c) => {
                        return (
                            <div key={c.id}>
                                <ul className="list-unstyled">
                                    <li>{c.comment}</li>
                                    <li>-- {c.author} {new Date(c.date).toLocaleDateString('en-GB')}</li>
                                </ul>
                            </div>
                        );
                    })}
                </div>
                <CommentForm dishId={dishId} addComment={addComment}/>
            </div>
        )

    }
}

const DishDetail = (props) => {
    if(props.isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }else if(props.errMess){
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }else if(props.dish != null){
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 mt-3 mb-3">
                        <Card>
                            <CardImg top width="100%" src={baseUrl + props.dish.image} alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">{props.dish.name}</CardTitle>
                                <CardText>{props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-7 mt-3 mb-3">
                        <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id} />
                    </div>
                </div>
            </div>

        )
    }else{
        <div>
            
        </div>
    }
}


export default DishDetail;