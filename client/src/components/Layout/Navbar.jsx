import { CLIENT_URL } from "../../Redux/constants/BASE_URL";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutAction } from "../../Redux/actions/userAction.js";

export default function Navbar() {

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const dispatch = useDispatch();

  const toggleNavbar = () => {
    setIsNavExpanded((prev) => !prev);
  };

  const handleLogout = (e) => {
    e.preventDefault;
    console.log('logout was called');
    dispatch(userLogoutAction())
  }



  const { userData, loadingUser, userIsLogged, messageUser } = useSelector((state) => state.userData);

  const itemNavbarClass = "block py-2 px-3 text-slate-50 rounded hover:text-slate-50 md:hover:bg-transparent md:border-0 md:hover:text-slate-200 md:p-0 dark:text-slate-50 md:dark:hover:text-blue-300 dark:hover:bg-gray-300 dark:hover:text-slate-50 md:dark:hover:bg-transparent";

  return (
    <>


      <nav className="bg-gradient-to-b from-orange-400 to-orange-500 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href={CLIENT_URL} className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="/shop-cart2.svg"
              className="h-8"
              alt="Lojinha Livre Logo"
            />
            <span
              className="self-center text-2xl font-semibold whitespace-nowrap text-slate-50 dark:text-slate-50">
              Lojinha Livre
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button" onClick={toggleNavbar} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isNavExpanded}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto ${isNavExpanded ? "relative" : "hidden"}`} id="navbar-default">
            <ul className="font-medium min-w-screen-sm flex content-stretch flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:bg-transparent">
              <li>
                <a
                  href={CLIENT_URL}
                  className={itemNavbarClass} aria-current="page">
                  Início
                </a>
              </li>
              <li>
                <a
                  href={CLIENT_URL}
                  className={itemNavbarClass}>
                  Sobre
                </a>
              </li>
              {userIsLogged === 'true' ?
                <>
                  <li>
                    <a
                      href={CLIENT_URL}
                      className={itemNavbarClass}>
                      Perfil
                    </a>
                  </li>
                  <li>
                    <a
                      href={CLIENT_URL}
                      className={itemNavbarClass}>
                      Carrinho
                    </a>
                  </li>
                  <li>
                    <a
                      href={CLIENT_URL}
                      className={itemNavbarClass}>
                      Wishlist
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={handleLogout}
                      href='#'
                      className={itemNavbarClass}
                      >
                      Logout
                    </a>
                  </li>
        </>
        :
        <>
          <li>
            <a
              href={`${CLIENT_URL}/login`}
              className={itemNavbarClass}>
              Entre
            </a>
          </li>
          <li>
            <a
              href={`${CLIENT_URL}/register`}
              className={itemNavbarClass}>
              Registre-se
            </a>
          </li>
        </>
              }
      </ul>
    </div >
        </div >
      </nav >
    </>
  )
}