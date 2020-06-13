import React, { useState, useEffect } from "react";
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
  IonGrid,
  IonRow,
  IonText,
  IonLoading,
} from "@ionic/react";

import { Delivery } from "../models/delivery";
import DeliveryItem from "../components/DeliveryItem";

import axios from "axios";
import { Link, RouteComponentProps } from "react-router-dom";
import { StorageAPIWrapper } from "../data/localStroage";
import { toast } from "../toast";
import { registerUser } from "../data/api";


const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confPassowrd, setConfPassword] = useState<string>("");

  async function register() {
    setLoading(true);
    if (password !== confPassowrd) {
      toast("Passwords do not match.");
    } else if (email.trim() === "" || password.trim() === "") {
      toast("Username and Password are required.");
    }
    const res = await registerUser(email, password);
    if (!res) {
      toast("Error while trying to login.");
    } else {
      toast("Register success");
      history.replace("/survey");
    }
    setLoading(false);
  }

  async function testPluginWithWrapper() {
    const storage = new StorageAPIWrapper();
    let result: boolean = await storage.openStore({});
    if (result) {
      var value = await storage.getItem("key1-test");
      console.log(value);
    }
  }

  useEffect(() => {});

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle color="primary">Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLoading message="Loading ..." duration={10} isOpen={loading} />
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle color="primary" size="large">
              Register
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
              <IonRow>
                <IonInput
                  placeholder="Confirm Passowrd"
                  type="password"
                  onIonChange={(e: any) => setConfPassword(e.detail.value!)}
                />
              </IonRow>
            </IonGrid>
            {/* call registerUser in {} */}
            <IonButton color="primary" onClick={register}>
              Register
            </IonButton>
            <br></br>
            <br></br>
            <Link to="/login">Back to Login?</Link>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;
