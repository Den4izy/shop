import React, { Component } from 'react'

export class ShowFullItem extends Component {
    render() {
        return (
            <div className='show-item'>
                <div>
                    {/* <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItems(this.props.item)} alt="" /> */}
                    <img src={"./img/" + this.props.item.img} alt="" />
                    <h1>{this.props.item.title}</h1>
                    <p>{this.props.item.parametrs1}</p>
                    <p>{this.props.item.parametrs2}</p>
                    <p>{this.props.item.parametrs3}</p>
                    <p>{this.props.item.parametrs4}</p>
                    <b>{this.props.item.price} грн.</b>
                    <div className='but_close' onClick={() => this.props.onShowItems(this.props.item)}>X</div>
                    <div className='but_add_cart' onClick={() => this.props.onAdd(this.props.item)}>Купити</div>
                </div>
            </div>
        )
    }
}

export default ShowFullItem