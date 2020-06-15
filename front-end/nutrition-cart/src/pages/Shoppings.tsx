import axios from "axios";
import { Component } from "react";
import React, { useState, useEffect } from "react";
import { RefresherEventDetail } from '@ionic/core';
import {
  IonRefresher,
  IonRefresherContent,
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
import { RouteComponentProps } from "react-router";
import Querystring from "querystring";

function doRefresh(event: CustomEvent<RefresherEventDetail>) {
  console.log('Begin async operation');

  setTimeout(() => {
    console.log('Async operation has ended');
    event.detail.complete();
  }, 2000);
}

var x: number
interface ShoppingListProps {
  shoppinglist: shoppingItem[];
}

const ShoppingList: React.FC =() => {
  const [purchaseStatus, setPurchaseStatus] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [shoppingList, setshoppingList] = useState<shoppingItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "http://192.168.0.244:8000/shoppings/",
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

  const changestate=()=>{
    const data = shoppingList
    data.map((Item,i) => {
      const d = {
        "id":Item.id.toString(),
        "name":Item.name,
        "img":Item.img,
        "price":Item.price.toString(),
        "state": false,
        "delivery": 1
      }
      axios({
        method:"PUT",
        url: "http://192.168.0.244:8000/shoppings/".concat(Item.id.toString())+"/",
        data: Querystring.stringify(d)
      });
      alert(JSON.stringify(d, null, 2))
    });
  }


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
                onClick={changestate}
                expand="block"
                href="/shoppings"
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
