import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        };
        this.p = this.commaSeparatedStringToArray(this.props.item.parametres);
    }

    commaSeparatedStringToArray(str) {
        return str.split(",");
    }

    handleQuantityChange(event) {
        this.setState({
            quantity: parseInt(event.target.value)
        });
    }

    render() {
        const totalPrice = this.props.item.price * this.state.quantity;
        return (
            <div className='item'>
                <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItems(this.props.item)} alt="" />
                <div className='parametrsItem'>
                    <h1>{this.props.item.title}</h1>
                    {this.p.map((value, index) => (
                        <p key={index}>{value}</p>
                    ))}
                    <div className='quantity-field-item'>
                        <label htmlFor='quantity'>Кількість:</label>
                        <input type='number' id='quantity' value={this.state.quantity} onChange={(event) => { this.handleQuantityChange(event); }} />
                    </div>
                    <div className='total-price'>
                        Загальна вартість: <span>{totalPrice} грн.</span>
                    </div>
                    <b>{this.props.item.price} грн.</b>
                </div>
                <div className='but_add_cart' onClick={() => this.props.onAdd(this.props.item, this.state.quantity)}>Купити</div>
            </div>
        );
    }
}

export default Item;
