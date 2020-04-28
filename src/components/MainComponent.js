import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponents";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import Home from "./HomeComponent";
import { Switch, Redirect, Route } from "react-router-dom";
import Contact from "./ContactComponent";
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS,
            selectedDish: null,
        };
    }
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={
                        this.state.promotions.filter(
                            (promo) => promo.featured
                        )[0]
                    }
                    leader={
                        this.state.leaders.filter(
                            (leader) => leader.featured
                        )[0]
                    }
                />
            );
        };
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route
                        exact
                        path='/menu'
                        component={() => (
                            <Menu
                                dishes={this.state.dishes}
                                onClick={(dishId) => this.onDishSelect(dishId)}
                            />
                        )}
                    />
                    <Route path='/contactus' component={Contact}></Route>
                    <Redirect to='/home' />
                </Switch>

                {/* <Menu
                    dishes={this.state.dishes}
                    onClick={(dishId) => this.onDishSelect(dishId)}
                /> */}
                <DishDetail
                    dish={
                        this.state.dishes.filter(
                            (dish) => dish.id === this.state.selectedDish
                        )[0]
                    }
                />
                <Footer />
            </div>
        );
    }
}
export default Main;
