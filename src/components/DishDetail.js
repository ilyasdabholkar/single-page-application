import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText,BreadcrumbItem,Breadcrumb } from 'reactstrap';
import {Link} from 'react-router-dom';

class DishDetail extends Component {

    constructor(props){
        super(props);
        this.state={
            comments : this.props.comments
        }
    }

    getFormatedDate(date) {
        let d = new Date(date);
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return (" , " + months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear())
    }

    render() {
        const cmt = this.props.comments.map((c) => {
            return (
                <div key = {c.id}>
                    <ul className="list-unstyled">
                        <li>{c.comment}</li>
                        <li>-- {c.author}{this.getFormatedDate(c.date)}</li>
                    </ul>
                </div>
            )
        });

        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 mt-3 mb-3">
                    <Card>
                        <CardImg top width="100%" src={this.props.dish.image} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 mt-3 mb-3">
                    <h3>Comments</h3>
                    {cmt}
                </div>
            </div>
            </div>
        )
    }

}

export default DishDetail;