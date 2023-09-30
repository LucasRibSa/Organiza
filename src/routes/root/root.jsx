import { Outlet } from "react-router-dom";
import * as S from './styles'

export default function Root() {
    return (
        <>
            <div id="sidebar">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <S.Ul className="navbar-nav ml-auto">
                            <li class="nav-item active ">
                                <S.NavLink className="nav-link" to={`/sign-in`}>Sign In</S.NavLink>
                            </li>
                            <li class="nav-item">
                                <S.NavLink className="nav-link" to={`/sign-up`}>Sign Up</S.NavLink>
                            </li>
                        </S.Ul>
                    </div>
                </nav>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
}
