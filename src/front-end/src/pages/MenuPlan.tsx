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
  // const [meals, setMeal] = useState<Meal[]>([
  //   {
  //     id: 1,
  //     name: "Burger",
  //     mealType: "lunch",
  //   },
  //   {
  //     id: 2,
  //     name: "Salat",
  //     mealType: "dinner",
  //   },
  // ]);

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

    // <IonPage>
    //   <IonHeader>
    //     <IonToolbar>
    //       <IonTitle>Meal Plan</IonTitle>
    //     </IonToolbar>
    //   </IonHeader>
    //   <IonContent>
    //     <IonHeader collapse="condense">
    //       <IonToolbar>
    //         <IonTitle size="large">Meal Plan</IonTitle>
    //       </IonToolbar>
    //     </IonHeader>
    //     <IonGrid>
    //       {loading && <p>Its loading man</p>}
    //       {!loading &&
    //         meals.map((meal, i) => <MealPlanItem key={i} meal={meal} />)}
    //     </IonGrid>
    //     <IonFab vertical="bottom" horizontal="end" slot="fixed">
    //       <IonFabButton routerLink={`${match.url}/recoms`} routerDirection="forward" >
    //         <IonIcon icon={add} />
    //       </IonFabButton>
    //     </IonFab>
    //   </IonContent>
    // </IonPage>


      <IonRouterOutlet>
        {/* <Route path={`${match.url}`} component={WeekdaySegment} exact={true} /> */}
        {/* <Route exact path={`${match.url}`} component={WeekdaySegment} /> */}
        <Route exact path={`${match.url}/recoms`} component={MealRecoms} />
        <Route exact path={`${match.url}/:id`} component={MealDetails} />
        <Route exact path={`${match.url}`} render={(props) => { return <WeekdaySegment {...props} /> } } />
      </IonRouterOutlet>

    // <IonReactRouter>
    //   <IonTabs>
    //     <IonRouterOutlet>
    //       <Route path={`${match.url}`} component={WeekdaySegment} />
    //       <Route path={`${match.url}/tuesday`} component={Settings} />
    //       {/* <Redirect exact from={`${match.url}`} to={`${match.url}`}/> */}
    //     </IonRouterOutlet>

    //     <IonTabBar slot="bottom">
    //       <IonTabButton tab="monday" href={`${match.url}/monday`}>
    //         <IonLabel>Monday</IonLabel>
    //       </IonTabButton>
    //       <IonTabButton tab="tuesday" href={`${match.url}/tuesday`}>
    //         <IonLabel>Tuesday</IonLabel>
    //       </IonTabButton>
    //     </IonTabBar>
    //   </IonTabs>
    // </IonReactRouter>

//     <IonReactRouter>
//       <IonTabs>
//         <IonRouterOutlet>
//           <Route exact path={`${match.url}/recoms`} component={MealRecoms} />
//           <Route exact path={`${match.url}/:id`} component={MealDetails} />
//           <Route exact path={`${match.url}/monday`} render={(props) => { return <WeekdaySegment {...props} /> }} />
//           <Route
//             path="/meals"
//             render={() => <Redirect to={`${match.url}/monday`}/>}
//             exact={true}
//           />
//         </IonRouterOutlet>

//       <IonTabBar slot="bottom">
//           <IonTabButton tab="monday" href={`${match.url}/monday`}>
//         <IonLabel>Monday</IonLabel>
//       </IonTabButton>
//   </IonTabBar>
// </IonTabs>
//     </IonReactRouter>

  /*
          <IonTabs>
          <IonTabBar slot="bottom">
        <IonTabButton tab="weekday1" href={`${match.url}`}>
            <IonLabel>Monday</IonLabel>
          </IonTabButton>
        <IonTabButton tab="weekday2" href={`${match.url}/tuesday`}>
          <IonLabel>Tuesday</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs> */



            /* <Route
              path="/meals/weekday1"
              render={() => < WeekdaySegment /> }
              exact={true}
            />
          <Route
            path="/meals/weekday2"
            render={() => < WeekdaySegment />}
            exact={true}
          />
          <Route
            path="/meals"
            render={() => <Redirect to="/meals/weekday1" />}
            exact={true}
          /> */

    // <IonPage>
    //   <IonHeader>
    //     <IonToolbar>
    //       <IonTitle>Meal Plan</IonTitle>
    //     </IonToolbar>
    //   </IonHeader>
    //   <IonContent>
    //     <IonHeader collapse="condense">
    //       <IonToolbar>
    //         <IonTitle size="large">Meal Plan</IonTitle>
    //       </IonToolbar>
    //     </IonHeader>
    //     <IonGrid>
    //       {loading && <p>Its loading man</p>}
    //       {!loading &&
    //         meals.map((meal, i) => <MealPlanItem key={i} meal={meal} />)}
    //     </IonGrid>
    //     <IonFab vertical="bottom" horizontal="end" slot="fixed">
    //       <IonFabButton routerLink={"/meals/recommendations"} routerDirection="forward" >
    //         <IonIcon icon={add} />
    //       </IonFabButton>
    //     </IonFab>
    //   </IonContent>
    //     {/* <WeekdaySegment /> */}
    // </IonPage>
  );
};


export default MealPlan;
// export default connect<OwnProps, StateProps, DispatchProps>({
//   mapStateToProps: (state) => ({
//     meals: selectors.getSpeakers(state),
//   }),
//   component: React.memo(MealPlan),
// });
