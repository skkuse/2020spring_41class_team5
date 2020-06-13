import axios from "axios";
import { Component } from "react";
import React, { useState, useEffect } from "react";
import {
  IonAlert,
  IonText,
  IonApp,
  IonRow,
  IonCol,
  IonGrid,
  IonPopover,
  IonThumbnail,
  IonActionSheet,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { IonReactHashRouter } from "@ionic/react-router";
import { shoppingItem } from "../models/shoppingItem";
import ShoppingItem from "../components/ShoppingItem";

interface ShoppingListProps {
  shoppinglist: shoppingItem[];
}
const ShoppingList: React.FC = () => {
  const [purchaseStatus, setPurchaseStatus] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [shoppingList, setshoppingList] = useState<shoppingItem[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "http://localhost:8000/shoppings/",
    }).then((res) => {
      const state = res.data;
      setshoppingList(
        state.filter((m: any) => {
          return m.state === true;
        })
      );
      setLoading(false);
    });
  }, [setshoppingList]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">Shopping</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonGrid>
              <IonRow>
                <IonCol></IonCol>
                <IonCol className="ion-align-self-center">
                  <IonCardTitle>ShoppingList</IonCardTitle>
                </IonCol>
                <IonCol></IonCol>
              </IonRow>
            </IonGrid>
          </IonCardHeader>
          {loading && <p>Its loading man</p>}
          {!loading &&
            shoppingList.map((Item, i) => <ShoppingItem key={i} shoppingItem={Item} />)}
        </IonCard>
        <IonGrid>
          <IonRow>
            <IonCol></IonCol>
            <IonCol className="ion-align-self-center">
              <IonButton
                size="large"
                onClick={() => {
                  setShowSuccess(true);
                }}
                expand="block"
              >
                PURCHASE
              </IonButton>
              <IonAlert
                isOpen={showSuccess}
                onDidDismiss={() => setShowSuccess(false)}
                cssClass="Tab2.css"
                header={"Success"}
                message={"Purchase Success!"}
                buttons={["OK"]}
              />
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default ShoppingList;
