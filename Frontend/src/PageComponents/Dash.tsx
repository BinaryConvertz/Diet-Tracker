import { useEffect } from "react";
import InputContainer from "../Components/InputContainer";

type UserRoute = string;

const DashboardPage = () => {
  const PageTitle: UserRoute = "Dashboard";

  useEffect(() => {}, []);

  return (
    <>
      <div>
        <h2>Welcome to {PageTitle}</h2>
        <InputContainer />
      </div>
    </>
  );
};

export default DashboardPage;
