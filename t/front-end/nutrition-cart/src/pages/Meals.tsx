import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import "./Shoppings.css";

import {} from "@ionic/react";
import { Route, Redirect, RouteComponentProps } from "react-router";
import Shoppings from "./Shoppings";
import Deliveries from "./Deliveries";
import Settings from "./Settings";
import MealPlan from "./MenuPlan";
import { restaurant, basket, gift, settings } from "ionicons/icons";

const Meals: React.FC <RouteComponentProps> = ({match}) => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path={`${match.url}/`} component={MealPlan} exact={true} />
        <Route path="/shoppings" component={Shoppings} exact={true} />
        <Route path="/deliveries" component={Deliveries} exact={true} />
        <Route path="/settings" component={Settings} />
        <Route
          exact={true}
          path="/"
          render={(props) => <Redirect to="/meals" />}
        />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="MealPlan" href="/meals">
          <IonIcon icon={restaurant} />
          <IonLabel>Meals</IonLabel>
        </IonTabButton>
        <IonTabButton tab="shoppings" href="/shoppings">
          <IonIcon icon={basket} />
          <IonLabel>Shopping</IonLabel>
        </IonTabButton>
        <IonTabButton tab="deliveries" href="/deliveries">
          <IonIcon icon={gift} />
          <IonLabel>Delivery</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/settings">
          <IonIcon icon={settings} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Meals;
