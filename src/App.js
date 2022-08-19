
import { Route, Routes } from 'react-router-dom';
import { Headers } from './components/Headers/Headers';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Catalog } from './components/Catalog/Catalog';

function App() {
    return (
        <div className='App'>
            <Headers />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/catalog' element={<Catalog/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
