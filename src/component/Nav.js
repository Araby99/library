import './nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src='./assets/ravenclaw.png' alt="شعار ريفنكلاو" />
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to="/about">عنا</Link>
                    </li>
                    <li>
                        <Link to="/library">المكتبة</Link>
                    </li>
                    <li>
                        <Link to="/lessons">الدروس</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;