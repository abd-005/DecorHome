import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(()=>{
        setLoading(true)
        axios('../productData.json')
        .then((data) => {
            console.log(data.data);
            setProducts(data.data)})
        .catch((err) =>setError(err))
        .finally(()=> setLoading(false))
    }, [])
    return {products, loading, error}
}

export default useProducts;