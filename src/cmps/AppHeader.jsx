import { NavLink, withRouter } from "react-router-dom";
import contactsIcon from '../assets/icons/contacts.svg'
import statisticsIcon from '../assets/icons/statistics.svg'
import React from 'react'

export const AppHeader = () => {
    return (
        <div className="app-header main-layout">
            <div >
                <NavLink className="logo" exact to="/"><span className="bitcoin-icon">
                    {'\u20BF'}</span>itcoinGO</NavLink>
            </div>
            <ul className="main-nav">
                <li>
                    <NavLink activeClassName="active-nav" exact to="/statistic" >
                        <img src={statisticsIcon} className="icon" />
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active-nav" exact to="/contact" >
                        <img src={contactsIcon} className="icon" />
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
