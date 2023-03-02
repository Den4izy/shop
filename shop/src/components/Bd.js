import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [count, setCount] = useState(0);
    const [category, setCategory] = useState('');
    const [parameters, setParameters] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://212.32.248.102/index.php', {
                name,
                price,
                count,
                category,
                parameters,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Price:
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
            <br />
            <label>
                Count:
                <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
            </label>
            <br />
            <label>
                Category:
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
            </label>
            <br />
            <label>
                Parameters:
                <input type="text" value={parameters} onChange={(e) => setParameters(e.target.value)} />
            </label>
            <br />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProductForm;