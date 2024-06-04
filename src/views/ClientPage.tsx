import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const ClientPage = () => {
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
        `${import.meta.env.VITE_API_SERVER_URL}/api/client`,
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
      <h1 className="mb-4 font-bold">Vista Cliente.</h1>
      <div className="px-6 mb-4 text-justify">
        Esta es la vista del cliente, podes probar llamando a una api protegida.
      </div>
      <button
        onClick={callApi}
        className="btn btn-secondary"
      >
        Call Client API
      </button>
    </div>
  );
};

export default ClientPage;
