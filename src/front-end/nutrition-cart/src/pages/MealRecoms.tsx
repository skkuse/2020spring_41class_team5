import React, { useState, useEffect } from "react";
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
} from "@ionic/react";
import { Meal } from "../models/meals";

import axios from "axios";
import MealPlanItem from "../components/MealPlanItem";

const MealRecoms: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);

  // "http://127.0.0.1:8000/mealplans/recommendations
  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/mealplans/",
    }).then((res) => {
      setMeals(res.data);
      setLoading(false);
    });
  }, [setMeals]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Recommendations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense" >
          <IonToolbar >
            <IonTitle size="large">Recommendations</IonTitle>
          </IonToolbar>
          <IonToolbar >
            <IonSearchbar
              value={searchText}
              onIonChange={(e) => setSearchText(e.detail.value!)}
            ></IonSearchbar>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          {loading && <p>Its loading man</p>}
          {!loading &&
            meals.map((meal, i) => <MealPlanItem key={i} meal={meal} />)}
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default MealRecoms;
