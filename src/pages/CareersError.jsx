import { useRouteError } from "react-router-dom";

function CareersError() {
  const error = useRouteError();
  return (
    <div>
      <h3>Error!</h3>
      <p>Error Message: {error.message}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime suscipit
        ea ad obcaecati recusandae id libero neque facilis incidunt rerum
        blanditiis corrupti ipsam nulla, quidem illo beatae perferendis
        nesciunt. Nobis.
      </p>
    </div>
  );
}

export default CareersError;
