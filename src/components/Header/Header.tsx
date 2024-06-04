import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import ProfileButton from './ProfileButton';
import RegistroButton from './RegistroButton';

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <div className="bg-ligth pb-5">
        <div className="px-4  w-100 ">
          <header className="d-flex align-items-center justify-content-center py-4 gap-2">
            {/* logo - start */}
            <Link
              to="/"
              className="btn btn-outline-success  d-flex align-items-center gap-2  fw-bold"
              aria-label="logo"
            >
              Ejemplo Auth0
            </Link>
            {/* logo - end */}
            {/* nav - start */}
            <nav className="d-flex gap-3 ">
              <Link
                to="/"
                className="btn btn-outline-info  fw-semibold text-gray-600 "
              >
                Inicio
              </Link>
              <Link
                to="/cliente"
                className="btn btn-outline-warning"
              >
                Cliente View
              </Link>
              <Link
                to="/admin"
                className="btn btn-outline-secondary"
              >
                Admin View
              </Link>
            </nav>
            {/* nav - end */}
            {/* buttons - start */}
            <div className="-ml-8 d-flex flex-column gap-2  ">
              {isAuthenticated ? (
                <>
                  <LogoutButton />
                  <ProfileButton />
                </>
              ) : (
                <>
                  <LoginButton />
                  <RegistroButton />
                </>
              )}
            </div>
            {/* buttons - end */}
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
