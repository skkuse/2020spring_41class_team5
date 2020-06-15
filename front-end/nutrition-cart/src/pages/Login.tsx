import React, { useState, useEffect, useContext } from "react";
import {
  Link,
  Redirect,
  useHistory,
  RouteComponentProps,
} from "react-router-dom";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonFooter,
  IonIcon,
  IonRouterLink,
  IonLoading,
  IonImg,
} from "@ionic/react";
import { logoTwitter } from "ionicons/icons";

import axios from "axios";
import { loginUser } from "../data/api";

import { Delivery } from "../models/delivery";
import DeliveryItem from "../components/DeliveryItem";

import { Plugins } from "@capacitor/core";
import { StorageAPIWrapper } from "../data/localStroage";
import { toast } from "../toast";
import { AppContext } from "../data/AppContextProvider";

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const his = useHistory();
  const data = useContext(AppContext);

  const routeChange = () => {
    let path = `/`;
    history.push(path);
  };

  // const showSplash = () => {
  //   const { SplashScreen } = Plugins;
  //   SplashScreen.show();
  //   setTimeout(() => SplashScreen.hide(), 2000);
  // };

  const [loading, setLoading] = useState(false);
  const [isAuth, setAuth] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const logging = async () => {
    setLoading(true);
    var res = await loginUser(email, password);
    if (!res) {
      toast("Error while trying to login.");
    } else {
      data.state.token = res;
      toast("Login success");
      history.replace("/meals");
    }
    setLoading(false);
  };

  const { Browser } = Plugins;
  async function openBrowser() {
    await Browser.open({ url: "https://twitter.com/skku_1398?lang=en" });
  }

  useEffect(() => {});

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLoading message="Loading ..." duration={10} isOpen={loading} />
        <IonImg src="/images/logo.png" />
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle color="primary" size="large">
              Login
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonInput
                  placeholder="Email"
                  onIonChange={(e: any) => setEmail(e.detail.value!)}
                />
              </IonRow>
              <IonRow>
                <IonInput
                  placeholder="Password"
                  type="password"
                  onIonChange={(e: any) => setPassword(e.detail.value!)}
                />
              </IonRow>
            </IonGrid>
            {/* login function here   */}
            <IonButton color="primary" onClick={logging}>
              Login
            </IonButton>
            <br></br>
            <br></br>
            <IonText slot="center">Want to register?</IonText>
            <br></br>

            <Link to="/register">Register</Link>
            <br></br>
            <br></br>
            <IonText slot="center">Follow us!</IonText>
            <br></br>
            <IonButton color="light" onClick={openBrowser}>
              <IonIcon icon={logoTwitter} color="primary" />
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
