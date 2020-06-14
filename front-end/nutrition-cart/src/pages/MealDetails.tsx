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
import { AppContext } from "../data/AppContextProvider";
import axios from "axios";

interface MealPlanItemProps extends RouteComponentProps<{
  id: string;
}> {}

const MealDetails: React.FC<MealPlanItemProps> = ({match}) => {
  const [meal, setMeal] = useState<Meal>();
  const [loading, setLoading] = useState(false);
  const data = useContext(AppContext);

  useEffect( () => {
    setLoading(true);
    axios.get("http://localhost:8000/mealplans/".concat(match.params.id) + "/", {
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
          <IonTitle> Meal Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src= {meal?.img}></IonImg>
        <IonList>
          <IonItem button routerLink={`/meals/${meal?.id}/instructions`}>
            <IonLabel>Cooking Instructions</IonLabel>
          </IonItem>

          <IonItem button routerLink={`/meals/${meal?.id}/nutritions`}>
            <IonLabel>Nutrition Overview</IonLabel>

          </IonItem>
          <IonItem button routerLink={`/meals/${meal?.id}/ingredients`}>
            <IonLabel>Ingredients</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default MealDetails;


// const data = {
//   grant_type: USER_GRANT_TYPE,
//   client_id: CLIENT_ID,
//   client_secret: CLIENT_SECRET,
//   scope: SCOPE_INT,
//   username: DEMO_EMAIL,
//   password: DEMO_PASSWORD
// };
// axios.post(TOKEN_URL, Querystring.stringify(data))
//   .then(response => {
//     console.log(response.data);
//     USER_TOKEN = response.data.access_token;
//     console.log('userresponse ' + response.data.access_token);
//   })
//   .catch((error) => {
//     console.log('error ' + error);
//   });
