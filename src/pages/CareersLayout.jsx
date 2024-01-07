import { Outlet } from "react-router-dom";

function CareersLayout() {
  return (
    <div>
      <header>
        <h2>Creear Layout</h2>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default CareersLayout;
