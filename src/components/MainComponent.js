import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponents";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";
import Home from "./HomeComponent";
import { Switch, Redirect, Route } from "react-router-dom";
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null,
        };
    }
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        const HomePage = () => {
            return <Home />;
        };
        return (
            <div>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route
                        exact
                        path='/menu'
                        component={() => <Menu dishes={this.state.dishes} />}
                    />
                    <Redirect to='/home' />
                </Switch>

                <Header />
                <Menu
                    dishes={this.state.dishes}
                    onClick={(dishId) => this.onDishSelect(dishId)}
                />
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
