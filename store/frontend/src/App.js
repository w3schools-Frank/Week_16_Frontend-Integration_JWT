import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import apiConn from './api/conn';
import Home from './components/Home';

function App() {

  const register = async (accountData) => {
    try {
      const response = await apiConn.post("/accounts", accountData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const login = async (accountData) => {
    try {
      const response = await apiConn.post("/accounts/login", accountData);
      console.log(response);
      const token = response.data;
      await getAllAccounts(JSON.stringify(token));

    } catch (error) {
      console.log(error);
    }
  }

  const getAllAccounts = async (token) => {
    try {
      console.log(token);
      const response = await apiConn.get("/accounts", {headers: {
        Authorization: token
      }});
      console.log(response);
      if (response.status === 200) {
        console.log("We're in!")
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register handleRegister={register} />}/>
          <Route path='/login' element={<Login handleLogin={login} />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
