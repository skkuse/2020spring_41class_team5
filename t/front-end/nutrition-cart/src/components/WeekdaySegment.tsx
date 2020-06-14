import React, { useState, useEffect, useReducer, useContext } from "react";
import {
  IonSegmentButton,
  IonLabel,
  IonSegment,
  IonRow,
  IonGrid,
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonButton,
  IonFooter,
  IonButtons,
  IonDatetime,
  useIonViewDidEnter,
  useIonViewWillEnter,
} from "@ionic/react";

import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect, RouteComponentProps, useHistory } from "react-router";
import MealRecoms from "../pages/MealRecoms";
import MealDetails from "../pages/MealDetails";
import Shoppings from "../pages/Shoppings";
import Deliveries from "../pages/Deliveries";
import Settings from "../pages/Settings";
import { restaurant, basket, gift, add, codeSlashOutline } from "ionicons/icons";
import { settings } from "cluster";
import MealPlanItem from "./MealPlanItem";
import { Meal } from "../models/meals";


import axios from "axios";
import { toast } from "../toast";


// const storage = new StorageAPIWrapper();

import { Plugins } from "@capacitor/core";
import { AppContext } from "../data/AppContextProvider";

const WeekdaySegment: React.FC<RouteComponentProps> = ({ match }) => {

  const daye = new Date(Date.now())

  const nextDay = new Date(daye);
  nextDay.setDate(daye.getDate() + 1);

  //spoken: the Day after the next Day
  const tDatnD = new Date(daye);
  tDatnD.setDate(daye.getDate() + 2);

  //spoken: the Day after the day after the next Day
  const tDatDatnDay = new Date(daye);
  tDatDatnDay.setDate(daye.getDate() + 3);

  const Weekday = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];
  // '2012-12-15T13:47:20.789'
  const [selectedDate, setSelectedDate] = useState<string>(daye.toString());

  const [dayText, setDay] = useState<string>(daye.toString());
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState<string>("Nothing");
  const [tok, setTok] = useState("");
  const data = useContext(AppContext);
  const history = useHistory();

  async function loadData() {
    const loadedData =
      await axios.get("http://localhost:8000/mealplans/", { headers: { 'Authorization': data.state.token } })
        .then((res: { data: React.SetStateAction<Meal[]>; }) => {
          setMeals(res.data);
          setLoading(false);
        }).catch(() => {
          toast("Error while loading tokens. Please login again.");
        });
  }

  useEffect(() => {
    setLoading(true);
    loadData();
    setLoading(false);
  }, [setMeals]);

  useIonViewWillEnter(() => {
    // loadData();
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Meal Plan</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Meal Plan</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          {loading && <p>Its loading man</p>}
          {!loading &&
            meals.map((meal, i) => <MealPlanItem key={i} meal={meal} />)}
        </IonGrid>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton
            routerLink={`${match.url}/recoms`}
            routerDirection="forward"
          >
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
      {/* setMeals(meals.filter( m => m.name === dayText )); loadItems()  */}
      <IonFooter>
        <IonSegment
          value={selectedDate}
          onIonChange={(e) => {
            setSelectedDate(e.detail.value!);
          }}
        >
          <IonSegmentButton value={daye.toString()}>
            <IonDatetime
              displayFormat="DD. DDD."
              value={daye.toString()}
            ></IonDatetime>
          </IonSegmentButton>
          <IonSegmentButton value={nextDay.toString()}>
            <IonDatetime
              displayFormat="DD. DDD."
              value={nextDay.toString()}
            ></IonDatetime>
          </IonSegmentButton>
          <IonSegmentButton value={tDatnD.toString()}>
            <IonDatetime
              displayFormat="DD. DDD."
              value={tDatnD.toString()}
            ></IonDatetime>
          </IonSegmentButton>
          <IonSegmentButton value={tDatDatnDay.toString()}>
            <IonDatetime
              displayFormat="DD. DDD."
              value={tDatDatnDay.toString()}
            ></IonDatetime>
          </IonSegmentButton>
        </IonSegment>
      </IonFooter>
    </IonPage>
  );
};

export default WeekdaySegment;

    // console.log("Segment selected", e.detail.value)
    // <IonSegment value={dayText} onIonChange={(e) => setDay(e.detail.value!)}>
    //       <IonSegmentButton value="Mo">
    //         <IonLabel>Mo</IonLabel>
    //       </IonSegmentButton>
    //       <IonSegmentButton value="Tu">
    //         <IonLabel>Tu</IonLabel>
    //       </IonSegmentButton>
    //       <IonSegmentButton value="Wed">
    //         <IonLabel>Wed</IonLabel>
    //       </IonSegmentButton>
    //       <IonSegmentButton value="Thu">
    //         <IonLabel>Thu</IonLabel>
    //       </IonSegmentButton>
    //       <IonSegmentButton value="Fri">
    //         <IonLabel>Fri</IonLabel>
    //       </IonSegmentButton>
    //       <IonSegmentButton value="Sat">
    //         <IonLabel>Sat</IonLabel>
    //       </IonSegmentButton>
    //       <IonSegmentButton value="Sun">
    //         <IonLabel>Sun</IonLabel>
    //       </IonSegmentButton>
    // </IonSegment>
