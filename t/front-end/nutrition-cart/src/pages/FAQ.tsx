  
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
  IonItemDivider,
  IonListHeader,
  IonText,
  IonButtons,
  IonBackButton,
  } from '@ionic/react';

const FAQ :React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [auth, setAuth] = useState(null);
  const [checked, setChecked] = useState();

  const getUserInfo = (data: any) => {
    setLoading(true);
  }

    return (
      <IonPage>
      <IonHeader>
        <IonToolbar><IonButtons slot="start">
            <IonBackButton defaultHref="/settings" />
          </IonButtons>
          <IonTitle>FAQ</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonItem>
      </IonItem>

      <IonListHeader>Q1. I forget my ID and Password. How can I find it?</IonListHeader>
      <IonListHeader>Please contact our Service Center. You can find it on settings tab.</IonListHeader>
      <IonItemDivider></IonItemDivider>
      <IonListHeader>Q2. Where can I check the delivery status?</IonListHeader>
      <IonListHeader>You can check it in delivery page.</IonListHeader>
      <IonItemDivider></IonItemDivider>
      <IonListHeader>Q3. I want to change my personal information. Where can I change it?</IonListHeader>
      <IonListHeader>Please go to Settings tab. You can easily change your personal information even password.</IonListHeader>
      <IonItemDivider></IonItemDivider>
      </IonContent>
    </IonPage>
    );
  }
export default FAQ;
