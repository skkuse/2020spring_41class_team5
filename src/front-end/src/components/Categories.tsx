import React, { useState, useRef } from "react";
import {
  IonLabel,
  IonRow,
  IonGrid,
  IonCol,
  IonCard,
  IonCardContent,
  IonInput,
} from "@ionic/react";

const Categories: React.FC = () => {
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const [calculatedBMI, setCalculatedBMI] = useState<number>();

  const calcBMI = () => {
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;

    if (!enteredHeight || !enteredWeight) {
      return;
    }

    const bmi = +enteredWeight / (+enteredHeight * +enteredHeight);
    setCalculatedBMI(bmi);

    console.log(bmi);
  };

  const resetInputs = () => {
    weightInputRef.current!.value = "";
    heightInputRef.current!.value = "";
  };

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonCard>
            <IonCardContent>
              <IonLabel>Put Your Weight</IonLabel>
              <IonInput ref={weightInputRef}></IonInput>
              <IonLabel>Put Your Height</IonLabel>
              <IonInput ref={heightInputRef}></IonInput>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Categories;
