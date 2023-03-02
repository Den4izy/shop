import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [],
      showFullItems: false,
      fullItem: {},
      q: 1,
      totalPrice: []


    }

    this.state.currentItems = this.state.items;
    this.adToOrder = this.adToOrder.bind(this); // для того щоб ф-я addToOrder працювала з состояніями
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItems = this.onShowItems.bind(this);
    this.sumPrice = this.sumPrice.bind(this)
  }

  componentDidMount() {
    // Виконуємо запит до серверу на отримання даних
    fetch("http://212.32.248.102/shopAdmin/arr.php")
      .then((response) => response.json())
      .then((data) => {
        // Оновлюємо стан компонента з отриманими даними з серверу
        this.setState({ items: data });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="wrapper" >
        <Header orders={this.state.orders} onDelete={this.deleteOrder} q={this.state.q} tatalPrice={this.state.totalPrice}
        />
        <div className="categ-Item">
          <Categories chooseCategory={this.chooseCategory} />
          <Items onShowItems={this.onShowItems} items={this.state.currentItems} onAdd={this.adToOrder} />
        </div>
        {this.state.showFullItems && <ShowFullItem onShowItems={this.onShowItems} onAdd={this.adToOrder} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItems(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItems: !this.state.showFullItems })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    console.log("delete " + id);
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  // ф-я добавлення товарів в корзину
  adToOrder(item, q) {
    let hasOrder = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        hasOrder = true;
      }
    })
    if (!hasOrder) {
      this.setState({ orders: [...this.state.orders, item] })  // добавлення до масиву заказів поточний товар який приймає ф-я
      this.setState({ q: q })
    }
  }
  sumPrice(arr) {
    let sum = 0;
    for (let i; i < arr.length; i++) {
      sum = sum + i;
    }
    return sum;
  }

}

export default App;
