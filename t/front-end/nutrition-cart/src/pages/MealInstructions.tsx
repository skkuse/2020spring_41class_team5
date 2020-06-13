import React, { useState, useEffect } from "react";
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
import api from "../data/api";
import { RouteComponentProps } from "react-router";

interface MealPlanItemProps extends RouteComponentProps<{
  id: string;
}> {}

const MealInstructions: React.FC<MealPlanItemProps> = ({match}) => {
  const [meal, setMeal] = useState<Meal>();
  const [loading, setLoading] = useState(false);
  useEffect( () => {
    setLoading(true);
    // const str = `${dayText}`
    //const document = 
//alert(document)
    api.get("mealplans/".concat(match.params.id) +"/")
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
          <IonItem>
            {
              meal?.strInstructions.split("\\n").map(function(item, idx){
                return (
                  item
                )
              }
              )
            }
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default MealInstructions;


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
