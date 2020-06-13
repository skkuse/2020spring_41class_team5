
import React from "react";
import {
  IonLabel,
  IonRow,
  IonGrid,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonThumbnail,
} from "@ionic/react";
import { Meal } from "../models/meals";
import { RouteComponentProps } from "react-router";
import { shoppingItem } from "../models/shoppingItem";

interface ShoppingItemProps {
  shoppingItem: shoppingItem;
}

// <{ onCalc: () => void; onReset: () => void }>
const ShoppingItem: React.FC<ShoppingItemProps> = ({ shoppingItem }) => {
  return (
    <IonCardContent>
      <IonItem>
        <IonThumbnail slot="start">
          <img src={shoppingItem.img} />
        </IonThumbnail>
        <IonLabel>
          <h3>{shoppingItem.name}</h3>
          <p>{shoppingItem.price}</p>
        </IonLabel>
      </IonItem>
      <IonGrid>
        <IonRow>
          <IonCol></IonCol>
          {shoppingItem.desc}
          <IonCol></IonCol>
          <IonCol></IonCol>
          <IonCol></IonCol>
        </IonRow>
      </IonGrid>
    </IonCardContent>
  );
};

export default ShoppingItem;
