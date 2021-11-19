import React from "react";
import useAuth from "../../Hooks/useAuth";

const Dashboardhome = () => {
  const { user } = useAuth();
  return (
    <div className="d-flex justify-content-center">
      <h2 className="text-secondary">
        <span>WELCOME</span> <br />{" "}
        <span className="text-primary">{user?.displayName}</span>
      </h2>
    </div>
  );
};

export default Dashboardhome;
