import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
} from "reactstrap";

function RenderDish({ dish }) {
    if (!dish) return <div></div>;
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
function RenderComments({ comments }) {
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
const DishDetail = (props) => {
    const dish = props.dish;
    console.log(dish);
    if (!dish) return <div></div>;
    return (
        <div className='container'>
            <div className='row'>
                <RenderDish dish={dish} />
                <RenderComments comments={dish.comments} />
            </div>
        </div>
    );
};
export default DishDetail;
