import logo from './logo.svg';
import './App.css';
import{Route,Routes} from'react-router-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ListUsersComponent from './components/ListUsersComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateUserComponent from './components/CreateUserComponent';
import UpdateUserComponent from './components/UpdateUserComponent';


function App() {
  return (
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path="/" element={<ListUsersComponent />} />
        <Route path="/users" element={<ListUsersComponent />} />
        <Route path="/create-user" element={<CreateUserComponent />} />
        <Route path="/update-user/:id" element={<UpdateUserComponent />} />
      </Routes>
    </BrowserRouter>
    
    
 
    
  );
}

export default App;
