import React, { useState } from 'react'
import { RiShoppingBasket2Line } from 'react-icons/ri';
import Order from './Order';
// ф-я для відображення товарів в корзині

const showOrder = (props) => {
    return (
        <div>
            {props.orders.map(el => (
                <Order key={el.id} item={el} onDelete={props.onDelete} />
            ))}
        </div>
    )
}

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Товари відсутні</h2>
        </div>
    )
}

export default function Header(props) {
    let sum = 0;
    props.orders.forEach(el => sum += Number.parseFloat(el.prise));
    let [cartOpen, setCartOpen] = useState(false);
    return (
        <header>
            <div>
                <span className='logo'>Electronics</span>
            </div>
            <ul className='nav'>
                <li className='totalPrice'>{props.orders.length > 0 ? Number(sum.toFixed(2)) + ' грн.' : 'кошик пустий'}</li>
                <li><RiShoppingBasket2Line onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart ${cartOpen && 'active'}`} /></li>
                <li>Про нас</li>
                <li>Контакти</li>
                <li>Кабінет</li>
            </ul>

            {cartOpen && (
                <div className='shop'>
                    {props.orders.length > 0 ?
                        showOrder(props) : showNothing()}

                </div>
            )}
            <div className='presentation'>
            </div>
        </header>
    )
}
