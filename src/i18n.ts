import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
        home: 'Home',
        bolid: 'Bolide',
        team: 'Team',
        competition: 'Competition',
        colab: 'Collaboration',
        contact: 'Contact',
        predecessor: 'Predecessors',
    },
    bolid: {
      discover: "Meet our bolide",
      body: {
        title: "Lightweight bodywork",
        content: "Self-supporting construction made of carbon fibre based laminate, coated with low viscous friction varnish. In combination with a streamlined body shape, it provides minimum air resistance."
      },
      hydrogen: {
        title: "Hydrogen fuel cell",
        content: "The electric motor is powered by a hydrogen fuel cell - a modern and ecological source of energy with high efficiency."
      }, 
      motor: {
        title: "Induction motor",
        content: "It is distinguished by its recuperative braking ability, so that it does not lose stored energy during deceleration, but converts it into electrical energy."
      }
    },
    team: {
      team: "Team",
      zarzad: {
        title: "The Management Board",
        content: "As a result, \"Project Hydrive. We race for tomorrow\" is an initiative carried out by the Students' Designers' Scientific Association MechaniCAD , together with the leaders of individual sections, we make sure that the undertaken works go in the direction we all choose. Our primary task is to organize and systematize everything related to the project."
      },
      mechaniczna: {
        title: "Mechanical section",
        content: "In our ranks, we bring together people fascinated by creating hard reality. Our task is to design and construct the entire car. We deal with the whole process of creating key elements of the vehicle. From design, through manufacturing to assembly and service, all the components without which our HYDRIVE 1 could not drive."
      },
      analizy: {
        title: "Research and analysis section",
        content: "It is based on the idea of testing the vehicle in real conditions and optimizing it. Our tasks also include all kinds of analyses using MES, CFD, etc. environments and simulations of kinematics and dynamics of vehicle elements in CAD environments. All this is done so that HYDRIVE 1 can achieve the best possible results in competitions."
      },
      elektro: {
        title: "Electro section",
        content: "The electro section includes people who are not strangers to live devices. In addition to managing the electrical system in the vehicle, we deal with sensing, telemetry and telecommunications. Constant monitoring of the vehicle's condition is our department. Our team also develops IoT-like systems. All this to ensure that the communication and control of HYDRIVE 1 is at the highest level."
      },
      marketing: {
        title: "Marketing section",
        content: "We deal with everything connected with running a brand profile in social media - Facebook, Instagram, LinkedIn. Our tasks also include organizing and preparing the team for the events related to the HYDRIVE project in the walls of the AGH University of Science and Technology in Krakow and beyond. Moreover, we take care of the brand strategy of HYDRIVE project."
      },
      drivers: {
        title: "Drivers",
        content: "Our task is to drive the car in such a way as to get the best possible results at the competition. We take an active part in testing the vehicle in real conditions and in designing its equipment. This ensures that the HYDRIVE 1 is refined to the last detail. We are also responsible for representing the entire Shell Eco-marathon project."
      }
    },

  },
  pl: {
    nav: {
        home: 'Strona domowa',
        bolid: 'Bolid',
        team: 'Zespół',
        competition: 'Zawody',
        colab: 'Współpraca',
        contact: 'Kontakt',
        predecessor: 'Poprzednicy',
    },  
    bolid: {
      discover: "Poznaj nasz bolid",
      // TODO
    },
    team: {
      team: "Zespół",
      zarzad: {
        title: "Zarząd",
        content: "Chcielibyśmy przedstawić osoby, które są fundamentem naszego koła. Bez nich nie byłoby tego projektu, a ich wkład pracy w nasza działalność jest nieoceniony.",    
      },
      mechaniczna: {
        title: "Sekcja mechaniczna",
        content: "Do zadań jej członków należy zaprojektowanie oraz skonstruowanie naszego bolidu: karoserii, modułu przedniego, przekładni zębatej oraz wszystkich tych pozostałych większych i mniejszych części, bez których nasz HYDRIVE 1 nie mógłby jeździć.",  
      },
      analizy: {
        title: "Sekcja badań i analizy",
        content: "Do zadań tej sekcji należy wykonywanie testów pojazdu w warunkach rzeczywistych, interpretacja tych danych oraz ich analiza przy użyciu środowisk MES, CFD i innych, a także wyciąganie wniosków, przedstawienie wyników przeprowadzonych analiz dotyczących kształtu pojazdu, sposobu prowadzenia i innych aspektów bolidu oraz ich optymalizacja tak, aby HYDRIVE 1 mógł osiągać jak najlepsze wyniki w zawodach."
      },
      elektro: {
        title: "Sekcja elektro",
        content: "Zajmują się wszystkim co związane z prowadzeniem profilu marki w mediach społecznościowych - Facebook, Instagram, LinkedIn. Do ich licznych zadań należy również organizacja oraz przygotowanie nas do wydarzeń związanych z projektem HYDRIVE w murach Akademii Górniczo-Hutniczej w Krakowie, jak i poza nimi. Dodatkowo projektują również materiały promocyjne oraz prowadzą opiekę nad stroną wizualna całego projektu HYDRIVE."
      },
      marketing: {
        title: "Sekcja marketing",
        content: "Zajmują się wszystkim co związane z prowadzeniem profilu marki w mediach społecznościowych - Facebook, Instagram, LinkedIn. Do ich licznych zadań należy również organizacja oraz przygotowanie nas do wydarzeń związanych z projektem HYDRIVE w murach Akademii Górniczo-Hutniczej w Krakowie, jak i poza nimi. Dodatkowo projektują również materiały promocyjne oraz prowadzą opiekę nad stroną wizualna całego projektu HYDRIVE."
      },
      kierowcy: {
        title: "Kierowcy",
        conent: "Do ich zadań należy takie prowadzenie bolidu, aby uzyskać jak najlepsze wyniki na zawodach. Oczywiście biorą czynny udział przy testach pojazdu i projektowaniu jego wyposażenia. A ich najważniejszym zadaniem jest piękne reprezentowanie naszego koła na zawodach Shell Eco-marathon 😉"
      },
    },
    competition: {
      title: "Zawody",
      text1: "Shell Eco-marathon to jeden z najbardziej innowacyjnych konkursów dla młodych konstruktorów. Studenckie zespoły z całego świata stają przed wyzwaniem\
      zbudowania i przetestowania pojazdów możliwie najbardziej sprawnych pod względem energetycznym. Zwycięża drużynq, której pojazd może pokonać najdłuższy dystans na ekwiwalencie jednego litra paliwa lub jednej\
      kilowatogodziny [1 kWh]",
      text2: "Obecnie drużyny złożone z młodych inżynierów mają możliwość startu w dwóch aktegoriach - UrbanConcept oraz Prototype. Pojazdy rywalizujące w pierwszej z wymienionych muszą spełniać\
      wymogi uprawniające je do poruszania się w ruchu miejskim. Bolidy startujące w kategorii Prototype nie mają tego rodzaju ograniczeń, a ich głównym celem jest osiągnięcie maksymalnej wydajności, podczas gdy wygoda kierowcy najbardziejma większego znaczenia. \
      Dlatego też bolidy wyróżniają się aerodynamiczną formą oraz niską masą własną. Dodatkowo w każdej z kategorii jest odrębna klasyfikacja pojazdów uwzględniająca rodzaj wykorzystywanego napędu.\
      Nasz bolid zalicza się do aktegorii Prototype i tym samym pozwala nam na maksymalne przebadanie czynników wpływających na zużycie energii."
    },
    cooperation: {
      cooperation: "Współpraca",
      cooperationIntro: "Poniżej prezentujemy firmy, które zdecydowały się nam zaufać i wesprzeć realizowane przez nas przedsięwzięcie, a tym samym dołożyć swoją cegiełkę do ogólnoświatowego rozwoju technologii wytwarzania ekologicznej energii.",
      topSponsors: "Nasi główni sponsorzy",
      sponsors: "Sponsorzy pomocniczy",
      cooperationDescription: "Jesteśmy w pełni świadomi, że żaden pomysł czy projekt bez odpowiedniego wsparcia finansowego i niematerialnego nie ma szans na ciągły rozwój i udoskonalenie. Dlatego abyśmy mogli zrobić kolejny krok naprzód i nieprzerwanie rozwijać realizowany przez nas projekt, niezbędne jest nam odpowiednie wsparcie. Współpraca z nami - projektem nowoczesnego, a przede wszystkim ekologicznego pojazdu, wyróżniającego rok rocznie mianem projektu strategicznego AGH, podkreśla nowoczesność, innowacyjność i zaangażowanie naszej firmy partnerskiej. Jest to sposób na wyraźne pokazanie swoich mocnych stron, swojego zaangażownia w CSR i wyróżnienie się na rynku.",
      becomePartner: "Chcesz zostać naszym partnerem? Skontaktujmy się!",
      visitOurFb: "Odwiedź nasz Fb"
    },
    footer: {
      title: "Project Hydrive",
      address: "Kampus AGH, budynek B2, pok. 013",
      text: "Jeśli jesteś zainteresowany współpracą lub masz jakiś ciekawy pomysł, skontaktuj się z nami:",
    }
  }
}

const i18n = createI18n({
  locale: 'pl',
  messages,
})

export default i18n