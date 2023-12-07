import { IonCard, IonCardContent, IonGrid, IonRow, IonText, IonCardTitle, IonCol } from "@ionic/react";
import { WeatherProperty } from "../WeatherProperty/WeatherProperty";

export const CurrentWeather = ({ currentWeather }: any) => {
  console.log("current", currentWeather)
  return (<IonGrid>
    <IonCard>
      <IonCardContent className="ion-text-center">

        <IonText color="primary">
          <h1>{currentWeather?.location?.name},
            <span style={{ color: "gray" }}>
              {currentWeather.location.region},
            </span>
            <span style={{ color: "gray" }}>{currentWeather.location.country}
            </span>
          </h1>
        </IonText>

        <div className="ion-margin-top">
          <img alt="condition" src={currentWeather.current.condition.icon.replace("//", "https://")} />

          <IonText color="dark">
            <h1 style={{ fontWeight: "bold" }}>{currentWeather.current.condition.text}</h1>
          </IonText>

          <IonText color="medium">
            <p>{new Date(currentWeather.location.localtime).toDateString()}</p>
            <p>{new Date(currentWeather.location.localtime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
          </IonText>
        </div>

        <IonCardTitle style={{ fontSize: "3rem" }} className="ion-margin-top">{currentWeather.current.temp_c}&#8451;</IonCardTitle>

        <IonGrid className="ion-margin-top">
          <IonRow >
            <IonCol size="6" >
              <IonCard style={{ height: "80%" }}>
                <WeatherProperty type="wind" currentWeather={currentWeather} />
              </IonCard>
            </IonCol>

            <IonCol size="6" >
              <IonCard style={{ height: "80%" }}>
                <WeatherProperty type="feelsLike" currentWeather={currentWeather} />
              </IonCard>
            </IonCol>

            <IonCol size="6">
              <IonCard style={{ height: "80%" }}>
                <WeatherProperty type="indexUV" currentWeather={currentWeather} />
              </IonCard>
            </IonCol>

            <IonCol size="6">
              <IonCard style={{ height: "80%" }}>
                <WeatherProperty type="pressure" currentWeather={currentWeather} />
              </IonCard>
            </IonCol>
          </IonRow>

        </IonGrid>
      </IonCardContent>
    </IonCard>
  </IonGrid>
  );
}