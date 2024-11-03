import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
import Categories from "../Components/Categories";

const Home = () => {
    const categories = useLoaderData();
  return (
    <div>
      {/* Banner */}
      <Banner />

      {/* Heading */}
      <Heading
        title="Browse Coffees by Category"
        subtitle="Choose your desired coffee category to browse through specific coffees that fit in your taste."
      />

      {/* Categories tab Sections */}
      <Categories  categories={categories} />


      {/* Dynamic nested Components */}
      <Outlet/>
    </div>
  );
};

export default Home;
