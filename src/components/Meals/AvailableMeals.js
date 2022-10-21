import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Shivani',
    description: 'Fish curry',
    price: 60
  },
  {
    id: 'm2',
    name: 'Arjun',
    description: 'Egg Roll',
    price: 40
  },
  {
    id: 'm3',
    name: 'sanjay',
    description: 'Veg Thali',
    price: 50
  },
  {
    id: 'm4',
    name: 'Pooja',
    description: 'Curry Chawal',
    price: 80
  }
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
  <MealItem
  key={meal.id}
  id={meal.id}
  name={meal.name}
  description={meal.description}
  price={meal.price} />));
  return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>

            </Card>
        </section>
  );
};
export default AvailableMeals;
