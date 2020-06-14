import React, { useState, useEffect, useContext } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonGrid,
  IonSearchbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonButton,
  IonIcon,
  IonRow,
  IonCol,
  IonFooter,
} from "@ionic/react";
import { Meal } from "../models/meals";
import "./MealRecoms.css";

import axios from "axios";
import MealPlanItem from "../components/MealPlanItem";
import { thumbsUp, bookmark, newspaper } from "ionicons/icons";
import MealRecomItem from "../components/MealRecomItem";
import { AppContext } from "../data/AppContextProvider";

const MealRecoms: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);
  const data = useContext(AppContext);

  // "http://127.0.0.1:8000/mealplans/recommendations or
  // http://localhost:8000/mealplans_diets/
  useEffect(() => {
    setLoading(true);
    axios.get("http://127.0.0.1:8000/recoms/").then((res) => {
      setMeals(res.data);
      setLoading(false);
    });
  }, [setMeals]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/meals" />
          </IonButtons>
          <IonTitle>Recommendations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Recommendations</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonSearchbar
              value={searchText}
              onIonChange={(e) => setSearchText(e.detail.value!)}
            ></IonSearchbar>
          </IonToolbar>
        </IonHeader>
        {loading && <p>Its loading man</p>}
          {!loading &&
            meals.map((meal, i) => <MealRecomItem key={i} meal={meal} />)}
      </IonContent>
    </IonPage>
  );
};

export default MealRecoms;
