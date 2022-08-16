
import { useEffect, useRef } from "react";
import LoadingOutline from "./LoadingOutline";


const Section = ({ color, heading, events, children, isLoading, wristband, data}) => {

    // const vipEvents = useRef([11164, 11172]);
    const sectionEl = useRef(null);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search)
        const term = queryParams.get("wristband");
        if (term === wristband){
            sectionEl.current.scrollIntoView({behavior: "smooth", inline: "nearest"})
        }
    }, [wristband])

    function createTime(utcTime) {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = new Date(utcTime);
        let day = date.getDate();
        let year = date.getFullYear();
        let month = months[date.getMonth()];
        return `${day} ${month} ${year}`
    }

    function createLabelCard(evt){

        const vipEvents = data && data.vip_ids.length > 0 && data.vip_ids.split(',');
        const isVip = vipEvents && vipEvents.find(vipId => +evt.Id === +(vipId.trim()));
        console.log({vipEvents, isVip})
        return (
            
            <label-card
                link={evt.Url}
                cardtitle={evt.Title}
                style={{margin: "0.5em", boxShadow: "0.5px 3px 5px 0 rgba(0,0,0,.15)", position: 'relative'}}
                text={createTime(evt.StartDate)}
                image={evt.ImageUrl}
                data-vip={isVip ? 'true' : 'false'}
            ></label-card>

        );
    }

    console.log(data)

    return (
    <section ref={sectionEl} style={{background: color}} className="flex min-h-screen flex-col justify-center content-center p-8">
        <div className='xl:w-5/6 2xl:w-4/6 m-auto'>
            <div className=' bg-white p-8 mb-8' style={{boxShadow: "0.5px 3px 5px 0 rgba(0,0,0,.15)"}}>
                <div>
                    <h2 className="text-6xl p-1 mb-8" style={{padding: 0, color: '#605ba3', fontWeight: 800}}>{heading}</h2>
                    <p className="text-left md:text-center font-normal  text-gray-700 dark:text-gray-400 m-4" style={{fontSize: 'initial'}}>{children}</p>
                    { data && data.product_url ? <kclsu-button link={data.product_url} newtab purple center>Buy Your Wristband </kclsu-button> 
                    :  data && data.sold_out === 'true' ? <p className="bg-rose-500 text-white w-fit pl-4 pr-4 m-auto"> This wristband is sold out!</p>
                    : <p className="bg-rose-500 text-white w-fit pl-4 pr-4 m-auto"> Soon to be released!</p>}
                </div>
            </div>

            <div className="grid gap-0.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto">
                {events && events.map(evt => createLabelCard(evt))}
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