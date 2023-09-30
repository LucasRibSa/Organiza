import { Outlet } from "react-router-dom";
import * as S from './styles'
import Footer from "../../Components/footer";

export default function Root() {
    return (
        <>
            <div id="sidebar">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <S.NavLink className="nav-link" to={`/sign-in`}>Sign In</S.NavLink>
                            </li>
                            <li class="nav-item">
                                <S.NavLink className="nav-link" to={`/sign-up`}>Sign Up</S.NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}
