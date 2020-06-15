import React, { useState, useContext } from "react";
import {
  IonLabel,
  IonRow,
  IonGrid,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonFooter,
  IonButton,
  IonIcon,
} from "@ionic/react";
import axios from "axios";
import { Meal } from "../models/meals";
import { RouteComponentProps, useHistory } from "react-router";
import { thumbsUp, bookmark, newspaper } from "ionicons/icons";
import { StorageAPIWrapper } from "../data/localStroage";
import { toast } from "../toast";
import { AppContext } from "../data/AppContextProvider";
import { shoppingItem } from "../models/shoppingItem";

interface MealPlanItemProps {
  meal: Meal;
}

// <{ onCalc: () => void; onReset: () => void }>
const MealRecomItem: React.FC<MealPlanItemProps> = ({ meal }) => {


  const storage = new StorageAPIWrapper();
  const [userToken, setUserToken] = useState<string>("");

  // const [meal, setMeal] = useState<Meal>();
  const Querystring = require('querystring');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const data = useContext(AppContext);
  const [shopList, setShopList] = useState<shoppingItem>();

  const addToList = async () => {
    const urlString = "http://192.168.0.244:8000/mealplans/".concat(meal.id.toString()) + "/subscribe/";
    await axios.get(urlString, { headers: { 'Authorization': data.state.token,
    'Content-Type': 'application/x-www-form-urlencoded' } }).then((res) => {
      if (res) {
        toast("Meal was added.");
        history.replace("/meals");
      } else {
        toast("Error while trying to add meal.");
      }
    });

    const resp = await axios.get("http://192.168.0.244:8000/shoppings/", {
      headers: {
        'Authorization': data.state.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((response) => {
      if (response) {
        alert("Shopping List exists.");
        // setShopList();
        return response.data[0]

      } else {
        alert("No shopping List exists.");
        console.log(response);
      }
    });
    //console.log(shop_id);
    // const shop_id = resp.data.shoppinglist_id

    //Querystring.stringify(meal.ingredients)
    alert(Querystring.stringify(meal.ingredients))
    //console.log(meal.ingredients);
    // for each ingrdien in this meal, send it to the shoppings
    const urlString2 = "http://192.168.0.244:8000/shoppings/".concat(resp) + "/";
    var item = {
      // "name" : "New Shopping List",
      // "img": "http://192.168.0.244:8000/media/images/shrimp.jpg",
      // "price" : 0,
      // "state" : true,
      "ingredients" : meal.ingredients,
      // delivery: null
  };

    console.log(item);
    alert(item)
    const res = await axios.put(urlString2,
      Querystring.stringify(item)
    );
  }

  return (
    <IonRow>
      <IonCard>
        <img src={meal.img} />
        <IonCardHeader>
          <IonCardSubtitle>{meal.strMeal}</IonCardSubtitle>
          <IonCardTitle>{meal.strMeal}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent></IonCardContent>
        <IonFooter>
          <IonButton color="secondary" fill="outline">
            <IonIcon icon={thumbsUp} />
            Like
          </IonButton>
          <IonButton color="success" fill="outline" onClick={addToList}>
            <IonIcon icon={bookmark} />
            Add2Plan
          </IonButton>
          <IonButton color="medium" fill="outline" routerLink={`/meals/${meal.id}`}>
            <IonIcon icon={newspaper} /> Details
          </IonButton>
        </IonFooter>
      </IonCard>
    </IonRow>
  );
};

export default MealRecomItem;


