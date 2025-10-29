import { useMemo } from "react";

import first_1 from "./assets/images/first-anniversary/1st_1.jpg";
import first_2 from "./assets/images/first-anniversary/1st_2.jpg";
import first_3 from "./assets/images/first-anniversary/1st_3.jpg";
import first_4 from "./assets/images/first-anniversary/1st_4.jpg";
import first_5 from "./assets/images/first-anniversary/1st_5.jpg";
import first_6 from "./assets/images/first-anniversary/1st_6.jpg";
import first_7 from "./assets/images/first-anniversary/1st_7.jpg";
import first_8 from "./assets/images/first-anniversary/1st_8.jpg";
import first_9 from "./assets/images/first-anniversary/1st_9.jpg";
import first_10 from "./assets/images/first-anniversary/1st_10.jpg";
import first_11 from "./assets/images/first-anniversary/1st_11.jpg";
import first_12 from "./assets/images/first-anniversary/1st_12.jpg";
import first_13 from "./assets/images/first-anniversary/1st_13.jpg";
import first_14 from "./assets/images/first-anniversary/1st_14.jpg";
import first_15 from "./assets/images/first-anniversary/1st_15.jpg";
import first_16 from "./assets/images/first-anniversary/1st_16.jpg";
import first_17 from "./assets/images/first-anniversary/1st_17.jpg";
import first_18 from "./assets/images/first-anniversary/1st_18.jpg";
import first_19 from "./assets/images/first-anniversary/1st_19.jpg";
import first_20 from "./assets/images/first-anniversary/1st_20.jpg";
import first_21 from "./assets/images/first-anniversary/1st_21.jpg";
import first_22 from "./assets/images/first-anniversary/1st_22.jpg";
import first_23 from "./assets/images/first-anniversary/1st_23.jpg";

import second_1 from "./assets/images/second-anniversary/2nd_1.jpg";
import second_2 from "./assets/images/second-anniversary/2nd_2.jpg";
import second_3 from "./assets/images/second-anniversary/2nd_3.jpg";
import second_4 from "./assets/images/second-anniversary/2nd_4.jpg";
import second_5 from "./assets/images/second-anniversary/2nd_5.jpg";
import second_6 from "./assets/images/second-anniversary/2nd_6.jpg";
import second_7 from "./assets/images/second-anniversary/2nd_7.jpg";
import second_8 from "./assets/images/second-anniversary/2nd_8.jpg";
import second_9 from "./assets/images/second-anniversary/2nd_9.jpg";
import second_10 from "./assets/images/second-anniversary/2nd_10.jpg";
import second_11 from "./assets/images/second-anniversary/2nd_11.jpg";
import second_12 from "./assets/images/second-anniversary/2nd_12.jpg";

import { AnniversaryGallery } from "./components/anniversary-gallery/AnniversaryGallery";

function App() {
  const firstAnnivGallery = useMemo(
    () => [
      { src: first_1, description: "First date, Jollibee sa maranding #1" },
      { src: first_2, description: "Ni attack sa maigo ang asay sa lala kay bday ni te dels." },
      { src: first_3, description: "Shempre kay nasugdan nman ug jollibee segundahan dayon." },
      { src: first_4, description: "Another pakals napud kay di mahutdag event." },
      { src: first_5, description: "Nakiglaag sa hapitanan beach kay ganahan magpadagat, sakay dayon ug banana boat nga buwis buhay." },
      { src: first_6, description: "Laag sa lala nga naka SR Polo kay proud alumni. #LalaSeries#1" },
      { src: first_7, description: "Videoke sa maigo payabagayg tingog." },
      { src: first_8, description: "Hungitan unta nako ang baby pero mag shy2 man." },
      { src: first_9, description: "Laag sa lala pra quality time. #LalaSeries#2" },
      { src: first_10, description: "Jollibee sa maranding #2." },
      { src: first_11, description: "Nangukay sa taj, goods rapud biya kay nakapalit ug mga nindot na gatoson." },
      { src: first_12, description: "Ge ubanan ang babygirl sa kapatagan kay exam sa subject pra masters." },
      { src: first_13, description: "Another kapatagan laag kay naa silay event sa school nga way hinungdan." },
      { src: first_14, description: "Namakals steeltown iligan." },
      { src: first_15, description: "Nag fiktyor kay samtang fresh pa ang dagway wla pa na haggard. #LalaSeries#3." },
      { src: first_16, description: "Nangaligo sa kalilangan." },
      { src: first_17, description: "LalaSeries#4." },
      { src: first_18, description: "Nanakay ug kayak sa kalilangan nya molugdang kay di pwede duha." },
      { src: first_19, description: "Sightseeing sa pasita uban ang shs peeps." },
      { src: first_20, description: "LalaSeries#5." },
      { src: first_21, description: "Tabi nga dala kiat sa kapatagan." },
      { src: first_22, description: "Surprise arrival sakong birthday." },
      { src: first_23, description: "Pa flowers for my baby." },
    ],
    []
  );

  const secondAnnivGallery = useMemo(
    () => [
      { src: second_1, description: "Nanlaag ug dala ligo sa hermit's cove." },
      { src: second_2, description: "Gifts and flowers pra sa birthday girl." },
      { src: second_3, description: "Namakals sa badian." },
      { src: second_4, description: "December avenue concert." },
      { src: second_5, description: "Pangaligo sa basdaku nga grabe ka tin aw sa tubig." },
      { src: second_6, description: "Nag casino sa nustar dayn niuli nga pildihan." },
      { src: second_7, description: "Ate cristine and kuya ryan's wedding." },
      { src: second_8, description: "Kawasan falls, worthit ra ang hiking." },
      { src: second_9, description: "Nanlaag sa TOPS kay nindot ug view samot nag gabii." },
      { src: second_10, description: "Fiktyor sa barko pa cebu." },
      { src: second_11, description: "After pangaligo sa azure staycation." },
      { src: second_12, description: "Pa picture sa sky-garden/rooftop." },
    ],
    []
  );
  return (
    <div className="main-container">
      <AnniversaryGallery
        srcImages={firstAnnivGallery}
        description={"First Anniversary"}
      />
      <AnniversaryGallery
        srcImages={secondAnnivGallery}
        description={"Second Anniversary"}
      />
    </div>
  );
}

export default App;
