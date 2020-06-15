import React, { useContext, useState } from "react";
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
  IonItemOptions,
  IonItemSliding,
  IonItemOption,
  IonSlides,
  IonSlide,
  IonContent,
  IonButton,
  IonIcon,
} from "@ionic/react";
import axios from 'axios';
import { Meal } from "../models/meals";
import { RouteComponentProps, useHistory } from "react-router";
import "./MealPlanItem.css";
import { AppContext } from "../data/AppContextProvider";
import { toast } from "../toast";
import { trash } from "ionicons/icons";

interface MealPlanItemProps {
  meal: Meal;
}
const MealPlanItem: React.FC<MealPlanItemProps> = ({ meal }) => {

  const history = useHistory();
  const data = useContext(AppContext);
  const [showLoading, setShowLoading] = useState(true);

  const deleteFromList = async () => {
    setShowLoading(false);
    const urlString = "http://192.168.0.244:8000/mealplans/".concat(meal.id.toString()) + "/unsubscribe/";
    await axios.get(urlString, {
      headers: {
        'Authorization': data.state.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res) => {
      if (res) {
        toast("Meal deleted.");
        history.goBack();
      } else {
        data.state.token = data.state.token;
        toast("Error while trying to add meal.");
      }
    });
  }
  return (
    // <IonSlide
    <IonItemSliding >
      <IonItemOptions side="end">
        <IonItemOption color="danger" onClick={deleteFromList}>
          <IonIcon icon={trash} />
        </IonItemOption>
      </IonItemOptions>
    <IonItem>
        <IonCard
          className="meal-card"
          button
          routerLink={`/meals/${meal.id}`}
          routerDirection="forward"
        >
          <img src={meal.img} />
          <IonCardHeader>
            <IonCardSubtitle></IonCardSubtitle>
            <IonCardTitle>{meal.strMeal}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent></IonCardContent>
        </IonCard>
    </IonItem>
    </IonItemSliding>
  );
};

export default MealPlanItem;
