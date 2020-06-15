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

interface MealPlanItemProps {
  meal: Meal;
}

// <{ onCalc: () => void; onReset: () => void }>
const MealRecomItem: React.FC<MealPlanItemProps> = ({ meal }) => {


  const storage = new StorageAPIWrapper();
  const [userToken, setUserToken] = useState<string>("");

  // const [meal, setMeal] = useState<Meal>();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const data = useContext(AppContext);

  const addToList = async () => {
    const urlString = "http://192.168.0.244:8000/mealplans/".concat(meal.id.toString()) + "/subscribe/";
    await axios.get(urlString, { headers: { 'Authorization': data.state.token,
    'Content-Type': 'application/x-www-form-urlencoded' } }).then((res) => {
      if (res) {
        toast("Meal added.");
        history.goBack();
      } else {
        data.state.token = data.state.token;
        toast("Error while trying to add meal.");
      }
    });
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
          <IonButton color="medium" fill="outline">
            <IonIcon icon={newspaper} /> Details
          </IonButton>
        </IonFooter>
      </IonCard>
    </IonRow>
  );
};

export default MealRecomItem;
