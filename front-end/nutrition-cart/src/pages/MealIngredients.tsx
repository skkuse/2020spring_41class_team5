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
          {meal?.strIngredient1 !== "" && (
            <IonItem> {meal?.strIngredient1} </IonItem>
          )}
          {meal?.strIngredient2 !== "" && (
            <IonItem> {meal?.strIngredient2} </IonItem>
          )}
          {meal?.strIngredient3 !== "" && (
            <IonItem> {meal?.strIngredient3} </IonItem>
          )}
          {meal?.strIngredient4 !== "" && (
            <IonItem> {meal?.strIngredient4} </IonItem>
          )}
          {meal?.strIngredient5 !== "" && (
            <IonItem> {meal?.strIngredient5} </IonItem>
          )}
          {meal?.strIngredient6 !== "" && (
            <IonItem> {meal?.strIngredient6} </IonItem>
          )}
          {meal?.strIngredient7 !== "" && (
            <IonItem> {meal?.strIngredient7} </IonItem>
          )}
          {meal?.strIngredient8 !== "" && (
            <IonItem> {meal?.strIngredient8} </IonItem>
          )}
          {meal?.strIngredient9 !== "" && (
            <IonItem> {meal?.strIngredient9} </IonItem>
          )}
          {meal?.strIngredient10 !== "" && (
            <IonItem> {meal?.strIngredient10} </IonItem>
          )}
          {meal?.strIngredient11 !== "" && (
            <IonItem> {meal?.strIngredient11} </IonItem>
          )}
          {meal?.strIngredient12 !== "" && (
            <IonItem> {meal?.strIngredient12} </IonItem>
          )}
          {meal?.strIngredient13 !== "" && (
            <IonItem> {meal?.strIngredient13} </IonItem>
          )}
          {meal?.strIngredient14 !== "" && (
            <IonItem> {meal?.strIngredient14} </IonItem>
          )}
          {meal?.strIngredient15 !== "" && (
            <IonItem> {meal?.strIngredient15} </IonItem>
          )}
          {meal?.strIngredient16 !== "" && (
            <IonItem> {meal?.strIngredient16} </IonItem>
          )}
          {meal?.strIngredient17 !== "" && (
            <IonItem> {meal?.strIngredient17} </IonItem>
          )}
          {meal?.strIngredient18 !== "" && (
            <IonItem> {meal?.strIngredient18} </IonItem>
          )}
          {meal?.strIngredient19 !== "" && (
            <IonItem> {meal?.strIngredient19} </IonItem>
          )}
          {meal?.strIngredient20 !== "" && (
            <IonItem> {meal?.strIngredient20} </IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default MealIngredients;
