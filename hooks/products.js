import { useEffect, useState } from "react";
import { getListProudcts } from '@/lib/services.js';
import io from 'socket.io-client';

export const useListProducts = (token) => {
   
    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    // const getProducts = async () => {


    //     await getListProudcts(setLoading, token);
    //     socket.on('updateProductList', (updatedProductsList) => {
    //         setListProducts(updatedProductsList || []);
    //     });

    // };

    // useEffect(() => {
    //     const socket = io(process.env.NEXT_PUBLIC_SERVER_HOST);
    //     // if (listProducts.length === 0) {
    //     //     getProducts();
    //     // }

    //     return () => {
    //         socket.off();
    //     };
    // }, []);

    return {
        listProducts, loading
    };
};