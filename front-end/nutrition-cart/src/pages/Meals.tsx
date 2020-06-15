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
import Settings from "./SettingsPage";
import MealPlan from "./MenuPlan";
import { restaurant, basket, gift, settings } from "ionicons/icons";
import MyPage from "./MyPage";
import ChangePW from "./ChangePW";
import Survey from "./Survey";
import MealInstructions from "./MealInstructions";
import MealNutrition from "./MealNutrition";
import FAQ from "./FAQ";
import MealIngredients from "./MealIngredients";
import Servicecenter from "./Servicecenter";
import SettingsPage from "./SettingsPage";
import MealRecoms from "./MealRecoms";
import MealDetails from "./MealDetails";
import MealPlanPage from "./MealPlanPage";
// import Servicecenter from "./Servicecenter";
// import SettingsRouter from "./SettingsRouter";

const Meals: React.FC <RouteComponentProps> = ({match}) => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path={`${match.url}/`} component={MealPlan} exact={true} />
        <Route path="/shoppings" component={Shoppings} exact={true} />
        <Route path="/deliveries" component={Deliveries} exact={true} />

        <Route path="/shoppings" component={Shoppings} exact={true} />
        <Route path="/deliveries" component={Deliveries} exact={true} />

        <Route path={`/settings`} component={SettingsPage} exact={true} />
        <Route path={`/settings/mypage`} component={MyPage} />
        <Route path={`/settings/changepw`} component={ChangePW} />
        <Route path={`/settings/survey`} component={Survey} />
        <Route path={`/settings/faq`} component={FAQ} />
        <Route path={`/settings/servicecenter`} component={Servicecenter} />

        <Route exact path={`/meals/recoms`} component={MealRecoms} />
        <Route exact path={`/meals/:id`} component={MealDetails} />
        <Route exact path={`/meals/:id/nutritions`} component={MealNutrition} />
        <Route exact path={`/meals/:id/instructions`} component={MealInstructions} />
        <Route exact path={`/meals/:id/ingredients`} component={MealIngredients} />
        <Route exact path={`/meals/`} component={MealPlanPage} />

        <Route
          exact={true}
          path="/"
          render={() => <Redirect to="/meals" />}
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
