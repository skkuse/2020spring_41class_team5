import React, { useState, useEffect, useContext } from "react";
import { RouteComponentProps } from "react-router";

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
import axios from "axios";

import { AppContext } from "../data/AppContextProvider";

interface MealPlanItemProps extends RouteComponentProps<{
  id: string;
}> {}

const MealNutrition: React.FC<MealPlanItemProps> = ({match}) => {
  const [meal, setMeal] = useState<Meal>();
  const [loading, setLoading] = useState(false);
  const data = useContext(AppContext);

  useEffect( () => {
    setLoading(true);
    axios.get("http://192.168.0.244:8000/mealplans/".concat(match.params.id) + "/",{
      headers: { 'Authorization': data.state.token } })
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
          <IonTitle> Nutrition Overview</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonImg src={meal?.img}></IonImg>
          <IonItem>
          <br></br>
          Kcal : 353 kcal<br></br>
          FAT :	3.66g	<br></br>
          Carbohydrate :	76.13g<br></br>
          Protein : 8.79g
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default MealNutrition;
