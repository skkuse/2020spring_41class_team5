
import React, { useState, useContext } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
} from "@ionic/react";

import { AppContext } from "../data/AppContextProvider";

const SettingsPage: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const data = useContext(AppContext);
  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard routerLink="/settings/mypage">
          <IonCardHeader>
            <IonCardTitle>Check MY Information</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard routerLink="/settings/changepw">
          <IonCardHeader>
            <IonCardTitle>Change Password</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard routerLink="/settings/faq">
          <IonCardHeader>
            <IonCardTitle>FAQ</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard routerLink="/settings/servicecenter">
          <IonCardHeader>
            <IonCardTitle>Service Center</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonItem routerLink="/">
          <IonLabel>Logout</IonLabel>
        </IonItem>

      </IonContent>

    </IonPage>
  );
};

export default SettingsPage;


// import React from "react";
// import {
//   IonContent,
//   IonHeader,
//   IonPage,
//   IonTitle,
//   IonToolbar,
//   IonItem,
//   IonLabel,
//   IonCard,
//   IonCardHeader,
//   IonCardTitle,
//   IonFooter,
// } from "@ionic/react";
// import { RouteComponentProps } from "react-router";

// const Settings: React.FC<RouteComponentProps> = ({ history }) => {
//   return (
//     <IonPage>
//       <IonContent slot="bottom">
//         <IonHeader>
//           <IonToolbar>
//             <IonTitle>Settings</IonTitle>
//           </IonToolbar>
//         </IonHeader>

//       </IonContent>
//       <IonFooter>
//         <IonItem >
//           Copyright © 2020.team5SE. All rights reserved.
//         </IonItem>
//         {/* <footer> <p></p></footer> */}
//       </IonFooter>
//     </IonPage>
//   );
// };

// export default Settings;
