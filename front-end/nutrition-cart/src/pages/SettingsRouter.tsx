

import React, { useState, useEffect } from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonFooter,
  IonFab,
  IonFabButton,
  IonIcon,
  IonApp,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonButton,
  IonButtons,
  IonBadge,
  useIonViewDidEnter,
} from "@ionic/react";

import axios from "axios";

import "./MealPlan.css";
import WeekdaySegment from "../components/WeekdaySegment";
import { Meal } from "../models/meals";
import MealPlanItem from "../components/MealPlanItem";
import { add, restaurant, basket, gift, settings, calendar, personCircle, map, informationCircle } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect, RouteComponentProps } from "react-router";
import MealDetails from "./MealDetails";
import MealRecoms from "./MealRecoms";
import Settings from "./SettingsPage";
import Deliveries from "./Deliveries";
import Shoppings from "./Shoppings";
import { StorageAPIWrapper } from "../data/localStroage";
import MealInstructions from "./MealInstructions";
import MealNutrition from "./MealNutrition";
import MealIngredients from "./MealIngredients";
import MyPage from "./MyPage";
import ChangePW from "./ChangePW";
import Survey from "./Survey";
import FAQ from "./FAQ";
import Servicecenter from "./Servicecenter";

// const SettingsRouter: React.FC<RouteComponentProps> = ({ match }) => {

//   return (

//     <IonRouterOutlet>
//       <Route path={`/settings/`} component={Settings} exact={true} />
//       <Route path={`${match.url}/mypage`} component={MyPage} />
//       <Route path={`${match.url}/changepw`} component={ChangePW} />
//       <Route path={`${match.url}/survey`} component={Survey} />
//       <Route path={`${match.url}/faq`} component={FAQ} />
//       <Route path={`${match.url}/servicecenter`} component={Servicecenter} />
//     </IonRouterOutlet>

//   );
// };

// export default SettingsRouter;

