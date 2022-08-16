const { Card } = require("flowbite-react")

const Landing = () => (
    <section className="min-h-screen bg-rose-400 flex flex-col justify-center content-center p-8">
    <div className='m-auto 2xl:w-4/6'>
        <div className=' bg-white p-8 mb-8'>
            <div>
                <h1 className="text-6xl p-1" style={{padding: 0, margin: 0, color: '#605ba3'}}>Welcome Wristbands</h1>
                <p className="font-normal text-gray-700 dark:text-gray-400 m-4">
                            Here are the biggest enterprise technology acquisitions of 2021 so far
                            </p>
            </div>
        </div>

        <div className="grid gap-0.5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-auto">
            <div className="sm:max-w-lg m-4 ml-0 h-fit">
                <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg" className="h-screen">
                <h2 style={{color: 'red'}} className="text-4xl font-bold tracking-tight  dark:text-white">
                    Guys' Campus Wristband
                </h2>
                <ul className="text-left text-2xl">
                <li>3x events</li>
                <li>Freshser's campus</li>
                <li>wz Aufhor</li>
                <li>...and so much more</li>
                </ul>
                <kclsu-button center>  Get yours now</kclsu-button>
                </Card>
            </div>

            <div className="sm:max-w-lg m-4">
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">

                <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Strand Campus Wristband
                </h2>
                <ul className="text-left text-2xl">
                <li>3x events</li>
                <li>Freshser's campus</li>
                <li>wz Aufhor</li>
                <li>...and so much more</li>
                </ul>

                <kclsu-button center>  Get yours now</kclsu-button>
            </Card>
            </div>

            <div className="sm:max-w-lg m-4 mr-0">
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Freshers Wristband
                </h2>
                <ul className="text-left text-2xl">
                <li>3x events</li>
                <li>Freshser's campus</li>
                <li>wz Aufhor</li>
                <li>...and so much more</li>
                </ul>
                <kclsu-button center>  Get yours now</kclsu-button>
            </Card>
            </div>
            </div>
            </div>
  </section>
);

export default Landing;