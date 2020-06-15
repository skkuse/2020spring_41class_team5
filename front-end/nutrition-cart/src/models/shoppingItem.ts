import { Ingredient } from "./Ingredient";

export interface shoppingItem {
  id: number;
  name: string;
  img: string;
  price: number;
  state: boolean;
  ingredients: Ingredient[];
  delivery: null;
  user: number;
}

// {
//   "name": "stuff3",
//     "img": "keins",
//       "price": 99,
//         "state": false,
//           "ingredients": [
//             {
//               "id": 61,
//               "name": "shrimp",
//               "img": "http://127.0.0.1:8000/media/images/shrimp.jpg",
//               "kcal": "319.00000",
//               "protein": "44.00000",
//               "fat": "11.90000",
//               "carbohydrate": "6.10000",
//               "sodium": "0.00000",
//               "vitaminc": "0.00000",
//               "shoppingList": 1,
//               "mealplan": [17]
//             }],
//             "delivery": null
// }
