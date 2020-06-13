import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonItem,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import "./Settings.css";
import { Redirect, Route } from "react-router";
import ShoppingList from "./Shoppings";
import { restaurantOutline, cartOutline, readerOutline, settingsOutline } from "ionicons/icons";
import MyPage from "./MyPage";
import ChangePW from "./ChangePW";

const Settings: React.FC = () => {

  return (
    <IonPage>
      <IonRouterOutlet>
        <Redirect exact path="/" to="/meals" />
        {/*
          Using the render method prop cuts down the number of renders your components will have due to route changes.
          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
        <Route path="/mypage" component={MyPage} exact={true} />
        <Route path="/changepw" component={ChangePW} exact={true} />
      </IonRouterOutlet>
      <IonContent slot="bottom">
        <IonItem href="/mypage">
          <IonLabel>Check My Information</IonLabel>
        </IonItem>
        <IonItem href="/changepw">
          <IonLabel>Change Password</IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
