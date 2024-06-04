import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Home = () => {
  const { user, isAuthenticated } = useAuth0();

  const callApi = async () => {
    try {
        
      const response = await axios.get(
        `${import.meta.env.VITE_API_SERVER_URL}/api/public`
      );

      console.log(response);

      const responseData = response.data;

      alert(responseData.message);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mx-3 w-100">
      <h1 className="mb-4  font-bold">Esta es la pagina de inicio.</h1>
      <div className="px-6 mb-4 text-justify">
        Este proyecto utiliza el sdk de Auth0 para administrar login, logout y
        registro de usuario, ademas de aplicar validaciones de permisos tanto
        para las rutas establecidad en con react-router-dom como en las
        peticiones que se realizaran a una API Rest hecha con Spring Boot.
      </div>
      {isAuthenticated ? (
        <div className="font-semibold text-green-500">
          Has iniciado sesion como {user?.name}{" "}
        </div>
      ) : (
        <div className="font-semibold text-red-500">
          Actualmente no has iniciado sesion
        </div>
      )}
      <div className="mt-4">
        <button
          onClick={callApi}
          className="btn btn-primary "
        >
          Call Public API
        </button>
      </div>
    </div>
  );
};

export default Home;
                                                                                                               