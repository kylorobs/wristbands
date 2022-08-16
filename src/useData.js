import { useEffect, useState } from "react"



const guysEventIds = [9548,11144,11145,11174,11173,11164, 11166,11172];
const strandEventIds = [11214,11214, 11215, 11216, 11220, 11225, 11179, 11181, 11217, 11222];
const freshersEventIds = [];

const UseData = () => {

    const [events, setEvents] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        var today = new Date();
        const eventsurl = `https://www.kclsu.org/svc/feeds/events/6013?subtree=true&types=welcomeFeatured&from=${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
        fetch(eventsurl)
        .then(res => res.json())
        .then(results => {
            if (!results || results.length < 1) return;
            console.log(results)
            setEvents(results);
            setIsLoading(false);
        })
        .catch(error => {
            setIsLoading(false);
            console.log("error - failed to fetch and append events: " + error)
        });

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
        isLoading,
        guysEvents,
        strandEvents,
        freshersEvents
    }

};

export default UseData;