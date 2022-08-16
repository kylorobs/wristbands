import { useEffect } from "react";

const { Card } = require("flowbite-react")

const Landing = ( { scrollToSection, freshers, guys, strand }) => {

    useEffect(() => {
        document.addEventListener('emitClick', (e) => {
            scrollToSection(e.detail)
        })
    }, [])

   return ( <section className="min-h-screen bg-rose-400 flex flex-col justify-center content-center p-8 xs:pt-16 md:pt-8">
    <div className='m-auto xl:w-9/12 max-w-8xl 2xl:w-7/12'>
        <div className=' bg-white p-8 mb-8'>
            <div>
                <h1 className="text-6xl p-1 mb-8" style={{padding: 0, margin:0, color: '#605ba3', fontWeight: 800}}>Welcome Wristbands</h1>
                <p className="font-normal text-gray-700 dark:text-gray-400 m-4">From campus specific wristbands, to wristbands which get you exclusive entry into some of London's greatest nightclubs, there's something for you in this year's <a href="/welcome">Welcome 2022</a></p>
            </div>
        </div>

        <div className="grid gap-0.5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-auto">
            <div className="sm:max-w-lg m-4 ml-0 h-fit">
                <Card imgSrc={(guys && guys.wristband_banner) || "https://res.cloudinary.com/kclsu-media/image/upload/v1/temporary/block_t1vtxm"} className="h-screen">
                <h2 style={{color: '#605ba3'}} className="text-4xl font-bold tracking-tight  dark:text-white">
                    Guys' Campus Wristband
                </h2>   
                <ul className="ml-8 text-left text-2xl">
                <li className="arrowBefore" >Milkshake Party</li>
                <li className="arrowBefore" >Freshsers Breakfast Meet and Greet</li>
                <li className="arrowBefore">Freshers Burgers and Board Games</li>
                <li className="mt-4 font-bold    ">... and much more!</li>
                </ul>
                <kclsu-button purple center emitid="guys">  Get yours now</kclsu-button>
                </Card>
            </div>

            <div className="sm:max-w-lg m-4">
            <Card imgSrc={(strand && strand.wristband_banner) || "https://res.cloudinary.com/kclsu-media/image/upload/v1/temporary/block_t1vtxm"}>

                <h2 style={{color: '#605ba3'}} className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Strand Campus Wristband
                </h2>
                <ul className="ml-8 text-left text-2xl">
                    <li className="arrowBefore" >Moving In Party</li>
                    <li className="arrowBefore" >Pizza and Proseccon Party</li>
                    <li className="arrowBefore">Freshers' Breakfast</li>
                    <li className="mt-4 font-bold    ">... and much more!</li>
                </ul>

                <kclsu-button purple center emitid="strand">  Get yours now</kclsu-button>
            </Card>
            </div>

            <div className="sm:max-w-lg m-4 mr-0">
            <Card imgSrc={ (freshers && freshers.wristband_banner) || "https://res.cloudinary.com/kclsu-media/image/upload/v1/temporary/block_t1vtxm"}>
                <h2 style={{color: '#605ba3'}} className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Freshers Wristband
                </h2>
                <ul className="ml-8 text-left text-2xl">
                <li className="arrowBefore" >Nightclubs and venues across London</li>
                    <li className="arrowBefore" >Four of the biggest clubs nights</li>
                    <li className="arrowBefore">Discounted entry</li>
                    <li className="mt-4 font-bold    ">... and much more!</li>
                </ul>
                <kclsu-button purple center emitid="freshers">  Get yours now</kclsu-button>
            </Card>
            </div>
            </div>
            </div>
  </section>
)
}

export default Landing;