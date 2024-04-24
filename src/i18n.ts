import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
        home: 'Home',
        bolid: 'Bolid',
        team: 'Team',
        competition: 'Competition',
        colab: 'Collaboration',
        contact: 'Contact',
    },
    bolid: {
      discover: "Discover the bolid",
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
    },  
    bolid: {
      discover: "Poznaj nasz bolid",
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
    }
  }
}

const i18n = createI18n({
  locale: 'pl',
  messages,
})

export default i18n