import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
} from "reactstrap";
class DishDetail extends Component {
    constructor(props) {
        super(props);
    }
    renderDish(dish) {
        return (
            <div className='col-xs-12 col-sm-12 col-md-5 m-1'>
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    renderComments(comments) {
        if (!comments) return <div></div>;
        const c = comments.map((comment) => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>
                        --{comment.author}, &nbsp;
                        {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                        }).format(new Date(comment.date))}
                    </p>
                </li>
            );
        });
        return (
            <div className='col-xs-12 col-sm-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>{c}</ul>
            </div>
        );
    }
    render() {
        const dish = this.props.dish;
        if (!dish) return <div></div>;
        return (
            <div className='container'>
                <div className='row'>
                    {this.renderDish(dish)}
                    {this.renderComments(dish.comments)}
                </div>
            </div>
        );
    }
}
export default DishDetail;
