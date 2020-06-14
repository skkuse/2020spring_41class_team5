import React, { useState, useEffect, useContext } from "react";
import {
  IonSegmentButton,
  IonLabel,
  IonSegment,
  IonRow,
  IonGrid,
  IonPage,
  IonCardContent,
  IonItem,
  IonThumbnail,
  IonButton,
  IonText,
  IonNote,
} from "@ionic/react";
import { Delivery } from "../models/delivery";
import api, { getToken } from "../data/api";
import { useHistory, RouteComponentProps } from "react-router";
import { toast } from "../toast";
import Moment from "react-moment";
import "moment-timezone";
import { AppContext } from "../data/AppContextProvider";

interface DeliveryItemProps {
  delivery: Delivery;
}

const DeliveryItem: React.FC<DeliveryItemProps> = ({ delivery }) => {

  const [busy, setBusy] = useState(false);
  const history = useHistory();
  const data = useContext(AppContext);

  const [userToken, setUserToken] = useState<string>("");
  const token = getToken();
  token
    .then((token) => {
      if (token !== "") {
        setUserToken("Token ".concat(token));
        console.log(`User token is in Delivery if: ${userToken}`);
      } else {
        console.log(`user token is in Delivery else: ${userToken}`);
        setUserToken(token);
        history.replace("/meals");
      }
    })
    .catch(() => {
      toast("Error while loading tokens. Please login again.");
    });


  return (
    <IonRow>
      <IonItem>
        <IonLabel>
          <h2>{delivery.name}</h2>
          <p>Next Shipping</p>
          <IonNote slot="end">
            <Moment format="MMMM Do YYYY">
              {delivery.deliverydate}
            </Moment>
          </IonNote>
        </IonLabel>
        <IonThumbnail slot="start">
          <img src={delivery.img} />
        </IonThumbnail>
      </IonItem>
    </IonRow>
  );
};

export default DeliveryItem;
