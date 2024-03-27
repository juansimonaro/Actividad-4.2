import { useEffect, useState } from 'react';
import { DateRegistrer } from './DateRegistrer.jsx';
import { getFormDate } from '../services/localStorage.js';

export const ShowRegister = () => {
    const [register, setRegister] = useState([]);

    useEffect(() => {
        setRegister(getFormDate());
    }, []);

    return(
        <div>   
            <h1 className="my-5 text-center">Usuarios registrados</h1>

            {
                register.length > 0 ? (
                    <div className="card bg-primary p-3">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Dirección</th>
                                    <th>Telefono</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {register.map(regis => 
                                    <DateRegistrer 
                                        regis={regis} 
                                        key={regis.id}
                                        setRegister={setRegister}
                                    />
                                )}
                            </tbody>
                        </table>
                    </div>
                ): (
                    <h3 className="text-center">No hay usuarios registrados</h3>
                )
            }
        </div>
    )
}
