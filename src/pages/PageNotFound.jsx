import { Link } from "react-router-dom";
import Home from "./Home";

function PageNotFound() {
  return (
    <div>
      <h2>404 Page Not Found</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
        fugiat obcaecati cupiditate accusantium sapiente veniam maxime laborum
        vel, aperiam alias repellat incidunt quas reprehenderit non illum nobis
        corporis sed voluptatibus?
      </p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}

export default PageNotFound;
