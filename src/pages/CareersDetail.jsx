import { useLoaderData, useParams } from "react-router-dom";

function CareersDetail() {
  const detailData = useLoaderData();
  return (
    <div>
      <h3>{detailData.title}</h3>
      <p>user id: {detailData.userId}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime suscipit
        ea ad obcaecati recusandae id libero neque facilis incidunt rerum
        blanditiis corrupti ipsam nulla, quidem illo beatae perferendis
        nesciunt. Nobis.
      </p>
    </div>
  );
}

export default CareersDetail;
