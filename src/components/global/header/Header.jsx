import React, { Component } from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

class Header extends Component {

    componentDidMount = () => {

        window.onscroll = (e) => {
            console.log(window.scrollY);
            
            if (window.scrollY > 20) {
                document.getElementById("header").classList.add("sticky")
            } else {
                document.getElementById("header").classList.remove("sticky")
            }
        }

    }


    find = (e) => {
        e.preventDefault();
        var text = document.getElementById("find").value;
        console.log(text);
    }

    render() {
        return (
            <header id="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <ul>
                    <li><NavLink to="/" exact activeClassName="in">MOVIES</NavLink></li>
                    <li><NavLink exact activeClassName="in" to="/series">SERIES</NavLink></li>
                    <li><NavLink exact activeClassName="in" to="/anime">ANIME</NavLink></li>
                    <li><NavLink exact activeClassName="in" to="/books">BOOKS</NavLink></li>
                    <li><NavLink exact activeClassName="in" to="/manga">MANGA</NavLink></li>
                </ul>

                <form onSubmit={this.find}>
                    <input id="find" autoComplete="off" placeholder="Search movies, series, anime, books, mangas" type="text" />
                    <button type="submit" className="uil uil-search"></button>
                </form>

            </header>
        );
    }
}

export default Header;
