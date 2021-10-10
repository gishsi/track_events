import { useState, useEffect } from 'react';
import Map from './Map';
import Menu from './Menu/Menu';
import Loading from './Loading/Loading';
import Footer from './Footer/Footer';
import Info from './Info/Info';
const NASA_EVENTS_API = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events';
const NASA_CATEGORIES_API =
  'https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories';
function App() {
  const [loading, setLoading] = useState(false);
  const [eventsData, setEventsData] = useState([]);
  // id of the event, default 8 for wildfires
  const [eventsId, setEventsId] = useState(8);
  const [categoriesList, setCategoriesList] = useState([]);
  const [info, setInfo] = useState({latitude: '', longitude:"", description:'', eventTitle:''});
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(NASA_EVENTS_API);
      const { events } = await res.json();
      setEventsData(events);
      setLoading(false);
    };
    const fetchDescription = async () => {
      const res = await fetch(NASA_CATEGORIES_API);
      const { categories } = await res.json();
      setCategoriesList(categories);
    };
    fetchDescription();
    fetchEvents();
  }, []);

  const onChooseEvent = (id) => {
    setEventsId(id);
  };

  const onShowInfoAction = async (lat, lng,des,title) => {
    await setInfo(
      {latitude: lat, longitude:lng, description:des, eventTitle:title}
      )
  }

  return (
    <div className='App'>
      {loading ? (
        <Loading />
      ) : (
        <Map
          eventData={eventsData}
          eventID={eventsId}
          categories={categoriesList}
          onShowInfo={onShowInfoAction}
        />
      )}
      {!loading && <Menu chooseEvent={onChooseEvent} categories={categoriesList} />}
      {!loading && <Footer />}
      {!loading && info.latitude!=='' && <Info lat={info.latitude} lng={info.longitude} description={info.description} title={info.eventTitle} />}
    </div>
  );
}

export default App;
