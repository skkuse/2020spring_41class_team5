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
import MealPlanPage from "./MealPlanPage";
// import { connect } from "../data/connect";

// interface DispatchProps {}
// interface OwnProps {}
interface StateProps {
  meals: Meal[];
}

interface MealListProps extends StateProps {} //, OwnProps, DispatchProps

const MealPlan: React.FC<RouteComponentProps> = ({ match }) => {

  return (
      <IonRouterOutlet>
        <Route exact path={`${match.url}/recoms`} component={MealRecoms} />
        <Route exact path={`${match.url}/:id`} component={MealDetails} />
        <Route exact path={`${match.url}/:id/nutritions`} component={MealNutrition} />
        <Route exact path={`${match.url}/:id/instructions`} component={MealInstructions} />
        <Route exact path={`${match.url}/:id/ingredients`} component={MealIngredients}  />
        <Route exact path={`${match.url}/`} component={MealPlanPage} />
        {/* <Route exact path={`${match.url}`} render={(props) => { return <WeekdaySegment {...props} /> } } /> */}
      </IonRouterOutlet>
  );
};

export default MealPlan;

