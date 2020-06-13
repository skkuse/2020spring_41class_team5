import React, { useState } from "react";
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
} from "@ionic/react";

const MealDetails: React.FC = () => {
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
        <IonGrid>
          <IonButton>Hello</IonButton>
        </IonGrid>
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
