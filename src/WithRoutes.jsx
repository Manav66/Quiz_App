import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(App) {
  return function Component(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    const router = { location, navigate, params };

    return <App {...props} router={router} />;
  };
}

export default withRouter;
