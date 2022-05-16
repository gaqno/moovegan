import React from 'react';
import Header from '../UI/Header';
import Dashboard from '../UI/Dashboard';

const Home = ({ navigation }: any) => {

  return (
    <>
        <Header title='Olá, Usuário'/>
        <Dashboard />
    </>
  );
};
export default Home;    