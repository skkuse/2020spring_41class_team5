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
    axios.get("http://127.0.0.1:8000/mealplans/".concat(match.params.id) + "/", {
      headers: { 'Authorization': data.state.token }
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
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle> Cooking Instructions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonImg src= {meal?.img}></IonImg>
            {meal?.strInstructions.split("\\n").map((item, i) => (
              <IonItem key={i}> {item}</IonItem>
            ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default MealInstructions;

