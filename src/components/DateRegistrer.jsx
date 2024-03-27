import { useNavigate } from "react-router-dom";
import { getFormDate, deleteForm } from "../services/localStorage.js";

export const DateRegistrer = ({ regis, setRegister }) => {
    const {id, nombre, email, direccion, telefono} = regis;
    const navigate = useNavigate();

    const removeDate = () => {
        deleteForm(id);
        setRegister(getFormDate());
    }
    return(
        <tr>
            <th>{nombre}</th>
            <th>{email}</th>
            <th>{direccion}</th>
            <th>{telefono}</th>
            <th>
            {
                // boton 
            }
                <span 
                    className="btn btn-outline-warning" 
                    role="button" 
                    onClick={
                        () => navigate(`/updateRegister/${id}`)
                    }
                >
                    <i class="fa-solid fa-file-pen"></i>
                </span>
            </th>
            <th>
                <span 
                    className="btn btn-outline-danger" 
                    role="button"
                    onClick={() => removeDate()}
                >
                    <i class="fa-solid fa-trash-can"></i>
                </span>
            </th>
        </tr>
    )
}