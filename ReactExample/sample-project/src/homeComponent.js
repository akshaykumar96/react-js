import React,{Component} from "react";

export class HomeComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            products:[
                {productId:1,productName:"laptop",unitPrice:234,unitsInStock:20},
                {productId:2,productName:"radio",unitPrice:454,unitsInStock:50}
            ]
        };
    }
    render()
    {
        var myStyle={
             backgroundColor:"deepskyblue",
             margin:5,padding:5,color:"white"
        };
        return (
<div className="container">
        <h1>MY REACT JS HURRRRRR</h1>
        <button style={myStyle}>Save</button>
        <span>{this.state.products[0].productName}</span>
        <span>{this.state.products[1].productName}</span>
      </div>
        );

    }
}