import React, { useState, useEffect, useContext } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
  IonGrid,
  IonButtons,
  IonBackButton,
  IonSearchbar,
  IonButton,
  IonImg,
  IonListHeader,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
  IonRow,
} from "@ionic/react";
import { Meal } from "../models/meals";
import { RouteComponentProps } from "react-router";
import { AppContext } from "../data/AppContextProvider";
import axios from "axios";

interface MealPlanItemProps extends RouteComponentProps<{
  id: string;
}> {}

const MealInstructions: React.FC<MealPlanItemProps> = ({match}) => {
  const [meal, setMeal] = useState<Meal>();
  const [loading, setLoading] = useState(false);
  const data = useContext(AppContext);

  useEffect( () => {
    setLoading(true);
    axios.get("http://192.168.0.244:8000/mealplans/".concat(match.params.id) + "/", {
      headers: { 'Authorization': data.state.token, 'Content-Type': 'application/x-www-form-urlencoded'}
    })
      .then((res) => {
        setMeal(res.data);
        setLoading(false);
        console.log(res.data);
      });
}, [setMeal]);



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle> Cooking Instructions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={meal?.img}></IonImg>
        <IonList>
          {meal?.strInstructions.split(".").map((item, i) => (
              <IonItem key={i}> {item}</IonItem>
            ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default MealInstructions;

