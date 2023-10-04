const otazky = [
    {
      questionText: "Jaké je hlavní města Francie?",
      answers: [
        { answerText: "Paříž", isCorrect: true },
        { answerText: "Londýn", isCorrect: false },
        { answerText: "Berlín", isCorrect: false },
        { answerText: "Madrid", isCorrect: false },
      ],
    },
    {
      questionText: "Kolik je 2 + 2?",
      answers: [
        { answerText: "3", isCorrect: false },
        { answerText: "4", isCorrect: true },
        { answerText: "5", isCorrect: false },
        { answerText: "6", isCorrect: false },
      ],
    },
    {
        questionText: "Kdo napsal knihu 'Válka světů'?",
      answers: [
        { answerText: "Jules Verne", isCorrect: false },
        { answerText: "H.G. Wells", isCorrect: true },
        { answerText: "Leo Tolstoj", isCorrect: false },
        { answerText: "George Orwell", isCorrect: false },
      ],
    },
    {
        questionText: "Jak se jmenuje nejrozšířenější programovací jazyk na světě?",
        answers: [
          { answerText: "JavaScript", isCorrect: true },
          { answerText: "Python", isCorrect: false },
          { answerText: "Java", isCorrect: false },
          { answerText: "C++", isCorrect: false },
        ],
      },
      {
        questionText: "Které zvíře je známé pro svou oddanost člověku?",
        answers: [
          { answerText: "Kočka", isCorrect: false },
          { answerText: "Pes", isCorrect: true },
          { answerText: "Koza", isCorrect: false },
          { answerText: "Koala", isCorrect: false },
        ],
      },
      {
        questionText: "Co je operační systém Linux?",
        answers: [
          { answerText: "Herní konzole", isCorrect: false },
          { answerText: "Mobilní aplikace", isCorrect: false },
          { answerText: "Operační systém", isCorrect: true },
          { answerText: "Webový prohlížeč", isCorrect: false },
        ],
      },
      {
        questionText: "Který automobilový výrobce vyrábí model Mustang?",
        answers: [
          { answerText: "Ford", isCorrect: true },
          { answerText: "Chevrolet", isCorrect: false },
          { answerText: "Toyota", isCorrect: false },
          { answerText: "Honda", isCorrect: false },
        ],
      },
      {
        questionText: "Který programovací jazyk používáme pro tvorbu webových stránek?",
        answers: [
          { answerText: "Python", isCorrect: false },
          { answerText: "Ruby", isCorrect: false },
          { answerText: "HTML/CSS", isCorrect: true },
          { answerText: "C#", isCorrect: false },
        ],
      },
      {
        questionText: "Jaký je nejmenší plemeno psa?",
        answers: [
          { answerText: "Čivava", isCorrect: true },
          { answerText: "Jorkšírský teriér", isCorrect: false },
          { answerText: "Bišon Frise", isCorrect: false },
          { answerText: "Maltézský psík", isCorrect: false },
        ],
      },
      {
        questionText: "Jaký je největší plemeno psa?",
        answers: [
          { answerText: "Irský vlkodav", isCorrect: true },
          { answerText: "Německý ovčák", isCorrect: false },
          { answerText: "Rotvajler", isCorrect: false },
          { answerText: "Dánský doga", isCorrect: false },
        ],
      },
      {
        questionText: "Jaký je nejrychlejší plemeno psa?",
        answers: [
          { answerText: "Greyhound", isCorrect: true },
          { answerText: "Saluki", isCorrect: false },
          { answerText: "Afghánský chrt", isCorrect: false },
          { answerText: "Výhodný pes", isCorrect: false },
        ],
      },
      {
        questionText: "Jaké plemeno psa je nejchytřejší?",
        answers: [
          { answerText: "Border kolie", isCorrect: true },
          { answerText: "Pudel", isCorrect: false },
          { answerText: "Doberman pinč", isCorrect: false },
          { answerText: "Rotvajler", isCorrect: false },
        ],
      },
      {
        questionText: "Jaké plemeno psa je nejvěrnější?",
        answers: [
          { answerText: "Labradorský retrívr", isCorrect: true },
          { answerText: "Rotvajler", isCorrect: false },
          { answerText: "Německý ovčák", isCorrect: false },
          { answerText: "Golden retrívr", isCorrect: false },
        ],
      },
      {
        questionText: "Jaký je průměrný věk psa?",
        answers: [
          { answerText: "10-13 let", isCorrect: true },
          { answerText: "5-8 let", isCorrect: false },
          { answerText: "2-4 let", isCorrect: false },
          { answerText: "1-3 let", isCorrect: false },
        ],
      },
      {
        questionText: "Jaký je nejstarší pes na světě?",
        answers: [
          { answerText: "Bluey", isCorrect: true },
          { answerText: "Tessie", isCorrect: false },
          { answerText: "Kinkajou", isCorrect: false },
          { answerText: "Banjo", isCorrect: false },
        ],
      },
      {
        questionText: "Jaký je nejdražší pes na světě?",
        answers: [
          { answerText: "Toy Poodle", isCorrect: false },
          { answerText: "French Bulldog", isCorrect: false },
          { answerText: "Chihuahua", isCorrect: false },
          { answerText: "Mastiff", isCorrect: true },
        ],
      },
      {
        questionText: "Jaký je nejvzácnější plemeno psa?",
        answers: [
          { answerText: "Azawakh", isCorrect: true },
          { answerText: "Saluki", isCorrect: false },
          { answerText: "Afghánský chrt", isCorrect: false },
          { answerText: "Výhodný pes", isCorrect: false },
        ],
      },
    {
    questionText: "Jaké je nejběžnější auto v Česku?",
    answers: [
      { answerText: "Škoda Octavia", isCorrect: true },
      { answerText: "Škoda Fabia", isCorrect: false },
      { answerText: "VW Passat", isCorrect: false },
      { answerText: "Opel Corsa", isCorrect: false },
    ],
  },
  {
    questionText: "Jaká je nejlevnější značka aut na trhu?",
    answers: [
      { answerText: "Dacia", isCorrect: true },
      { answerText: "Škoda", isCorrect: false },
      { answerText: "Renault", isCorrect: false },
      { answerText: "Fiat", isCorrect: false },
    ],
  },
  {
    questionText: "Jaká je nejrychlejší značka aut na trhu?",
    answers: [
      { answerText: "Bugatti", isCorrect: true },
      { answerText: "Lamborghini", isCorrect: false },
      { answerText: "Ferrari", isCorrect: false },
      { answerText: "Porsche", isCorrect: false },
    ],
  },
  {
    questionText: "Jaká je nejvíce výkonná značka aut na trhu?",
    answers: [
      { answerText: "Bugatti", isCorrect: true },
      { answerText: "Koenigsegg", isCorrect: false },
      { answerText: "Lamborghini", isCorrect: false },
      { answerText: "Ferrari", isCorrect: false },
    ],
  },
  {
    questionText: "Jaké je nejhospodárnější auto na trhu?",
    answers: [
      { answerText: "Toyota Prius", isCorrect: true },
      { answerText: "Honda Jazz", isCorrect: false },
      { answerText: "Škoda Fabia", isCorrect: false },
      { answerText: "Renault Clio", isCorrect: false },
    ],
  },
  {
    questionText: "Jaké je nejluxusnější auto na trhu?",
    answers: [
      { answerText: "Rolls-Royce Phantom", isCorrect: true },
      { answerText: "Bentley Mulsanne", isCorrect: false },
      { answerText: "Bugatti La Voiture Noire", isCorrect: false },
      { answerText: "Lamborghini Aventador SVJ", isCorrect: false },
    ],
  },
  {
    questionText: "Jaké je nejekologičtější auto na trhu?",
    answers: [
      { answerText: "Tesla Model 3", isCorrect: true },
      { answerText: "Hyundai Ioniq 5", isCorrect: false },
      { answerText: "Kia EV6", isCorrect: false },
      { answerText: "Volkswagen ID.4", isCorrect: false },
    ],
  },
  {
    questionText: "Jaké je nejběžnější auto v Česku?",
    answers: [
      { answerText: "Škoda Octavia", isCorrect: true },
      { answerText: "Škoda Fabia", isCorrect: false },
      { answerText: "VW Passat", isCorrect: false },
      { answerText: "Opel Corsa", isCorrect: false },
    ],
  },
  {
    questionText: "Jaká je nejlevnější značka aut na trhu?",
    answers: [
      { answerText: "Dacia", isCorrect: true },
      { answerText: "Škoda", isCorrect: false },
      { answerText: "Renault", isCorrect: false },
      { answerText: "Fiat", isCorrect: false },
    ],
  },
  {
    questionText: "Jaká je nejrychlejší značka aut na trhu?",
    answers: [
      { answerText: "Bugatti", isCorrect: true },
      { answerText: "Lamborghini", isCorrect: false },
      { answerText: "Ferrari", isCorrect: false },
      { answerText: "Porsche", isCorrect: false },
    ],
  },
  {
    questionText: "Jaké je nejhospodárnější auto na trhu?",
    answers: [
      { answerText: "Toyota Prius", isCorrect: true },
      { answerText: "Honda Jazz", isCorrect: false },
      { answerText: "Škoda Fabia", isCorrect: false },
      { answerText: "Renault Clio", isCorrect: false },
    ],
  },
  {
    questionText: "Jaké je nejluxusnější auto na trhu?",
    answers: [
      { answerText: "Rolls-Royce Phantom", isCorrect: true },
      { answerText: "Bentley Mulsanne", isCorrect: false },
      { answerText: "Bugatti La Voiture Noire", isCorrect: false },
      { answerText: "Lamborghini Aventador SVJ", isCorrect: false },
    ],
  },
  {
    questionText: "Jaké je nejekologičtější auto na trhu?",
    answers: [
      { answerText: "Tesla Model 3", isCorrect: true },
      { answerText: "Hyundai Ioniq 5", isCorrect: false },
      { answerText: "Kia EV6", isCorrect: false },
      { answerText: "Volkswagen ID.4", isCorrect: false },
    ],
  },
];

  export default otazky;