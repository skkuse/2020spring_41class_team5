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
import Settings from "./pages/Settings";
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

  const showSplash = () => {
    const { SplashScreen } = Plugins;
    SplashScreen.show();
    setTimeout(() => SplashScreen.hide(), 3000);
  };

 useIonViewWillEnter( () => {
  //  showSplash();
 });

return (
  <IonApp>
    <AppContextProvider>
      <IonReactRouter>
        {(data.state.token === "") && (
          <IonRouterOutlet>
            <Route path="/login" component={Login} exact={true} />
            <Route path="/Register" component={Register} exact={true} />
            <Route path="/meals" component={Meals} exact={true} />
            <Route path="/settings" component={Settings} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/changepw" component={ChangePW} />
            <Route path="/survey" component={Survey} />
            <Route
              path={`/meals/:id/instructions`}
              component={MealInstructions}
            />
            <Route path={`/meals/:id/nutritions`} component={MealNutrition} />
            <Route path="/faq" component={FAQ} />
            <Route path="/servicecenter" component={Servicecenter} />
            <Route path="/shoppings" component={Shoppings} exact={true} />
            <Route path="/deliveries" component={Deliveries} exact={true} />
            <Route path={`/meals/:id/ingredients`} component={MealIngredients} exact={true} />
            <Route
              exact={true}
              path="/"
              render={() => <Redirect to="/login" />}
            />
          </IonRouterOutlet>
        )}

        {/* {(data.state.token !== "") && (
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/login" component={Login} exact={true} />
              <Route path="/Register" component={Register} exact={true} />
              <Route path="/meals" component={Meals} exact={true} />
              <Route path="/settings" component={Settings} />
              <Route path="/mypage" component={MyPage} />
              <Route path="/changepw" component={ChangePW} />
              <Route path="/survey" component={Survey} />
              <Route
                ath={`/meals/:id/instructions`}
                component={MealInstructions}
              />
              <Route path={`/meals/:id/nutritions`} component={MealNutrition} />
              <Route path="/faq" component={FAQ} />
              <Route path="/servicecenter" component={Servicecenter} />
              <Route path="/shoppings" component={Shoppings} exact={true} />
              <Route path="/deliveries" component={Deliveries} exact={true} />
              <Route
                path={`/meals/:id/ingredients`}
                component={MealIngredients}
                exact={true}
              />
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
        )} */}
      </IonReactRouter>
    </AppContextProvider>
  </IonApp>
);};

export default App;
