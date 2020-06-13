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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  
} from "@ionic/react";
import "./Settings.css";
import { Redirect, Route } from "react-router";
import ShoppingList from "./Shoppings";
import { restaurantOutline, cartOutline, readerOutline, settingsOutline } from "ionicons/icons";
import MyPage from "./MyPage";
import ChangePW from "./ChangePW";
import Servicecenter from "./Servicecenter";
import FAQ from "./FAQ";

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
        <Route path="/faq" component={FAQ} exact={true} />
        <Route path="/serviecenter" component={Servicecenter} exact={true} />
      </IonRouterOutlet>
      <IonContent slot="bottom">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonItem href="/">
          <IonLabel></IonLabel>
        </IonItem>
        <IonCard href="/mypage">
          <IonCardHeader>
            <IonCardTitle>Check MY Information</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard href="/changepw">
          <IonCardHeader>
            <IonCardTitle>Change Password</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard href="/faq">
          <IonCardHeader>
            <IonCardTitle>FAQ</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard href="/servicecenter">
          <IonCardHeader>
            <IonCardTitle>Service Center</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonItem>

        </IonItem>
        <IonItem>
          <footer> <p>Copyright © 2020.team5SE. All rights reserved.</p></footer> 
        </IonItem>
        
      </IonContent> 
    </IonPage>
  );
};

export default Settings;
