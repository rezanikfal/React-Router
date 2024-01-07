import { useParams } from "react-router-dom";

function CareersDetail() {
  const { id } = useParams();

  return <div>{id}</div>;
}

export default CareersDetail;
