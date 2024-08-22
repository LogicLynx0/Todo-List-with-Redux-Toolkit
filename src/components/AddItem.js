import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addNewItem } from '../store/slices/ItemSlice';

const AddItem = () => {
    
    const [inputValue, setInputValue] = useState('')


    const dispatch = useDispatch();

    const handleBtnClick = () => {
        console.log('$$$$');
        dispatch(addNewItem(inputValue))
        setInputValue('')
    }
    const textChange = (e) => {
        const value = e.target.value
        setInputValue(value)
        console.log(inputValue);
    }
    const handleInputItemDelete =() =>{
    
        setInputValue('')
    }
   
    return (
        <>
            <table border='2px'>
                <tr>
                    <th>Add Task</th>
                    <th>Remove Task</th>
                </tr>
                <tr>
                    <td>
                        <input 
                            type="text" 
                            size='30' 
                            value={inputValue || ''}
                            onChange={(e) => textChange(e)}  
                            style={{height:'40px'}}/>
                    </td>
                    <td width='10px'><center><DeleteIcon onClick={handleInputItemDelete}/></center></td>
                </tr>
                <tr>
                    <td colSpan={2}><Button  variant="contained" onClick = {handleBtnClick} sx={{width: '100%', maxWidth: '500px'}}>Add Item</Button></td>
                </tr>
            </table>
        </>
    )
}
export default AddItem;