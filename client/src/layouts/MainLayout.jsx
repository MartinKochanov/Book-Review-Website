import Navigation from "../components/navigation/Navigation";

const MainLayout = ({ children }) => {
  return (
    <div className=" text-white flex flex-col justify-center">
      <Navigation />
      {children}
    </div>
  );
};

export default MainLayout;
