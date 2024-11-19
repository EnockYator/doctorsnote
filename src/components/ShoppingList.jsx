import React, { useMemo, useState } from 'react';
import ItemForm from './ItemForm';
import ItemTable from './ItemTable';
import './../assets/styles/shopping-list.css';

function ShoppingList() {
    const [items, setItems] = useState([]);
    const [editingItem, setEditingItem] = useState(null);

    // Function to add a new item or update an existing one
    function AddItem(newItem){
        if (editingItem) {
            // Update existing item
            setItems((prevItems) => 
                prevItems.map((item) => (item.id === editingItem.id ? newItem : item))
            );
            setEditingItem(null); // Reset editing state
        } else {
            // Add new item
            setItems((prevItems) => [...prevItems, newItem]);
        }
    }

    // Function to delete an item
    function deleteItem(itemId) {
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    }

    // Function to edit an item
    function editItem(item) {
        setEditingItem(item);
    }

    // usememo to memoize the total number of items
    const totalItems = useMemo(() => {
        return items.reduce((total, items) => total + items.quantity, 0);
    }, [items]);

    // usememo to memoize the total price
    const totalPrice = useMemo(() => {
        return items.reduce((total, item) => total + (item.quantity * item.price), 0);
    }, [items]);

    return (
        <div className="shopping-list-container">
            <h1>Shopping List</h1>
            <h3 className='heading-quantity'>Total Number of Items: <b>{totalItems}</b></h3>
            <h3 className='heading-total-price'>Total Price: <b>{totalPrice}</b></h3>
            <div className="items-content-container">
                <ItemForm onAddItem={AddItem} editingItem={editingItem}/>
                <ItemTable items={items} onDeleteItem={deleteItem} onEditItem={editItem}/>
            </div>
        </div> 
    );
}

export default ShoppingList;