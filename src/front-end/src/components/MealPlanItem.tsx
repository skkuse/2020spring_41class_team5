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

// <{ onCalc: () => void; onReset: () => void }>
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
            <IonCardSubtitle>{meal.mealType}</IonCardSubtitle>
            <IonCardTitle>{meal.name}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>

    // <IonRow>
    //   <IonCol>
    //     <IonCard>
    //       <IonCardContent>
    //         <IonButton onClick={props.onCalc}>Calc BMI</IonButton>
    //         <IonButton onClick={props.onReset}>Reset</IonButton>
    //       </IonCardContent>
    //     </IonCard>
    //   </IonCol>
    // </IonRow>
  );
};

export default MealPlanItem;
