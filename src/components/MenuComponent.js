import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle,Breadcrumb ,BreadcrumbItem,CardImgOverlay
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function RenderMenuItem({ dish ,onClick}) {
    return (
        <Card>
            <Link to={ `/menu/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 md-5 m-1">
                <RenderMenuItem dish={dish} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div class="col-12">
                    <h3>Menu</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}
export default Menu;