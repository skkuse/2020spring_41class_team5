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
import Settings from "./Settings";
import Deliveries from "./Deliveries";
import Shoppings from "./Shoppings";
import { StorageAPIWrapper } from "../data/localStroage";
// import { connect } from "../data/connect";

// interface DispatchProps {}
// interface OwnProps {}
interface StateProps {
  meals: Meal[];
}


interface MealListProps extends StateProps {} //, OwnProps, DispatchProps

const MealPlan: React.FC<RouteComponentProps> = ({ match }) => {

  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/mealplans/",
    }).then((res) => {
      setMeals(res.data);
      setLoading(false);
    });
  }, [setMeals]);


  return (
      <IonRouterOutlet>
        <Route exact path={`${match.url}/recoms`} component={MealRecoms} />
        <Route exact path={`${match.url}/:id`} component={MealDetails} />
        <Route exact path={`${match.url}`} render={(props) => { return <WeekdaySegment {...props} /> } } />
      </IonRouterOutlet>
  );
};

export default MealPlan;

