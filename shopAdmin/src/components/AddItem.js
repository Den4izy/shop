import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [count, setCount] = useState('');
    const [category, setCategory] = useState('');
    const [parameters, setParameters] = useState('');
    const [images, setImages] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://212.32.248.102/shopAdmin/add.php', {
                name,
                price,
                count,
                category,
                parameters,
                images,
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
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
            <br />
            <label>
                Count:
                <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
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
            <label>
                Images:
                <input type="text" value={images} onChange={(e) => setImages(e.target.value)} />
            </label>
            <br />
            <button type="submit">Add Product</button>
        </form>
    );
};



export default AddProductForm;