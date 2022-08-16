
import React, {  useState } from 'react';
import './App.css';
import Landing from './Landing';
import Section from './Section';
import useData from './useData';


function App() {

  const { guysEvents, strandEvents, freshersEvents, isLoading, guysData, strandData, freshersData} = useData();
  const [currSection, setCurrSection] = useState(null);

  const scrollToSection = (wristbandSection) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("wristband", wristbandSection);
    window.location.search = searchParams.toString();
    setCurrSection(wristbandSection);
  }

  console.log({currSection, guysEvents, strandEvents, freshersEvents, guysData, strandData, freshersData});


  return (
    <div className="App">
      <Landing scrollToSection={scrollToSection} guys={guysData} strand={strandData} freshers={freshersData} />
      <Section wristband="guys" data={guysData} isLoading={isLoading} color="rgb(96, 91, 163)" heading="Guy's Campus Wristband" events={guysEvents}>
        Guy's Campus sits next door to London Bridge and Guy's Hospital - nestled in the heart of London. This Wristband will get you into 8+ events and save you over £60 on tickets. Make sure you don't miss out on the iconic Welcome events such as the Moving in Ice Breaker or the Milkshake Party.
      </Section>
      <Section wristband="strand" data={strandData} isLoading={isLoading} color="rgb(245, 160, 0)" heading="Strand Campus Campus Wristband" events={strandEvents}>
        The Strand Campus Wristband will get you into eight events on the campus located a stone's throw north of the Thames. Don't miss out on your chance to celebrate your arrival at University in the Vault bar or enjoy discounts in the Student cafe: <a href="/venues/theshack" target="_blank">The Shack</a>. The Strand Campus wristband is the ideal way to make the most of your first few weeks on campus.
      </Section>
      <Section wristband="freshers" data={freshersData} isLoading={isLoading} color="rgb(237, 124, 121)" heading="Freshers Campus Wristband" events={freshersEvents}>
        Join us with a wristband that will get you into the most iconic and well-known nightclubs and venues across London. Get outside of your comfort zone and truly make the most of London's thriving nightlife by picking up the Freshers' Wristband for discounted entry to four of the biggest club nights in London! 
      </Section>
    </div>
  );
}

export default App;
