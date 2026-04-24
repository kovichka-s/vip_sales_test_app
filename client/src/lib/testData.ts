// Test data and scoring logic for VIP Sales Manager assessment

export interface Question {
  id: string;
  type: "situational" | "psychological";
  text: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  scores: {
    locomotive: number;
    serviceVip: number;
    mamasBasket: number;
  };
}

export interface TestResult {
  locomotive: number;
  serviceVip: number;
  mamasBasket: number;
  locomotivePercent: number;
  serviceVipPercent: number;
  mamasBasketPercent: number;
  primaryProfile: string;
  secondaryProfile: string;
  recommendation: string;
}

export const questions: Question[] = [
  // Situational questions
  {
    id: "sit1",
    type: "situational",
    text: "Ви здійснюєте холодний дзвінок потенційному VIP-клієнту. Після вашого привітання клієнт відповідає: «Слухаю, але в мене мало часу». Як ви продовжите розмову?",
    options: [
      {
        id: "sit1_a",
        text: "«Розумію, тому скажу коротко: я звернувся, бо бачу можливість для вашої компанії оптимізувати [конкретна зона]. Якщо це неактуально — скажете одразу.»",
        scores: { locomotive: 2, serviceVip: 1, mamasBasket: 0 },
      },
      {
        id: "sit1_b",
        text: "«Розумію. Тоді скажіть, будь ласка, чи актуальне для вас зараз питання [конкретна проблема], щоб я не забирав ваш час даремно?»",
        scores: { locomotive: 1, serviceVip: 2, mamasBasket: 0 },
      },
      {
        id: "sit1_c",
        text: "«Я ознайомився з вашим бізнесом і бачу, що ви розвиваєте [напрям]. Є рішення, яке вже дало результат у подібних компаніях. Можу коротко пояснити, в чому суть.»",
        scores: { locomotive: 2, serviceVip: 1, mamasBasket: 0 },
      },
      {
        id: "sit1_d",
        text: "«Щоб не навантажувати вас зараз, можу сформулювати коротку ідею в 2–3 рядках і надіслати. Якщо буде цікаво — продовжимо.»",
        scores: { locomotive: 0, serviceVip: 2, mamasBasket: 0 },
      },
      {
        id: "sit1_e",
        text: "«Тоді давайте домовимось так: я підготую конкретну пропозицію під вашу ситуацію і повернусь у зручний для вас час. Коли краще?»",
        scores: { locomotive: 0, serviceVip: 2, mamasBasket: 0 },
      },
    ],
  },
  {
    id: "sit2",
    type: "situational",
    text: "Клієнт після короткого вступу каже: «Дякую, але нам зараз нічого не потрібно». Яка ваша наступна реакція?",
    options: [
      {
        id: "sit2_a",
        text: "«Розумію, більшість компаній так відповідають на першому етапі. Саме тому коротко скажу: ми допомагаємо [конкретна цінність], і часто це стає актуальним раніше, ніж очікується. Чи правильно я розумію, що зараз для вас не пріоритет — чи вже є рішення?»",
        scores: { locomotive: 2, serviceVip: 1, mamasBasket: 0 },
      },
      {
        id: "sit2_b",
        text: "«Розумію вас. Скажіть, будь ласка, а що для вас зараз є пріоритетним напрямком? Можливо, я зможу бути корисним у майбутньому.»",
        scores: { locomotive: 0, serviceVip: 2, mamasBasket: 1 },
      },
      {
        id: "sit2_c",
        text: "«Дякую за відповідь. Підкажіть, будь ласка, коли буде доречно повернутися до цього питання? Я підготую більш релевантну пропозицію.»",
        scores: { locomotive: 0, serviceVip: 2, mamasBasket: 1 },
      },
      {
        id: "sit2_d",
        text: "«Розумію. Саме тому я і звертаюсь — часто компанії не бачать потреби, поки не стикаються з [конкретний ризик або втрата]. Ми якраз допомагаємо це попередити. Чи було у вас щось подібне?»",
        scores: { locomotive: 2, serviceVip: 1, mamasBasket: 0 },
      },
      {
        id: "sit2_e",
        text: "«Розумію вас. Тоді давайте зробимо так: я надішлю вам коротке повідомлення з одним кейсом, де ми вирішили [конкретну проблему]. Збережіть мій номер як \"[тип проблеми]\" — щоб, якщо це стане актуальним, ви могли швидко мене знайти. Домовились?»",
        scores: { locomotive: 1, serviceVip: 2, mamasBasket: 0 },
      },
    ],
  },
  {
    id: "sit3",
    type: "situational",
    text: "Клієнт каже: «Це дорого для нас». Як ви відповідаєте?",
    options: [
      {
        id: "sit3_a",
        text: "«Розумію, тоді давайте подивимось, що ми можемо оптимізувати або зменшити в обсязі, щоб вам було комфортніше по бюджету.»",
        scores: { locomotive: 0, serviceVip: 1, mamasBasket: 1 },
      },
      {
        id: "sit3_b",
        text: "«Насправді ціна повністю виправдана, тому що у нас найкраща якість, сервіс, досвід на ринку і ми вже працювали з багатьма клієнтами вашого рівня…»",
        scores: { locomotive: 1, serviceVip: 0, mamasBasket: 1 },
      },
      {
        id: "sit3_c",
        text: "«Розумію. Давайте тоді порахуємо: якщо це рішення дає вам [результат], то за який період воно окупиться?»",
        scores: { locomotive: 2, serviceVip: 1, mamasBasket: 0 },
      },
      {
        id: "sit3_d",
        text: "«Коли ви кажете \"дорого\", мені важливо зрозуміти — це про бюджет чи про відчуття, що цінність не відповідає? Скажіть прямо, будь ласка.»",
        scores: { locomotive: 2, serviceVip: 2, mamasBasket: 0 },
      },
      {
        id: "sit3_e",
        text: "«Зрозумів вас. Скажіть, будь ласка, що саме для вас зараз виглядає дорогим — сам формат рішення, обсяг чи результат, який ви очікуєте?»",
        scores: { locomotive: 2, serviceVip: 2, mamasBasket: 0 },
      },
    ],
  },
  {
    id: "sit4",
    type: "situational",
    text: "VIP-клієнт звертається до вас із терміновим запитом і просить виконати задачу швидше, ніж це реально можливо без втрати якості. Як ви будете діяти?",
    options: [
      {
        id: "sit4_a",
        text: "«Так, звичайно, зробимо максимально швидко. Я передам команді, і ми постараємось вкластися у ваші терміни.»",
        scores: { locomotive: 0, serviceVip: 1, mamasBasket: 2 },
      },
      {
        id: "sit4_b",
        text: "«На жаль, це неможливо в такі строки. У нас є встановлені процеси, і ми їх не порушуємо.»",
        scores: { locomotive: 1, serviceVip: 0, mamasBasket: 2 },
      },
      {
        id: "sit4_c",
        text: "«Давайте подивимось, що саме для вас критично. Ми можемо пришвидшити частину процесу або змінити обсяг, щоб ви отримали результат швидше.»",
        scores: { locomotive: 2, serviceVip: 2, mamasBasket: 0 },
      },
      {
        id: "sit4_d",
        text: "«Я розумію, що для вас це терміново. Я уточню всередині команди, де ми можемо прискоритись без втрати якості, і повернусь до вас із конкретними варіантами сьогодні.»",
        scores: { locomotive: 1, serviceVip: 2, mamasBasket: 0 },
      },
      {
        id: "sit4_e",
        text: "«Я скажу вам прямо: у ці строки зробити без втрати якості не вийде. Але я можу запропонувати варіанти — або ми залишаємо якість і трохи рухаємо термін, або робимо швидше, але з обмеженим обсягом. Давайте оберемо, що для вас зараз важливіше.»",
        scores: { locomotive: 2, serviceVip: 2, mamasBasket: 0 },
      },
    ],
  },
  {
    id: "sit5",
    type: "situational",
    text: "Після угоди або відмови VIP-клієнт \"в системі\", і менеджер має підтримувати контакт. Як ви будете діяти?",
    options: [
      {
        id: "sit5_a",
        text: "Я фіксую клієнта в системі супроводу і планую регулярні точки контакту: перевірка результату, зворотний зв'язок, оновлення можливостей.",
        scores: { locomotive: 1, serviceVip: 2, mamasBasket: 0 },
      },
      {
        id: "sit5_b",
        text: "Я виходжу на контакт не з продажем, а з уточненням: як змінився результат після впровадження рішення і чи є нові задачі.",
        scores: { locomotive: 1, serviceVip: 2, mamasBasket: 0 },
      },
      {
        id: "sit5_c",
        text: "Я відстежую зміни в бізнесі клієнта і виходжу на контакт тоді, коли бачу потенційну нову потребу або ризик.",
        scores: { locomotive: 2, serviceVip: 1, mamasBasket: 0 },
      },
      {
        id: "sit5_d",
        text: "Я підтримую ненав'язливий контакт: короткі оновлення, корисна інформація, інсайти по ринку без прямого продажу.",
        scores: { locomotive: 0, serviceVip: 2, mamasBasket: 0 },
      },
      {
        id: "sit5_e",
        text: "Я повертаюсь до клієнта у ключові моменти: після впровадження, при оновленнях продукту або при появі нових рішень, які можуть вплинути на його бізнес.",
        scores: { locomotive: 2, serviceVip: 1, mamasBasket: 0 },
      },
    ],
  },

  // Psychological questions (scale 1-5)
  {
    id: "psy1",
    type: "psychological",
    text: "Я вважаю, що успіх у роботі залежить насамперед від моїх власних зусиль та рішень.",
    options: [
      {
        id: "psy1_1",
        text: "Зовсім не про мене",
        scores: { locomotive: 0, serviceVip: 0, mamasBasket: 2 },
      },
      {
        id: "psy1_2",
        text: "Скоріше не про мене",
        scores: { locomotive: 0, serviceVip: 0, mamasBasket: 1 },
      },
      {
        id: "psy1_3",
        text: "Іноді так, іноді ні",
        scores: { locomotive: 1, serviceVip: 1, mamasBasket: 0 },
      },
      {
        id: "psy1_4",
        text: "Часто про мене",
        scores: { locomotive: 2, serviceVip: 0, mamasBasket: 0 },
      },
      {
        id: "psy1_5",
        text: "Це точно про мене",
        scores: { locomotive: 3, serviceVip: 0, mamasBasket: 0 },
      },
    ],
  },
  {
    id: "psy2",
    type: "psychological",
    text: "Мені комфортно працювати за чітко визначеними правилами та інструкціями.",
    options: [
      {
        id: "psy2_1",
        text: "Зовсім не про мене",
        scores: { locomotive: 2, serviceVip: 0, mamasBasket: 0 },
      },
      {
        id: "psy2_2",
        text: "Скоріше не про мене",
        scores: { locomotive: 1, serviceVip: 0, mamasBasket: 0 },
      },
      {
        id: "psy2_3",
        text: "Іноді так, іноді ні",
        scores: { locomotive: 1, serviceVip: 1, mamasBasket: 0 },
      },
      {
        id: "psy2_4",
        text: "Часто про мене",
        scores: { locomotive: 0, serviceVip: 2, mamasBasket: 0 },
      },
      {
        id: "psy2_5",
        text: "Це точно про мене",
        scores: { locomotive: 0, serviceVip: 3, mamasBasket: 0 },
      },
    ],
  },
  {
    id: "psy3",
    type: "psychological",
    text: "Я легко адаптуюся до нових обставин і швидко знаходжу рішення у непередбачуваних ситуаціях.",
    options: [
      {
        id: "psy3_1",
        text: "Зовсім не про мене",
        scores: { locomotive: 0, serviceVip: 0, mamasBasket: 2 },
      },
      {
        id: "psy3_2",
        text: "Скоріше не про мене",
        scores: { locomotive: 0, serviceVip: 0, mamasBasket: 1 },
      },
      {
        id: "psy3_3",
        text: "Іноді так, іноді ні",
        scores: { locomotive: 1, serviceVip: 1, mamasBasket: 0 },
      },
      {
        id: "psy3_4",
        text: "Часто про мене",
        scores: { locomotive: 2, serviceVip: 0, mamasBasket: 0 },
      },
      {
        id: "psy3_5",
        text: "Це точно про мене",
        scores: { locomotive: 3, serviceVip: 0, mamasBasket: 0 },
      },
    ],
  },
  {
    id: "psy4",
    type: "psychological",
    text: "Коли виникають труднощі, я схильний шукати причини у зовнішніх обставинах, а не у власних діях.",
    options: [
      {
        id: "psy4_1",
        text: "Зовсім не про мене",
        scores: { locomotive: 2, serviceVip: 0, mamasBasket: 0 },
      },
      {
        id: "psy4_2",
        text: "Скоріше не про мене",
        scores: { locomotive: 1, serviceVip: 0, mamasBasket: 0 },
      },
      {
        id: "psy4_3",
        text: "Іноді так, іноді ні",
        scores: { locomotive: 0, serviceVip: 1, mamasBasket: 1 },
      },
      {
        id: "psy4_4",
        text: "Часто про мене",
        scores: { locomotive: 0, serviceVip: 0, mamasBasket: 2 },
      },
      {
        id: "psy4_5",
        text: "Це точно про мене",
        scores: { locomotive: 0, serviceVip: 0, mamasBasket: 3 },
      },
    ],
  },
  {
    id: "psy5",
    type: "psychological",
    text: "Я завжди прагну доводити розпочату справу до кінця, приділяючи увагу навіть дрібним деталям.",
    options: [
      {
        id: "psy5_1",
        text: "Зовсім не про мене",
        scores: { locomotive: 2, serviceVip: 0, mamasBasket: 0 },
      },
      {
        id: "psy5_2",
        text: "Скоріше не про мене",
        scores: { locomotive: 1, serviceVip: 0, mamasBasket: 0 },
      },
      {
        id: "psy5_3",
        text: "Іноді так, іноді ні",
        scores: { locomotive: 1, serviceVip: 1, mamasBasket: 0 },
      },
      {
        id: "psy5_4",
        text: "Часто про мене",
        scores: { locomotive: 0, serviceVip: 2, mamasBasket: 0 },
      },
      {
        id: "psy5_5",
        text: "Це точно про мене",
        scores: { locomotive: 0, serviceVip: 3, mamasBasket: 0 },
      },
    ],
  },
  {
    id: "psy6",
    type: "psychological",
    text: "Я спокійно сприймаю критику і використовую її для покращення своєї роботи.",
    options: [
      {
        id: "psy6_1",
        text: "Зовсім не про мене",
        scores: { locomotive: 0, serviceVip: 0, mamasBasket: 2 },
      },
      {
        id: "psy6_2",
        text: "Скоріше не про мене",
        scores: { locomotive: 0, serviceVip: 0, mamasBasket: 1 },
      },
      {
        id: "psy6_3",
        text: "Іноді так, іноді ні",
        scores: { locomotive: 1, serviceVip: 1, mamasBasket: 0 },
      },
      {
        id: "psy6_4",
        text: "Часто про мене",
        scores: { locomotive: 1, serviceVip: 1, mamasBasket: 0 },
      },
      {
        id: "psy6_5",
        text: "Це точно про мене",
        scores: { locomotive: 2, serviceVip: 2, mamasBasket: 0 },
      },
    ],
  },
  {
    id: "psy7",
    type: "psychological",
    text: "Мені важливо отримати схвалення керівника перед тим, як впроваджувати нові підходи.",
    options: [
      {
        id: "psy7_1",
        text: "Зовсім не про мене",
        scores: { locomotive: 2, serviceVip: 0, mamasBasket: 0 },
      },
      {
        id: "psy7_2",
        text: "Скоріше не про мене",
        scores: { locomotive: 1, serviceVip: 0, mamasBasket: 0 },
      },
      {
        id: "psy7_3",
        text: "Іноді так, іноді ні",
        scores: { locomotive: 0, serviceVip: 1, mamasBasket: 1 },
      },
      {
        id: "psy7_4",
        text: "Часто про мене",
        scores: { locomotive: 0, serviceVip: 0, mamasBasket: 2 },
      },
      {
        id: "psy7_5",
        text: "Це точно про мене",
        scores: { locomotive: 0, serviceVip: 0, mamasBasket: 3 },
      },
    ],
  },
  {
    id: "psy8",
    type: "psychological",
    text: "Я часто пропоную нові ідеї та шляхи вирішення проблем, навіть якщо це виходить за межі моїх прямих обов'язків.",
    options: [
      {
        id: "psy8_1",
        text: "Зовсім не про мене",
        scores: { locomotive: 0, serviceVip: 2, mamasBasket: 0 },
      },
      {
        id: "psy8_2",
        text: "Скоріше не про мене",
        scores: { locomotive: 0, serviceVip: 1, mamasBasket: 0 },
      },
      {
        id: "psy8_3",
        text: "Іноді так, іноді ні",
        scores: { locomotive: 1, serviceVip: 1, mamasBasket: 0 },
      },
      {
        id: "psy8_4",
        text: "Часто про мене",
        scores: { locomotive: 2, serviceVip: 0, mamasBasket: 0 },
      },
      {
        id: "psy8_5",
        text: "Це точно про мене",
        scores: { locomotive: 3, serviceVip: 0, mamasBasket: 0 },
      },
    ],
  },
  {
    id: "psy9",
    type: "psychological",
    text: "Я вважаю, що більшість людей не здатні самостійно вирішувати складні питання без сторонньої допомоги.",
    options: [
      {
        id: "psy9_1",
        text: "Зовсім не про мене",
        scores: { locomotive: 2, serviceVip: 0, mamasBasket: 0 },
      },
      {
        id: "psy9_2",
        text: "Скоріше не про мене",
        scores: { locomotive: 1, serviceVip: 0, mamasBasket: 0 },
      },
      {
        id: "psy9_3",
        text: "Іноді так, іноді ні",
        scores: { locomotive: 0, serviceVip: 1, mamasBasket: 1 },
      },
      {
        id: "psy9_4",
        text: "Часто про мене",
        scores: { locomotive: 0, serviceVip: 0, mamasBasket: 2 },
      },
      {
        id: "psy9_5",
        text: "Це точно про мене",
        scores: { locomotive: 0, serviceVip: 0, mamasBasket: 3 },
      },
    ],
  },
  {
    id: "psy10",
    type: "psychological",
    text: "Я вмію ефективно керувати своїми емоціями, навіть у стресових ситуаціях з клієнтами.",
    options: [
      {
        id: "psy10_1",
        text: "Зовсім не про мене",
        scores: { locomotive: 0, serviceVip: 0, mamasBasket: 2 },
      },
      {
        id: "psy10_2",
        text: "Скоріше не про мене",
        scores: { locomotive: 0, serviceVip: 0, mamasBasket: 1 },
      },
      {
        id: "psy10_3",
        text: "Іноді так, іноді ні",
        scores: { locomotive: 1, serviceVip: 1, mamasBasket: 0 },
      },
      {
        id: "psy10_4",
        text: "Часто про мене",
        scores: { locomotive: 1, serviceVip: 1, mamasBasket: 0 },
      },
      {
        id: "psy10_5",
        text: "Це точно про мене",
        scores: { locomotive: 2, serviceVip: 2, mamasBasket: 0 },
      },
    ],
  },
];

// Maximum possible scores
const MAX_SCORES = {
  locomotive: 29,
  serviceVip: 29,
  mamasBasket: 20,
};

export function calculateResults(answers: Record<string, string>): TestResult {
  const scores = {
    locomotive: 0,
    serviceVip: 0,
    mamasBasket: 0,
  };

  // Calculate scores
  for (const questionId in answers) {
    const selectedOptionId = answers[questionId];
    const question = questions.find((q) => q.id === questionId);

    if (question) {
      const option = question.options.find((o) => o.id === selectedOptionId);
      if (option) {
        scores.locomotive += option.scores.locomotive;
        scores.serviceVip += option.scores.serviceVip;
        scores.mamasBasket += option.scores.mamasBasket;
      }
    }
  }

  // Calculate percentages
  const locomotivePercent = Math.round(
    (scores.locomotive / MAX_SCORES.locomotive) * 100
  );
  const serviceVipPercent = Math.round(
    (scores.serviceVip / MAX_SCORES.serviceVip) * 100
  );
  const mamasBasketPercent = Math.round(
    (scores.mamasBasket / MAX_SCORES.mamasBasket) * 100
  );

  // Determine primary and secondary profiles
  const profileScores = [
    { name: "Локомотив", percent: locomotivePercent },
    { name: "Сервісний VIP", percent: serviceVipPercent },
    { name: "Мамина корзиночка", percent: mamasBasketPercent },
  ];

  profileScores.sort((a, b) => b.percent - a.percent);

  const primaryProfile = profileScores[0].name;
  const secondaryProfile = profileScores[1].name;

  // Generate recommendation
  let recommendation = "";

  if (primaryProfile === "Локомотив") {
    if (mamasBasketPercent < 30) {
      recommendation =
        "Ідеальний кандидат для ролі VIP-менеджера. Високий рівень ініціативності, стійкості та внутрішнього локусу контролю. Готовий до самостійного прийняття рішень і пробивання опору. Рекомендується для активних продажів та розвитку нових напрямків.";
    } else {
      recommendation =
        "Сильний кандидат з ознаками ініціативності, але з деякою залежністю від зовнішніх факторів. Рекомендується для ролей, де потрібна баланс між ініціативою та дотриманням процесів.";
    }
  } else if (primaryProfile === "Сервісний VIP") {
    if (locomotivePercent < 40) {
      recommendation =
        "Надійний кандидат, орієнтований на якість обслуговування та довгострокові стосунки з клієнтами. Високий рівень емпатії та дотримання стандартів. Рекомендується для ролей, де потрібна уважність до деталей та побудова довіри.";
    } else {
      recommendation =
        "Гібридний профіль: поєднує сервісність з ініціативністю. Може успішно працювати як з холодними дзвінками, так і з управлінням існуючих клієнтів. Універсальний кандидат.";
    }
  } else {
    recommendation =
      "Кандидат показує ознаки інфантильності та залежності від зовнішніх факторів. Потребує чіткого керівництва, регулярного контролю та схвалення. Рекомендується для ролей з детальним регламентом та постійним супроводом керівника. Не рекомендується для VIP-менеджменту без додаткового розвитку.";
  }

  return {
    locomotive: scores.locomotive,
    serviceVip: scores.serviceVip,
    mamasBasket: scores.mamasBasket,
    locomotivePercent,
    serviceVipPercent,
    mamasBasketPercent,
    primaryProfile,
    secondaryProfile,
    recommendation,
  };
}
