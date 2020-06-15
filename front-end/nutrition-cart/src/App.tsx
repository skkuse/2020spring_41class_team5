import React, { useEffect, useState, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  useIonViewWillEnter,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle, people, cart, basket, gift,restaurant, settings } from "ionicons/icons";
import MenuPlan from "./pages/MenuPlan";
import Shoppings from "./pages/Shoppings";
import Deliveries from "./pages/Deliveries";
import MealDetails from "./pages/MealDetails";
import MealRecoms from "./pages/MealRecoms";
import WeekdaySegment from "./components/WeekdaySegment";
import Register from "./pages/Register";
import Meals from "./pages/Meals";
import ChangePW from './pages/ChangePW';
import MyPage from './pages/MyPage';
import Survey from './pages/Survey';
import Servicecenter from './pages/Servicecenter';
import FAQ from './pages/FAQ';

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { StorageAPIWrapper } from "./data/localStroage";
import { getToken } from "./data/api";
import Login from "./pages/Login";
import MealInstructions from "./pages/MealInstructions";
import MealNutrition from "./pages/MealNutrition";
import MealIngredients from "./pages/MealIngredients";
import AppContextProvider, { AppContext } from "./data/AppContextProvider";
import { Plugins } from "@capacitor/core";
import MealPlan from "./pages/MenuPlan";
import MealPlanPage from "./pages/MealPlanPage";
import SettingsPage from "./pages/SettingsPage";

// import SettingsRouter from "./pages/SettingsRouter";

  const clearStorage = async () => {
    const storage = new StorageAPIWrapper();
    let result: boolean = await storage.openStore({});
    await storage.clear();
  }

 // clearStorage()
 // console.log("clear");

const App: React.FC = () => {

  const [isAuth, setAuth] = useState<boolean>(false);
  const data = useContext(AppContext);

  // const showSplash = () => {
  //   const { SplashScreen } = Plugins;
  //   SplashScreen.show();
  //   setTimeout(() => SplashScreen.hide(), 3000);
  // };

 useIonViewWillEnter( () => {
  //  showSplash();
 });

return (
  <IonApp>
    <AppContextProvider>
      <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/login" component={Login} exact={true} />
            <Route path="/Register" component={Register} exact={true} />
            <Route path="/meals" component={Meals} exact={true} />
            <Route path="/survey" component={Survey} />
            <Route
              exact={true}
              path="/"
              render={() => <Redirect to="/login" />}
            />
          </IonRouterOutlet>
      </IonReactRouter>
    </AppContextProvider>
  </IonApp>
);
};

export default App;



    {/* <Route path="/settings" component={SettingsRouter} /> */}
    {/* <Route path="/meals" component={MealPlan} exact={true} /> */}
