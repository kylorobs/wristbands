import { useRef } from "react";
import LoadingOutline from "./LoadingOutline";


const Section = ({ color, heading, events, children, isLoading, productUrl }) => {

    const vipEvents = useRef([11164, 11172]);

    function createTime(utcTime) {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = new Date(utcTime);
        let day = date.getDate();
        let year = date.getFullYear();
        let month = months[date.getMonth()];
        return `${day} ${month} ${year}`
    }

    function createLabelCard(evt, isVip){

        return (
            <label-card
                link={evt.Url}
                cardtitle={evt.Title}
                style={{margin: "0.5em", boxShadow: "0.5px 3px 5px 0 rgba(0,0,0,.15)"}}
                text={createTime(evt.StartDate)}
                image={evt.ImageUrl}
           
            ></label-card>
        );
    }

    return (
    <section style={{background: color}} className="flex min-h-screen flex-col justify-center content-center p-8">
        <div className=' xl:w-5/6 2xl:w-4/6 m-auto'>
            <div className=' bg-white p-8 mb-8' style={{boxShadow: "0.5px 3px 5px 0 rgba(0,0,0,.15)"}}>
                <div>
                    <h2 className="text-6xl p-1 mb-8" style={{padding: 0, color: '#605ba3', fontWeight: 800}}>{heading}</h2>
                    <p className="font-normal text-gray-700 dark:text-gray-400 m-4">{children}</p>
                    { productUrl ? <kclsu-button link={productUrl} purple center>Buy Your Wristband </kclsu-button> : <p className="bg-rose-500 text-white w-fit pl-4 pr-4 m-auto"> Soon to be released!</p>}
                </div>
            </div>

            <div className="grid gap-0.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto">
                {events && events.map(evt => createLabelCard(evt, vipEvents.current.find(vipId => +evt.Id === vipId)))}
            </div>
            {isLoading &&( 
                    <div className="flex w-3/5 m-auto mt-8 justify-center flex-col content-center">
                        <div className="grid gap-4 grid-cols-2">
                        <LoadingOutline />
                        <LoadingOutline />
                        <LoadingOutline />
                        <LoadingOutline />
                        </div>
                    </div>
            )}
            {events.length < 1 && !isLoading && ( 
                    <div className="flex w-3/5 m-auto mt-8 justify-center flex-col content-center">
                        <div className="grid gap-4 grid-cols-2">
                        <LoadingOutline />
                        <LoadingOutline />
                        <LoadingOutline />
                        <LoadingOutline />
                        </div>
                        {<h3 className="text-white text-5xl m-8">Details coming soon!</h3>}
                    </div>
            )}
        </div>
      </section>
    )
}

export default Section;