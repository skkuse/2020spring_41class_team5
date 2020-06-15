import React, { useState, useEffect, useContext } from "react";
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
  IonGrid,
} from "@ionic/react";

import { Delivery } from "../models/delivery";
import DeliveryItem from "../components/DeliveryItem";
import "moment-timezone";
import moment from "moment/moment.js";

import "./Deliveries.css";
import axios from "axios";
import { AppContext } from "../data/AppContextProvider";

 const currentdate = new Date(Date.now());

//const timetime = moment(currentdate).format("YYYY-MM-DDTHH:mm:ss Z");

const localTime = moment().format("YYYY-MM-DD"); // store localTime
const proposedDate = localTime + "T00:00:00.000Z";
// moment(YOUR_DATE_VARIABLE).format("YYYY-MM-DD HH:mm");

const Deliveries: React.FC = () => {

  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [oldDeliveries, setOldDeliveries] = useState<Delivery[]>([]);
  const [loading, setLoading] = useState(false);
  const data = useContext(AppContext);

    useEffect(() => {
      setLoading(true);
      axios.get("http://192.168.0.244:8000/deliveries/", {
        headers: { 'Authorization': data.state.token, 'Content-Type': 'application/x-www-form-urlencoded' }
      })
        .then((res) => {
          setDeliveries(res.data);
          const response = res.data;
          setDeliveries(
            response.filter((del: any) => {
              return del.deliverydate >= proposedDate;
            })
          );
          setOldDeliveries(res.data);
          setOldDeliveries(
            response.filter((del: any) => {
              return del.deliverydate < proposedDate;
            })
          );
          setLoading(false);
        });
    }, [setDeliveries, setOldDeliveries]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Delivery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Delivery</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Upcoming</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonGrid>
              {deliveries.map((delivery, i) => (
                <DeliveryItem key={delivery.delivery_id} delivery={delivery} />
              ))}
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Delivered</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard>
          <IonCardContent>
            {oldDeliveries.map((delivery, i) => (
              <DeliveryItem key={delivery.delivery_id} delivery={delivery} />
            ))}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Deliveries;
