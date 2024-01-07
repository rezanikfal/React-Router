import { NavLink, useLoaderData } from "react-router-dom";
// import { careerApi } from "../services/careerService";
// import { useState } from "react";

function Careers() {
  // const [data, setData] = useState(null);
  // const handleClick = async () => {
  //   await careerApi().then((x) => setData(x));
  // };

  const data = useLoaderData();

  const renderedData =
    data &&
    data.map((el) => {
      return (
        <div key={el.id}>
          <NavLink to="/">{el.title}</NavLink>
        </div>
      );
    });

  return (
    <div>
      <main>
        <div>Hello</div>
        {/* <button onClick={handleClick}>Call API</button> */}
        <br />
        {renderedData}
      </main>
    </div>
  );
}

export default Careers;
