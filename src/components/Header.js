import { useEffect, useState } from 'react';

import useHttp from '../hooks/useHttp';
import './Header.css'

const Header = () => {

    const [categories, setCategories] = useState([]);
    const { isLoading, error, sendRequest: fetchCategories } = useHttp();

    useEffect(() => {
        const getCategories = (categories) => {
            setCategories(categories)
        }

        fetchCategories({ url: 'http://localhost:3200/categories' }, getCategories)
    }, [fetchCategories]);

    let content = <p>Found no data</p>;

    if (categories.length > 0) {
        //TODO number of categories
        let chosenCategories = [
            { id: 1, category: 'sunglasses' },
            { id: 2, category: 'womens-jewellery' },
            { id: 3, category: 'fragrances' },
            { id: 4, category: 'skincare' },
            { id: 5, category: 'mens-watches' },
            { id: 6, category: 'womens-bags' }
        ];
        content = <div>{chosenCategories.map(cat => <li key={cat.id} className='links'><a href='#'>{cat.category}</a></li>)}</div>
    }

    if (error) {
        content = <p>{error}</p>
    }
    if (isLoading) {
        content = <p>Loading...</p>;
    }

    return (<header className="header">
        <div className="header-account ">
            <div className="container ">
                <div className="logo"><a routerLink="/">Timeless<strong>Trends</strong></a></div>
                <ul className="header-login-register-cart-welcome">
                    <li ><i className="fa-solid fa-cart-shopping"></i><span className="cart-products">cartCount</span></li>
                    <li  ><i className="fa-solid fa-user"></i><span className="header-welcome"> Welcomeusername</span></li>
                    <li ><a routerLink="/auth/login">Login</a></li>
                    <li ><a routerLink="/auth/register">Register</a></li>
                    <li className="header-logout-btn"><button className="logout-btn">Logout</button></li>
                </ul>
            </div>
        </div>

        <nav className="header-nav">
            <div className="container">
                <input
                    id="nav-toggle"
                    type="checkbox"
                />
                <ul className="links">

                    {content}

                </ul>
                <label
                    htmlFor="nav-toggle"
                    className="icon-burger"

                >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </label>
            </div>
        </nav>
    </header>)
}

export default Header