import Button from '@mui/material/Button';
import AddItem from './AddItem';
import { useState } from 'react';
import AllItemShow from './AllItemShow';
import { useDispatch } from 'react-redux';
import { clearAllItem } from '../store/slices/ItemSlice';




const Home = () => {
    const [showComponent, setShowComponent] = useState(false)
    const dispatch = useDispatch()

    const handleClick = () =>{
        console.log('clicked');
        setShowComponent(true)
       

    }
    const clearAllItems = () => {
        dispatch(clearAllItem())
    }
    
    return(
        <>
            <h2>To Do List</h2>
            <Button onClick={handleClick}>Add New Item</Button>
            {showComponent && <AddItem />}
            <Button onClick={clearAllItems}>Clear All Items</Button>
                <br /><br />
            <AllItemShow />
            
        </>
    )
}

export default Home;