
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import  { useForm, Controller } from 'react-hook-form';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  IonList,
  IonSelectOption,
  IonSelect,
  IonCheckbox,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonListHeader,
  IonImg,
  IonIcon,
  IonButtons,
  IonBackButton
  } from '@ionic/react';
import { call, mail, text, chatbox } from 'ionicons/icons';

const Servicecenter: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [auth, setAuth] = useState(null);
  const [checked, setChecked] = useState();

  const getUserInfo = (data: any) => {
    setLoading(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/settings" />
          </IonButtons>
          <IonTitle>Service Center</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <IonListHeader>
              KakaoTalk<IonIcon icon={chatbox}></IonIcon>
            </IonListHeader>
            <IonList>Team5skku</IonList>
            <IonList>7 AM – 8:30 PM</IonList>
            <IonList>MON – SAT</IonList>
            <IonListHeader>
              Call us <IonIcon icon={call}></IonIcon>
            </IonListHeader>
            <IonList>1234 – 9876</IonList>
            <IonList>8 AM – 4:30 PM</IonList>
            <IonList>MON – FRI</IonList>

            <IonListHeader>
              Email<IonIcon icon={mail}></IonIcon>
            </IonListHeader>
            <IonList>Team5skku@skku.edu</IonList>
            <IonList>24 All times</IonList>
            <IonList>365 All days</IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Servicecenter;
