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
      // TODO
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
    }
  }
}

const i18n = createI18n({
  locale: 'pl',
  messages,
})

export default i18n