import { Outlet, useLocation, useNavigation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation()
  console.log(location)
  return (
    <div>
      <NavBar></NavBar>
      {navigation.state === "loading" ? (
        <p className="text-xl font-bold">Loading Data...</p>
      ) : (
        <Outlet></Outlet>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Home;
