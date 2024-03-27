import Juan from '../img/juan.jpg';
import Endelkys from '../img/Endelkys.jpg';
import Daniel from '../img/daniel.jpg';
import '../styles/img.css';

export const Footer = () => {
    const integrantes = [
        {
          nombre: 'Juan Simonaro',
          usuarioGithub: 'juansimonaro',
          avatar: Juan
        },
        {
          nombre: 'Daniel Rendon',
          usuarioGithub: 'SrryBro',
          avatar: Daniel
        },
        {
          nombre: 'Endelkys Matos',
          usuarioGithub: 'Endelkys',
          avatar: Endelkys
        },
      ]
    return(
        <div>
                <footer className=" p-2 container-fluid bg-primary text-center text-white">
                        <section className="">
                            <div className="row d-flex justify-content-center">

                                <div className="col-lg-2 rounded-circles">
                                    <div
                                        className="bg-image hover-overlay ripple shadow-1-strong rounded-circle"
                                        data-ripple-color="light"
                                        >
                                        <img
                                            src={Endelkys}
                                            className="img-circle rounded-circle"
                                            />
                                        <p className='text-light'>Endelkys Matos <br /> Endelkys</p>
                                    </div>
                                </div>


                                <div className="col-lg-2 rounded-circles">
                                        <img
                                            src={Juan}
                                            className="img-circle rounded-circle"
                                            />
                                        <p className='text-light'>Juan Simonaro<br />Juansimonaro</p>
                                </div>

                                <div className="col-lg-2 rounded-circles">
                                    <div
                                        className="bg-image hover-overlay ripple shadow-1-strong rounded"

                                        >
                                        <img
                                            src={Daniel}
                                            className="img-circle rounded-circle"
                                            />
                                        <p className='text-light'>Daniel Rendon<br />SrryBro</p>
                                    </div>
                                </div>

                            </div>
                        </section>
                <div className="text-center p-3">
                    © 2024 Actividad 4-2: CRUD
                </div>

                </footer>
        </div>
    )
}