import { useNavigate, useParams } from "react-router-dom"
import { Form } from '../hooks/form.js';
import { addFormDate, getDateId, updateForm } from '../services/localStorage.js';
import { useEffect, useState } from "react";

export const CreateRegister = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    const [showAlert, setShowAlert] = useState(false);

    const { inputValues, handleInputChange, resetForm, setForm } = Form({
        nombre: '',
        email: '',
        direccion: '',
        telefono: ''
    })
    
    useEffect(() => {
        if (id) {
            const register = getDateId(id);
            setForm(register);
        }
    }, [id]);

    const Sutmin = (e)=>{
        e.preventDefault();
        id ? updateForm(id, inputValues) : addFormDate(inputValues);
        setShowAlert(true);
        resetForm();
        setTimeout(() => {
            setShowAlert(false)
        }, 2000)
    }
    return(
        <div>
            {
                showAlert && (
                    <div className="px-5">
                        <div className="alert alert-success" role="alert">
                            Usuario registrado exitosamente!
                        </div>
                    </div>
                )
            }
            <div className="d-flex my-5 justify-content-center">
                <button 
                    className="btn btn-outline-info"
                    onClick={() => navigate('/')}
                >
                    <i class="fa-solid fa-circle-chevron-left"></i>
                </button>
                <h1 className="">
                    {id ? "Editar" : "Registrar"} Usuario
                </h1>
            </div>

            <div className="card bg-primary p-4 m-s">
                <form onSubmit={Sutmin}>
                    <div className="form-group">
                        <label htmlFor="nombre" className="form-label mt-2 text-light">Nombre</label>
                        <input
                            id="nombre" 
                            name="nombre"
                            value={inputValues.nombre}
                            onChange={handleInputChange}
                            type="text" 
                            className="form-control"
                            placeholder="Ingrese su nombre"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label mt-2 text-light">Email</label>
                        <input
                            id="email" 
                            name="email"
                            value={inputValues.email}
                            onChange={handleInputChange}
                            type="email" 
                            className="form-control"
                            placeholder="Ingrese su email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="direccion" className="form-label mt-2 text-light">Dirección</label>
                        <input 
                            name="direccion"
                            value={inputValues.direccion}
                            onChange={handleInputChange}
                            type="text" 
                            className="form-control" 
                            id="direccion" 
                            placeholder="Ingrese su dirección"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefono" className="form-label mt-2 text-light">Telefono</label>
                        <input
                            id="telefono"
                            name="telefono"
                            value={inputValues.telefono}
                            onChange={handleInputChange}
                            type="text" 
                            className="form-control"
                            placeholder="Ingrese su telefono"/>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-info">
                            Registrar
                        </button>
                    </div>
                </form>
            </div>

            

        </div>
    )
}