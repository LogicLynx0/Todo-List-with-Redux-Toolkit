import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteSingleItem } from "../store/slices/ItemSlice";

const AllItemShow = () => {
    const data = useSelector((state) => state.user)
    const dispatch = useDispatch()
    console.log(data);

    const handleDeleteItem = (item) => {
        dispatch(deleteSingleItem(item))
    }

    return(
        <>
            <table border='2px'>
                <tr>
                   
                    <th>All Task</th>
                    <th>Delete Task</th>
                    
                </tr>
                {data.map((item) => {
                return(

                <tr>
                    
                    <td>{item}</td>
                    <td><Button onClick={() => handleDeleteItem(item)}>Delete Task</Button></td>
                </tr>
                )
                })}
            </table>
        </>
    )
}
export default AllItemShow;