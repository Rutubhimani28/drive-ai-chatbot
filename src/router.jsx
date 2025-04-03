import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashbord from './page/Dashboad/Dashbord';
import Conversation from './page/Conversation';


const SideBarRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashbord />} />
            <Route path="/conversation" element={<Conversation />} />
            {/* <Route path="/company" element={<Company />} />
            <Route path="/manualy-apply" element={<ManualyApply />} />
            <Route path="/excel" element={<Excel />} /> */}
        </Routes>
    )
}

export default SideBarRoute

