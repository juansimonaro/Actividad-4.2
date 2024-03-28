import { Route, Routes } from 'react-router-dom'
import { NavBar, ShowRegister, CreateRegister, Footer } from './components';

export const App = () => {
  return (
    <div>
      <NavBar />

      <div className='container'> 
        <Routes>
          <Route path='/' element={<ShowRegister />}/>
          <Route path='/createRegister' element={<CreateRegister />}/>
          <Route path='/updateRegister/:id' element={<CreateRegister />}/>
        </Routes>
      </div>

      <div className='p-3'> </div>

      <Footer />
    </div>
  );
}
