import React from "react";
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
import { Meal } from "../models/meals";
import { RouteComponentProps } from "react-router";
import { thumbsUp, bookmark, newspaper } from "ionicons/icons";

interface MealPlanItemProps {
  meal: Meal;
}

// <{ onCalc: () => void; onReset: () => void }>
const MealRecomItem: React.FC<MealPlanItemProps> = ({ meal }) => {
  return (
    <IonRow>
      <IonCard>
          <img src={meal.img} />
         <IonCardHeader>
          <IonCardSubtitle>{meal.strInstructions}</IonCardSubtitle>
          <IonCardTitle>{meal.strMeal}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
        </IonCardContent>
        <IonFooter>
          <IonButton color="medium" fill="outline">
            <IonIcon icon={thumbsUp} />
            Like
          </IonButton>
          <IonButton color="medium" fill="outline">
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
