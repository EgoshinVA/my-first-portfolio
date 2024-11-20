import {NavLink} from "react-router-dom";
import github from '../../assets/github.svg'
import c from './Nav.module.css'
import {loginAPI} from "../../store/reducers/Login.api";

function Nav() {
    const {data} = loginAPI.useAuthMeQuery('')
    const [logout] = loginAPI.useLogoutMutation()

    return (
        <nav className={c.nav}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to='/' className="flex items-center">
                    <img src={github} className="h-8 mr-3" alt="github Logo"/>
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GitHub</span>
                </NavLink>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to='/users'
                                     className={({isActive}) => (isActive ? c.link_active : c.link)}>Users</NavLink>
                        </li>
                        <li>
                            <NavLink to='/posts'
                                     className={({isActive}) => (isActive ? c.link_active : c.link)}>Posts</NavLink>
                        </li>
                        <li>
                            <NavLink to='/friends'
                                     className={({isActive}) => (isActive ? c.link_active : c.link)}>Friends</NavLink>
                        </li>
                        <li>
                            <NavLink to='/todolist'
                                     className={({isActive}) => (isActive ? c.link_active : c.link)}>TodoList</NavLink>
                        </li>
                        {data && data.data.login ? <li>
                                <a className={c.logout} onClick={logout}>Logout</a>
                            </li> :
                            <li>
                                <NavLink to='/login'
                                         className={({isActive}) => (isActive ? c.link_active : c.link)}>Login</NavLink>
                            </li>}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav