import { useEffect, useState } from "react"



const guysEventIds = [9548,11144,11145,11174,11173,11164, 11166,11172];
const strandEventIds = [11214,11214, 11215, 11216, 11220, 11225, 11179, 11181, 11217, 11222];
const freshersEventIds = [];

const UseData = () => {

    const [events, setEvents] = useState(null);
    const [dataLoading, setDataLoading] = useState(false);
    const [eventsLoading, setEventsLoading] = useState(false);
    const [data, setData] = useState(null);

    function createDataArray(data) {
        const ar = [];
        for (const node in data) {
          ar.push(data[node]);
        }
        return ar;
      }

    async function fetchEvents(){
        setEventsLoading(true);
        setDataLoading(true);
        const eventsurl = process.env.REACT_APP_EVENTS_URL;
        const dataurl = process.env.REACT_APP_DATA_URL;
        const evtsResponse = await fetch(eventsurl).catch(er => console.log(er));
        const evtsResults = await evtsResponse.json();
        if (evtsResults && evtsResults.length > 0 )setEvents(evtsResults);
        setEventsLoading(false);
        const dataResponse = await fetch(dataurl).catch(er => console.log(er));
        const dataResult = await dataResponse.json();
        setDataLoading(false);
        setData(createDataArray(dataResult));
    }

    useEffect(() => {
        fetchEvents();
    }, [])

    let guysEvents = [];
    let strandEvents = [];
    let freshersEvents = [];
    
    if (events){
        guysEvents = events.filter(evt => guysEventIds.find(guysId => guysId === +evt.Id));
        strandEvents = events.filter(evt => strandEventIds.find(strandId => strandId === +evt.Id));
        freshersEvents = events.filter(evt => freshersEventIds.find(freshersId => freshersId === +evt.Id));
    }

    return {
        dataLoading,
        eventsLoading,
        guysEvents,
        strandEvents,
        freshersEvents,
        strandData: (data && data.find(wristbandData => wristbandData.wristband_title ==='strand')) || null,
        guysData: (data && data.find(wristbandData => wristbandData.wristband_title ==='guys') )|| null,
        freshersData: (data && data.find(wristbandData => wristbandData.wristband_title ==='freshers')) || null
    }

};

export default UseData;