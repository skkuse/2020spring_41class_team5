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
} from "@ionic/react";
import { Meal } from "../models/meals";
import { RouteComponentProps } from "react-router";

interface MealPlanItemProps {
  meal: Meal;
}

const MealPlanItem: React.FC<MealPlanItemProps> = ({ meal }) => {
  return (
    <IonRow>
      <IonCol>
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
      </IonCol>
    </IonRow>
  );
};

export default MealPlanItem;
