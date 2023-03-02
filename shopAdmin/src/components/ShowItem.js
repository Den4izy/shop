import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShopProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const result = await axios.get('http://212.32.248.102/shopAdmin/show.php');
            setProducts(result.data);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Shop Products</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th>Category</th>
                        <th>Parameters</th>
                        <th>Images</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.Name}</td>
                            <td>{product.Price}</td>
                            <td>{product.Count}</td>
                            <td>{product.Category}</td>
                            <td>{product.Parameters}</td>
                            <td>{product.images}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShopProducts;