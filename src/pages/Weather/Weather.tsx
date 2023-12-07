import { IonButton, IonButtons, IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { Geolocation } from '@capacitor/geolocation';
import { useEffect, useState } from 'react';
import { refreshOutline } from 'ionicons/icons';
import { CurrentWeather } from '../../components/CurrentWeather/CurrentWeather';
import { SkeletonDashboard } from '../../components/SkeletonDashboard/SkeletonDashboard';

const Weather = () => {
  const [search, setSearch] = useState("");
  const [currentWeather, setCurrentWeather] = useState(false);

  const performSearch = async () => {
    getSearchedAddress(search);
  }

  const getSearchedAddress = async (city: any) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=f93eb660b2424258bf5155016210712&q=${city}&aqi=no`);
    const data = await response.json();
    if (data && data.current && data.location) {
      setCurrentWeather(data);
    }
  }

  useEffect(() => {
    getCurrentPosition();
  }, []);

  const getCurrentPosition = async () => {
    setCurrentWeather(false);
    const coordinates = await Geolocation.getCurrentPosition();
    getAddress(coordinates.coords);
  }

  const getAddress = async (coords: any) => {
    const query = `${coords.latitude},${coords.longitude}`;
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=f93eb660b2424258bf5155016210712&q=${query}`);
    const data = await response.json();
    setCurrentWeather(data);
  }
console.log("helllo",search)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Weather</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => getCurrentPosition()}>
              <IonIcon icon={refreshOutline} color="primary" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonRow className="ion-justify-content-center ion-margin-top ion-align-items-center">
          <IonCol size="8">
            <IonSearchbar placeholder="eg: delhi" animated value={search} onIonInput={(e: any) => setSearch(e.target.value)} />
          </IonCol>

          <IonCol size="4">
            <IonButton expand="block" className="" onClick={performSearch}>Search</IonButton>
          </IonCol>
        </IonRow>


        <div style={{ marginTop: "-10px" }}>
          {currentWeather ? <CurrentWeather currentWeather={currentWeather} /> : <SkeletonDashboard />}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Weather;
