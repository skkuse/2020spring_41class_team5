import { shoppingItem } from "./shoppingItem";
import Meals from "../pages/Meals";

export interface Ingredient {
  id: number;
  name: string;
  img: string;
  kcal: number;
  protein: number;
  fat:number;
  carbohydrate:number;
  sodium:number;
  vitaminc:number;
  shoppingList: [];
  mealplan: [];
};

// id = models.AutoField(primary_key = True)
// name = models.CharField(default="None", max_length = 100)
// img = models.CharField(default="None", max_length = 100)
// kcal = models.DecimalField(decimal_places = 5, max_digits = 10)
// protein = models.DecimalField(decimal_places = 5, max_digits = 10)
// fat = models.DecimalField(decimal_places = 5, max_digits = 10)
// carbohydrate = models.DecimalField(decimal_places = 5, max_digits = 10)
// sodium = models.DecimalField(decimal_places = 5, max_digits = 10)
// vitaminc = models.DecimalField(decimal_places = 5, max_digits = 10)
// shoppingList = models.ForeignKey(ShoppingList, related_name = 'ingredients', on_delete = models.CASCADE, null = True)
// mealplan = models.ManyToManyField(MealPlan, related_name = 'ingredients', null = True)

// /// "id": 65,
//   "name": "rice",
//     "img": "http://192.168.0.244:8000/media/images/rice.jpg",
//       "kcal": "363.00000",
//         "protein": "6.40000",
//           "fat": "0.40000",
//             "carbohydrate": "79.50000",
//               "sodium": "8.00000",
//                 "vitaminc": "0.00000",
//                   "shoppingList": 1,
//                     "mealplan": [
//                       17
//                     ]
