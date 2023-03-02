import React, { useState } from 'react'
import { RiShoppingBasket2Line } from 'react-icons/ri';
import Order from './Order';
// ф-я для відображення товарів в корзині

const showOrder = (props) => {
    return (
        <div>
            {props.orders.map(el => (
                <Order key={el.id} item={el} onDelete={props.onDelete} quantity={props.q} totalPrice={props.totalPrice} />
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
    console.log('start');
    const elements = document.getElementsByClassName('forTotal');
    for (let i = 0; i < elements.length; i++) {
        console.log([i]);
        sum += Number(elements[i].innerText);
    }



    let [cartOpen, setCartOpen] = useState(false);
    return (
        <header>
            <div className='logo_nav'>
                <div className='logo'></div>
                <div className="search">
                    <input type="text" placeholder="Пошук товарів" />
                    <button>Пошук</button>
                </div>

                <ul className='nav'>
                    <li className='totalPrice'>{props.orders.length > 0 ? Number(sum.toFixed(2)) + ' грн.' : 'кошик пустий'}</li>
                    <li><RiShoppingBasket2Line onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart ${cartOpen && 'active'}`} /></li>
                    <li>Про нас</li>
                    <li>Контакти</li>
                    <li>Кабінет</li>
                </ul>
            </div>


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
