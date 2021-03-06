import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css'
import Cookies from 'js-cookie';
export default function Sidebar(props) {
    const logout=()=>{

        Cookies.remove("user");
        }
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-container">
                    <div>
                        <ul className="sidebar-items-container">
                        <div className="sidebar-link">zalogowano jako:</div>
                           <div className="sidebar-link" style={{fontSize: 50}}>{props.userName}</div>
                            <li className="sidebar-item">
                                <Link to='/MakeVisit' className="sidebar-link">
                                    <i className="fa fa-plus" aria-hidden="true" /> <p>Umów wizytę</p>
                                 </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to='/ReceiptList' className="sidebar-link">
                                    <i className="fas fa-pills" /> <p>Moje recepty</p>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to='/VisitsList' className="sidebar-link">
                                    <i className="fas fa-clipboard-list" /> <p>Moje wizyty</p>
                                </Link>
                            </li>
                        </ul>
                        <Link to="/"> 
                        <button className="getout" onClick={logout}>Wyloguj sie</button>
                        </Link>
                       
                      
                    </div>
                </div>
            </div>
        </>
    )
}
