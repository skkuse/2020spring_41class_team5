import axios from 'axios';
import React, { useState, useEffect } from 'react';
import  { useForm, Controller } from 'react-hook-form';
import "./MyPage.css";
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

export interface info {
  name: string;
  gender: string;
  address: string;
  age: number;
  height: number;
  weight: number;
  egg: boolean;
  milk: boolean;
  soybean: boolean;
  peanut: boolean;
  crab: boolean;
  shrimp: boolean;
  mackerel: boolean;
  apple: boolean;
  peach: boolean;
  kiwi: boolean;
}

let defaultInfo = {
  email: "",
  password: "",
  name: "",
  gender: "",
  address: "",
  age: "",
  height: "",
  weight: "",
  egg: false,
  milk: false,
  soybean: false,
  peanut: false,
  crab: false,
  shrimp: false,
  mackerel: false,
  apple: false,
  peach: false,
  kiwi: false
};

const MyPage :React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [info, setInfo] = useState<info>();
  const [checked, setChecked] = useState();

  const getUserInfo = (data: any) => {
    setLoading(true);
    //axios.get('http://127.0.0.1:8000/users/', {info})
  }

  const { control, register, handleSubmit, formState, watch, errors } = useForm({
    defaultValues: defaultInfo,
    mode: 'onChange'
  });

  const onModify = (data: any) => {
    alert(JSON.stringify(data, null, 2));
    setData(data)
    /*axios.post('http://localhost:8000/users/:userId', data)
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
        <form onSubmit={handleSubmit(onModify)} style={{}}>
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Name</IonLabel>
            <Controller
              as={IonInput}
              control={control}
              onChangeName="onIonChange"
              onChange={([selected]) => {
                console.log("Name", selected.detail.value);
                return selected.detail.value
              }}
              name="name"
              placeholder="Example> John Smith"
              ref = {register}
              rules={{
                required: true
              }}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Address</IonLabel>
            <Controller
              as={IonInput}
              control={control}
              onChangeName="onIonChange"
              onChange={([selected]) => {
                console.log("Address", selected.detail.value);
                return selected.detail.value
              }}
              name="address"
              ref = {register}
              placeholder="Example> 12345 Seoul, South Korea"
              rules={{
                required: true
              }}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Age</IonLabel>
            <Controller
              as={IonInput}
              control={control}
              onChangeName="onIonChange"
              onChange={([selected]) => {
                console.log("Age", selected.detail.value);
                return selected.detail.value
              }}
              name="age"
              ref = {register}
              placeholder="Example> 25"
              rules={{
                required: true
              }}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Height (cm)</IonLabel>
            <Controller
              as={IonInput}
              control={control}
              onChangeName="onIonChange"
              onChange={([selected]) => {
                console.log("Height", selected.detail.value);
                return selected.detail.value
              }}
              name="height"
              ref = {register}
              placeholder="Example> 180"
              rules={{
                required: true
              }}
            />
          </IonItem>
          
          <IonItem>
            <IonLabel position="stacked">Weight (kg)</IonLabel>
            <Controller
              as={IonInput}
              control={control}
              onChangeName="onIonChange"
              onChange={([selected]) => {
                console.log("Weight", selected.detail.value);
                return selected.detail.value
              }}
              name="weight"
              ref = {register}
              placeholder="Example> 80"
              rules={{
                required: true
              }}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Gender</IonLabel>
            <Controller
              as={
                <IonSelect>
                  <IonSelectOption value="male">Male</IonSelectOption>
                  <IonSelectOption value="female">Female</IonSelectOption>
                </IonSelect>
              }
              control={control}
              onChangeName="onIonChange"
              onChange={([selected]) => {
                console.log("Gender", selected.detail.value);
                return selected.detail.value
              }}
              name="gender"
              ref = {register}
              placeholder="Select"
              rules={{
                required: true
              }}
            />
          </IonItem>

          <IonItem>
            <IonLabel>Allergies</IonLabel>
            <IonList>
              <IonItem>
                <IonLabel position="fixed">Egg</IonLabel>
                <Controller
                  as={
                    <IonCheckbox value="egg" checked={checked} />
                  }
                  control={control}
                  onChangeName="onIonChange"
                  onChange={([selected]) => {
                    console.log("Allergy", selected.detail.checked);
                    return selected.detail.checked
                  }}
                  name="egg"
                  ref = {register}
                />
              </IonItem>

              <IonItem>
                <IonLabel position="fixed">Milk</IonLabel>
                <Controller
                  as={
                    <IonCheckbox value="milk" checked={checked} />
                  }
                  control={control}
                  onChangeName="onIonChange"
                  onChange={([selected]) => {
                    console.log("Allergy", selected.detail.checked);
                    return selected.detail.checked
                  }}
                  name="milk"
                  ref = {register}
                />
              </IonItem>

              <IonItem>
                <IonLabel position="fixed">Soybean</IonLabel>
                <Controller
                  as={
                    <IonCheckbox value="soybean" checked={checked} />
                  }
                  control={control}
                  onChangeName="onIonChange"
                  onChange={([selected]) => {
                    console.log("Allergy", selected.detail.checked);
                    return selected.detail.checked
                  }}
                  name="soybean"
                  ref = {register}
                />
              </IonItem>

              <IonItem>
                <IonLabel position="fixed">Peanut</IonLabel>
                <Controller
                  as={
                    <IonCheckbox value="peanut" checked={checked}/>
                  }
                  control={control}
                  onChangeName="onIonChange"
                  onChange={([selected]) => {
                    console.log("Allergy", selected.detail.checked);
                    return selected.detail.checked
                  }}
                  name="peanut"
                  ref = {register}
                />
              </IonItem>

              <IonItem>
                <IonLabel position="fixed">Crab</IonLabel>
                <Controller
                  as={
                    <IonCheckbox value="crab" checked={checked} />
                  }
                  control={control}
                  onChangeName="onIonChange"
                  onChange={([selected]) => {
                    console.log("Allergy", selected.detail.checked);
                    return selected.detail.checked
                  }}
                  name="crab"
                  ref = {register}
                />
              </IonItem>

              <IonItem>
                <IonLabel position="fixed">Shrimp</IonLabel>
                <Controller
                  as={
                    <IonCheckbox value="shrimp" checked={checked} />
                  }
                  control={control}
                  onChangeName="onIonChange"
                  onChange={([selected]) => {
                    console.log("Allergy", selected.detail.checked);
                    return selected.detail.checked
                  }}
                  name="shrimp"
                  ref = {register}
                />
              </IonItem>

              <IonItem>
                <IonLabel position="fixed">Mackerel</IonLabel>
                <Controller
                  as={
                    <IonCheckbox value="mackerel" checked={checked} />
                  }
                  control={control}
                  onChangeName="onIonChange"
                  onChange={([selected]) => {
                    console.log("Allergy", selected.detail.checked);
                    return selected.detail.checked
                  }}
                  name="mackerel"
                  ref = {register}
                />
              </IonItem>

              <IonItem>
                <IonLabel position="fixed">Apple</IonLabel>
                <Controller
                  as={
                    <IonCheckbox value="apple" checked={checked} />
                  }
                  control={control}
                  onChangeName="onIonChange"
                  onChange={([selected]) => {
                    console.log("Allergy", selected.detail.checked);
                    return selected.detail.checked
                  }}
                  name="apple"
                  ref = {register}
                />
              </IonItem>

              <IonItem>
                <IonLabel position="fixed">Peach</IonLabel>
                <Controller
                  as={
                    <IonCheckbox value="peach" checked={checked} />
                  }
                  control={control}
                  onChangeName="onIonChange"
                  onChange={([selected]) => {
                    console.log("Allergy", selected.detail.checked);
                    return selected.detail.checked
                  }}
                  name="peach"
                  ref = {register}
                />
              </IonItem>

              <IonItem>
                <IonLabel position="fixed">Kiwi</IonLabel>
                <Controller
                  as={
                    <IonCheckbox value="kiwi" checked={checked} />
                  }
                  control={control}
                  onChangeName="onIonChange"
                  onChange={([selected]) => {
                    console.log("Allergy", selected.detail.checked);
                    return selected.detail.checked
                  }}
                  name="kiwi"
                  ref = {register}
                />
              </IonItem>
            </IonList>
          </IonItem>
          
          <IonRow>
            <IonCol></IonCol>
            <IonCol>
              <IonButton type="submit">modify</IonButton>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonList>
        </form>
      </IonContent>
    </IonPage>
    );
  }
export default MyPage;