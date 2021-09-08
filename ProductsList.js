import React, { Component } from 'react';
import "./css/productlist.css";

class ProductList extends Component {

    constructor() {
        super()
        this.state = {
            product: []
        }
    }

    componentDidMount() {

        fetch("https://sanaanjum-bae0a.web.app/products.json")
            .then((response) =>
                response.json())
            .then((finaldata) =>

                this.setState({
                    product: finaldata.Products
                })
            )
    }

    render() {

        const result =
            this.state.product.map(
                (ele) => {
                    console.log(ele);
                    return (<div className="container">
                    <div className="phone">
                    <h2>Name : {ele.name}</h2>
                    <img src ={ele.img} width="200px" height="100px"></img>
                    <h2 id ="h2tag">Price :{ele.price}</h2>
                    </div>
                    </div>
                    )
                }
            )
        return (
            <div className ="mobile">
                <h1>My Phones</h1>
                { result}
            </div>

        )
    }
}



export default  ProductList;