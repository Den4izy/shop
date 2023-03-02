import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';

class Order extends Component {
    constructor(props) {
        super(props);
        this.p = this.commaSeparatedStringToArray(props.item.parametres);
        this.state = {
            quantity: props.quantity
        };
    }


    commaSeparatedStringToArray(str) {
        return str.split(',');
    }

    handleQuantityChange(event) {

        this.setState({
            quantity: parseInt(event.target.value),

        });
    }

    render() {
        const totalPrice = this.props.item.price * this.state.quantity;

        return (
            <div className="item">
                <img src={`./img/${this.props.item.img}`} alt="" />
                <h1>{this.props.item.title}</h1>
                {this.p.map((param, index) => (
                    <p key={index}>{param}</p>
                ))}
                <b>{this.props.item.price} грн.</b>
                <div className='quantity-field-order'>
                    <label htmlFor='quantity'>Кількість:</label>
                    <input type='number' id='quantity' value={this.state.quantity} onChange={(event) => this.handleQuantityChange(event)} />
                    <label> всього: <span className='forTotal'>{totalPrice}</span> грн.</label>
                    <h2><FaTrash onClick={() => this.props.onDelete(this.props.item.id)} /></h2>
                </div>

            </div>
        );
    }
}

export default Order;
