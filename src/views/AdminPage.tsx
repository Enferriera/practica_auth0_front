import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const AdminPage = () => {
  const { getAccessTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        },
      });

      console.log("token: " + token);

      const response = await axios.get(
        `${import.meta.env.VITE_API_SERVER_URL}/api/admin`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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
    <div className="d-flex flex-column align-items-center justify-content-center mx-3">
      <h1 className="mb-4  font-bold">Vista Administrador.</h1>
      <div className="px-6 mb-4 text-justify">
        Esta es la vista del administrador, prueba llamando a una api exclusiva
        para usuarios administradores.
      </div>
      <button
        onClick={callApi}
        className="btn btn-primary "
      >
        Call Admin API
      </button>
    </div>
  );
};

export default AdminPage;
