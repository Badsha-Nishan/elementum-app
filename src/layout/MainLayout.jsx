import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import FooterSection from '../components/Footer/FooterSection';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <FooterSection />
        </div>
    );
};

export default MainLayout;