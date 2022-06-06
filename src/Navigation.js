import React from "react";
import { Link } from 'react-router-dom';
import './App.css'

function Navi() {
    const menuItems = [ 
        { key: "errorchart", displayName: "MostCommonErrors", isDefaut: true },
        { key: "error", displayName: "CountOfOperationName", isDefaut: false },
        { key: "perf", displayName: "HighPerfLatency", isDefaut: false },
        { key: "serv", displayName: "HighServerLatency", isDefaut: false },
        { key: "client", displayName: "ClientLatency", isDefaut: false }   

    ];

    return (
        <div className="navigation">
            <header style={{ background: '#8c8b87', padding: '20px' }}>
                <ul style={{ display: 'inline' }} >
                    {menuItems.map((menu, i) =>
                        <li key={i} >
                            <Link to={'/' + menu.key} style={{ color: 'white' , textDecoration: 'none'}}>{menu.displayName}</Link>
                        </li>
                    )
                    }
                </ul>
            </header>
        </div>
    )
}
export default Navi