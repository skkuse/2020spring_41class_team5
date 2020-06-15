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
} from "@ionic/react";
import { Meal } from "../models/meals";
import { RouteComponentProps } from "react-router";
import axios from "axios";
import { AppContext } from "../data/AppContextProvider";

interface MealPlanItemProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const MealIngredients: React.FC<MealPlanItemProps> = ({ match }) => {

  const data = useContext(AppContext);
  const [meal, setMeal] = useState<Meal>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // const str = `${dayText}`
    //const document =
    //alert(document)
    axios.get("http://192.168.0.244:8000/mealplans/".concat(match.params.id) + "/", {
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
          <IonTitle> Meal Ingredients</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={meal?.img}></IonImg>
        <IonList>
          {meal?.ingredients.map((ingred, key) => <IonItem> {ingred.name} </IonItem>)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default MealIngredients;
