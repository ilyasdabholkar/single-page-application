import { Header } from './Header';
import { Footer } from './Footer';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Home } from './HomeComponent';
import { About } from './AboutComponent';
import { Contact } from './ContactComponent';
import { Component } from 'react';
import DishDetail from './DishDetail';
import Menu from './MenuComponent';
import { connect } from 'react-redux';

const mapStateToProp = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

class Main extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={() => <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                        leader={this.props.leaders.filter((leader) => leader.featured)[0]} />} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} onClick={(dishId) => this.onDishSelect(dishId)} dish={this.props.dishes.filter((dish) => dish.id === this.props.selectedDish)[0]} />} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/about" component={() => <About leaders={this.props.leaders} />} />
                    <Route exact path="/contact" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProp)(Main));