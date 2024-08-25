import { useEffect, useState } from "react";
import { getListProudcts } from '@/lib/services.js';
import CURRENT_HOST from "@/lib/getHost.js";
import io from 'socket.io-client';

export const useListProducts = (token) => {
    const socket = io(CURRENT_HOST);
    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProducts = async () => {


        await getListProudcts(setLoading, token);
        socket.on('updateProductList', (updatedProductsList) => {
            setListProducts(updatedProductsList || []);
        });

    };

    useEffect(() => {
        if (listProducts.length === 0) {
            getProducts();
        }

        return () => {
            socket.off('updateProductList');
        };
    }, []);

    return {
        listProducts, loading
    };
};