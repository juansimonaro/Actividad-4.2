import { useNavigate } from "react-router-dom";

export const NavBar = ()=> {
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button 
                        className="btn btn-info my-2 my-sm-0" 
                        onClick={() => navigate('/createRegister')}
                    >
                        Registro
                </button>
            </div>
        </nav>
    )
}