import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ErrorPage = () => {
    const error = useRouteError();
    return(

        <div className='flex flex-col min-h-screen'>
        <Navbar/>
        <div className='flex-1'>{error.message}</div>;
        {/* <div className='flex-1'>404</div> */}
        <Footer/>
        </div>
    )
};

export default ErrorPage;