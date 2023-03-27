import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from '../UI/Card'

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Bhakhri",
    description: "Roti of thick wheat Floor",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Khaman",
    description: "Bhai of Dhokla !",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Dhonsa",
    description: "South Indian special",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Masala Papad",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
