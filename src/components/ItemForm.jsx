
import { useEffect, useReducer } from 'react'; 
import './../assets/styles/item-form.css';

function ItemForm({onAddItem, editingItem}) {

    const initialItem = {
        name: '',
        price: '',
        quantity: ''
    };

    // useReducer to handle state changes for the form
    const [item, dispatch] = useReducer(reducer, initialItem);

    function reducer(item, action) {
        switch (action.type) {
            case 'changed_item': 
                {
                    return { ...item, name : action.nextItem}

                }
            case 'changed_price':
                {
                    return { ...item, price : action.nextPrice}

                }
            case 'changed_quantity':
                {
                    return { ...item, quantity : action.nextQuantity}

                }
            case 'canceled':
                {
                    return initialItem;
                }
            case 'set_edit_item':
                {
                    return action.editItem
                }
            default :
            return item;  // Return the original item if an unknown action is received.
        }
    }

    // log inputs to console
    useEffect(() => {
        console.log('item:', item);
    }, [item]);

    // Populate the form if editing an item
    useEffect(() => {
        if (editingItem) {
            dispatch({ type: 'set_edit_item', editItem: editingItem });
        }
    }, [editingItem]);

    // functions for handling various events
    function handleItemChange(e) {
        dispatch({
            type : 'changed_item',
            nextItem : e.target.value,
        });
    }

    function handlePriceChange(e) {
        dispatch({
            type : 'changed_price',
            nextPrice : Number(e.target.value),
        });
    }

    function handleQuantityChange(e) {
        dispatch({
            type : 'changed_quantity',
            nextQuantity : Number(e.target.value),
        });
    }

    function handleCancel() {
        dispatch({type : 'canceled'});
    }

    function handleAddItem() {
        if (item.name.trim() !== '' && item.price > 0 && item.quantity  > 0) {
            onAddItem({
                id : editingItem ? editingItem.id : Date.now(),
                name : item.name,
                price : Number(item.price),
                quantity : Number(item.quantity)
            });
            dispatch({type : 'canceled'}); // Reset the form
        } else {
            alert('Please fill all the fields');
        }
    }


    return (
        <div className="items-form-container">
            <h3>{editingItem ? 'Edit Item' : 'Add Item'}</h3>
            <p>
                <label htmlFor="input">Item</label>
            <input 
                type="text" 
                placeholder='item e.g Apple'
                value={item.name}
                onChange={handleItemChange}
            />
            </p>
            <p>
                <label htmlFor="input">Price</label>
            <input 
                type='number' 
                placeholder='price e.g 20'
                value={item.price}
                onChange={handlePriceChange}
            />
            </p>
            <p>
                <label htmlFor="input">Quantity</label>
            <input 
                type='number'
                 placeholder='quantity e.g 1'
                value={item.quantity}
                onChange={handleQuantityChange}
            />
            </p>
            <p className='buttons'>
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={handleAddItem}>{editingItem ? 'Update' : 'Add'}</button>
            </p>
            
            
        </div>
    );
}

export default ItemForm;