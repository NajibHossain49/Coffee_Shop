import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCard = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    if (category) {
      // Filter by category if category is defined
      const filterByCategory = data.filter(
        (coffee) => coffee.category === category
      );
      setCoffees(filterByCategory);
    } else {
      // Show all data if no category is specified
      setCoffees(data.slice(0,6));
    }
  }, [data, category]); // Add data and category as dependencies

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {coffees.map((coffee, index) => (
        <Card key={index} coffee={coffee}></Card>
      ))}

      <button>View All</button>
    </div>
  );
};

export default CoffeeCard;
