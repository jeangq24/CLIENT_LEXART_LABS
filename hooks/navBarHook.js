import { useEffect, useState } from "react"

export const useItemsNavbar = () => {
    const itemsListStatic = [
        {value: "Product list", id: '"Productlist"', status: false, href: '/products' },
        {value: "Add product", id: 'Addproduct', status: false, href: '/add-products'},
        {value: "Edit product", id: 'EditProduct', status: false, href: '/edit-products'},
        {value: "Product history", id: 'ProductHistory', status: false, href: '/products-history'}
    ];
    const [itemsListNavBar, setItemsListNavBar] = useState([]);
    
    useEffect(()=>{
        const currentItem = sessionStorage.getItem('itemNavbar');
        if(currentItem) {
            const newListItemsNavBar = itemsListStatic;
            newListItemsNavBar[currentItem]['status']=true;
            setItemsListNavBar(newListItemsNavBar);
        }else {
            const newListItemsNavBar = itemsListStatic
            newListItemsNavBar[0]["status"]=true;
            sessionStorage.setItem('itemNavbar', 0);
            setItemsListNavBar(newListItemsNavBar)
        };

    }, []);

    const handleItemsStatus = (indexItem) => {
        const listItems = itemsListStatic;
        listItems[indexItem]['status'] = true;
        setItemsListNavBar(listItems);
        sessionStorage.setItem('itemNavbar', indexItem);
        return;
    }
    return {itemsListNavBar, handleItemsStatus}
}