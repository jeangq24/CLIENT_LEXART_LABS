import { useEffect, useState } from "react";
import { getListProudcts } from '@/lib/services.js';

export const useListProducts = (token) => {
    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProducts = async () => {
        const result = await getListProudcts(setLoading, token);
        setListProducts(result.productsList || []);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return {
        listProducts, loading
    };
};