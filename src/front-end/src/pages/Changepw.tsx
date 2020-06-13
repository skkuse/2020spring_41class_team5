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
  } from '@ionic/react';
import './ChangePW.css'

export interface auth {
  email: string;
  password: string;
  password_check: string;
}

let defaultValues = {
  email: "",
  password: "",
  password_check: ""
};

const ChangePW :React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [auth, setAuth] = useState(null);
  const [checked, setChecked] = useState();

  const getUserInfo = (data: any) => {
    setLoading(true);
    //axios.get('http://127.0.0.1:8000/users/')
  }

  const { control, register, handleSubmit, formState, watch, errors } = useForm({
    defaultValues: defaultValues,
    mode: 'onChange'
  });

  const onChange = (data: any) => {
    alert(JSON.stringify(data, null, 2));
    setData(data)
    /*axios.post('http://localhost:8000/users/', data)
    .then((res) => {
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    })*/
  }

/*  
  useEffect(() => {
    setLoading(true);
    axios({
      method:"GET",
      url: "http://localhost:8000/users/:userId"
    }).then((res) => {
      setInfo(res.data);
      setLoading(false);
    });
  }, [setInfo]);
*/
    return (
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form onSubmit={handleSubmit(onChange)}>
        <IonList>
        <IonItem>
          <IonLabel position="stacked">Email</IonLabel>
          <Controller
            as={IonInput}
            control={control}
            onChangeName="onIonChange"
            onChange={([selected]) => {
              console.log("Email", selected.detail.value);
              return selected.detail.value
            }}
            name="email"
            placeholder="Example> abc@google.com"
            ref = {register}
            rules={{
              required: true
            }}
            disabled={true}
          />
        </IonItem>
        
        <IonItem>
          <IonLabel position="stacked" >Password</IonLabel>
          <Controller
            as={IonInput}
            control={control}
            onChangeName="onIonChange"
            onChange={([selected]) => {
              console.log("Password", selected.detail.value);
              return selected.detail.value
            }}
            name="password"
            placeholder="Example> abcdef"
            ref = {register}
            rules = {{
              required: "You must specify a password",
              minLength: {
                value: 4,
                message: "Password must have at least 4 characters"
              }
            }}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Password Check</IonLabel>
          <Controller
            as={IonInput}
            control={control}
            onChangeName="onIonChange"
            onChange={([selected]) => {
              console.log("Password Check", selected.detail.value);
              return selected.detail.value
            }}
            name="password_check"
            placeholder="Example> abcdef"
            ref = {register}
            rules = {{
              validate: (value) => value === watch('password') || "Passwords should match"
            }}
          />
          {errors.password_check && <p>{errors.password_check.message}</p>}
        </IonItem>
        <IonRow>
          <IonCol></IonCol>
          <IonCol>
            <IonButton type="submit">change</IonButton>
          </IonCol>
          <IonCol></IonCol>
        </IonRow>
        </IonList>
        </form>
      </IonContent>
    </IonPage>
    );
  }
export default ChangePW;