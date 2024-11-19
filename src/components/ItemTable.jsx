import React from 'react';
import './../assets/styles/item-table.css';

function ItemTable({items, onDeleteItem, onEditItem}) {

    return (
        <div className="items-table-container">
            <div className="items-table-container-heading">
                <h3>Purchased Items</h3>
                <h4>
                    <span>Item</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Total</span>
                    <span>Manage</span>
                </h4>
            </div>
            <div className="items-table-container-content">
                {items.map((item) => (
                    <div key={item.id} className="item-table-item">
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                        <span>{item.quantity}</span>
                        <span>{item.price * item.quantity}</span>
                        <span className='manage-buttons'>
                            <button onClick={() => onEditItem(item)}>Edit</button>
                            <button onClick={() => onDeleteItem(item.id)}>Delete</button>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemTable;