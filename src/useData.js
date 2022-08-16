import { useEffect, useState } from "react"

// const guysEventIds = [9548,11144,11145,11174,11173,11164, 11166,11172];
// const strandEventIds = [11214,11214, 11215, 11216, 11220, 11225, 11179, 11181, 11217, 11222];
// const freshersEventIds = [];

const UseData = () => {

    const [events, setEvents] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    function createDataArray(data) {
        const ar = [];
        for (const node in data) {
          ar.push(data[node]);
        }
        return ar;
      }

    async function fetchEvents(){
        setIsLoading(true);
        // FETCH DATA
        const dataurl = process.env.REACT_APP_DATA_URL;
        const dataResponse = await fetch(dataurl).catch(er => console.log(er));
        const dataResult = await dataResponse.json();
        setData(createDataArray(dataResult));
        // FETCH EVENTS
        const eventsurl = process.env.REACT_APP_EVENTS_URL;
        const evtsResponse = await fetch(eventsurl).catch(er => console.log(er));
        const evtsResults = await evtsResponse.json();
        if (evtsResults && evtsResults.length > 0 )setEvents(evtsResults);

        setIsLoading(false);
    }

    useEffect(() => {
        fetchEvents();
    }, [])


    function selectWristband(id){
        if (!data) return null
        return data.find(wristbandData => wristbandData.wristband_title === id)
    }

    function filterEvents(eventIdString){
        if (!eventIdString || !events) return [];
        const eventIds = eventIdString.split(',');
        return events.filter(evt => eventIds.find(eventId => +(eventId.trim()) === +evt.Id));
    }

    let guys = selectWristband('guys campus');
    let strand = selectWristband('strand campus');
    let freshers = selectWristband('freshers');
    

    return {
        isLoading,
        guysEvents: (guys && filterEvents(guys.event_ids)) || [],
        strandEvents: (strand && filterEvents(strand.event_ids)) || [],
        freshersEvents: (freshers && filterEvents(freshers.event_ids)) || [],
        strandData:strand,
        guysData: guys,
        freshersData: freshers
    }

};

export default UseData;