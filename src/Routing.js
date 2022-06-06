import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import Chart from './aa';
import ChartError from './ChartError';
import ClientLatency from './ClientLatency';
import HighPerfLatency from './HighPerfLatency';
import ServerLatency from './ServerLatency';

//lazy load

function Routing() {
    

    return (
        <div>
            
            <HashRouter>
                

                <Routes>
                    <Route path='/error' element={<Chart />} />                    
                    <Route path='/errorchart' element={<ChartError />} />   
                    <Route path='/perf' element={<HighPerfLatency />} /> 
                    <Route path='/serv' element={<ServerLatency />} />
                    <Route path='/client' element={<ClientLatency />} />
                    <Route path='/' element={<Chart />} />                   
                    
                   
                </Routes>

                
            </HashRouter>



        </div>

    );
}

export default Routing;