const config = {
  email: "enarcheblstudio@gmail.com",
  telegram: "@xDevMires",
  bot: "@death_zone_online_bot",
  pages: [
    ["home", "index.html"],
    ["support", "support.html"],
    ["privacy", "privacy.html"],
    ["skillTree", "skill-tree.html"],
    ["promo", "promo-codes.html"],
    ["rules", "rules.html"]
  ]
};

const labels = {
  ru: {
    langName: "Русский",
    brand: "Death Zone Online",
    studio: "Enarchebl Studio",
    menu: {
      home: "Главная",
      support: "Поддержка",
      privacy: "Политика",
      skillTree: "Навыки",
      promo: "Промокоды",
      rules: "Правила"
    },
    open: "Открыть",
    updated: "Обновлено: июнь 2026",
    appAds: "Файл AdMob"
  },
  en: {
    langName: "English",
    brand: "Death Zone Online",
    studio: "Enarchebl Studio",
    menu: {
      home: "Home",
      support: "Support",
      privacy: "Privacy",
      skillTree: "Skills",
      promo: "Promo Codes",
      rules: "Rules"
    },
    open: "Open",
    updated: "Updated: June 2026",
    appAds: "AdMob file"
  },
  uk: {
    langName: "Українська",
    brand: "Death Zone Online",
    studio: "Enarchebl Studio",
    menu: {
      home: "Головна",
      support: "Підтримка",
      privacy: "Політика",
      skillTree: "Навички",
      promo: "Промокоди",
      rules: "Правила"
    },
    open: "Відкрити",
    updated: "Оновлено: червень 2026",
    appAds: "Файл AdMob"
  }
};

const content = {
  ru: {
    home: {
      eyebrow: "Официальный сайт",
      title: "Death Zone Online",
      lead: "Страницы поддержки, политики конфиденциальности, правил сообщества, системы навыков и промокодов.",
      primary: ["support.html", "Связаться с поддержкой"],
      secondary: ["privacy.html", "Политика конфиденциальности"],
      cards: [
        ["support", "Поддержка", "Помощь по ошибкам, потерянному прогрессу, подключению и обратной связи."],
        ["privacy", "Политика конфиденциальности", "Как игра использует данные, рекламу, покупки и поддержку."],
        ["skillTree", "Система навыков", "Описание веток: оружейник, броня, выживание, сбор и медицина."],
        ["promo", "Промокоды", "Информация о создании промокодов, параметрах и ключах предметов."],
        ["rules", "Правила сообщества", "Общие правила для Discord и Telegram каналов Death Zone Online."]
      ]
    },
    support: {
      eyebrow: "Поддержка",
      title: "Death Zone Online - поддержка",
      lead: "Если вы столкнулись с ошибкой, потерей прогресса или у вас есть вопрос, напишите нам.",
      sections: [
        ["Контакты", `<p>Email: <a href="mailto:${config.email}">${config.email}</a></p><p class="muted">Обычно мы отвечаем в течение 24-48 часов.</p>`],
        ["Частые проблемы", `<h3>Игра вылетает или не запускается</h3><ul><li>Перезапустите устройство.</li><li>Убедитесь, что установлена последняя версия игры.</li></ul><h3>Потерян прогресс или предметы</h3><ul><li>Напишите в поддержку и укажите Player ID, если он доступен.</li></ul><h3>Проблемы с подключением</h3><ul><li>Проверьте интернет-соединение.</li><li>Попробуйте переключиться между Wi-Fi и мобильной сетью.</li></ul>`],
        ["Отзывы и предложения", "<p>Мы постоянно улучшаем игру и ценим обратную связь. Ваши идеи помогают делать Death Zone Online лучше.</p>"],
        ["Разработчик", "<p>Enarchebl Studio</p>"]
      ]
    },
    privacy: {
      eyebrow: "Документы",
      title: "Политика конфиденциальности",
      lead: "Игра: Death Zone Online. Последнее обновление: июнь 2026.",
      sections: [
        ["1. Введение", "<p>Эта политика описывает, как Death Zone Online собирает, использует и защищает информацию при использовании игры. Загружая или используя игру, вы подтверждаете, что ознакомились с этой политикой.</p>"],
        ["2. Какие данные могут собираться", "<ul><li>Игровой прогресс, достижения, действия и статистика.</li><li>Модель устройства, версия операционной системы и технические идентификаторы.</li><li>IP-адрес и приблизительное местоположение на уровне страны или региона.</li><li>Рекламные данные от сервисов AdMob, ironSource LevelPlay и Unity Ads.</li></ul>"],
        ["3. Покупки в приложении", "<p>Игра может содержать встроенные покупки. Платежи обрабатываются Apple App Store и Google Play Store. Мы не храним данные банковских карт.</p>"],
        ["4. Использование информации", "<ul><li>Работа и поддержка игры.</li><li>Улучшение игрового процесса и стабильности.</li><li>Поиск и исправление технических проблем.</li><li>Поддержка пользователей и предотвращение мошенничества.</li></ul>"],
        ["5. Конфиденциальность детей", "<p>Игра не предназначена для пользователей младше 13 лет. Если такие данные будут обнаружены, они будут удалены после обращения.</p>"],
        ["6. Передача данных", "<p>Мы не продаем персональные данные. Ограниченная информация может передаваться рекламным партнерам, аналитическим сервисам и платформам Apple и Google только в объеме, необходимом для работы игры.</p>"],
        ["7. Безопасность", "<p>Мы применяем разумные технические и организационные меры защиты, но ни один способ передачи или хранения данных не может быть полностью безопасным.</p>"],
        ["8. Контакты", `<p>По вопросам политики конфиденциальности: <a href="mailto:${config.email}">${config.email}</a></p>`],
        ["9. Изменения", "<p>Мы можем обновлять эту политику. Продолжение использования игры означает согласие с обновленной версией.</p>"]
      ]
    },
    skillTree: {
      eyebrow: "Геймплей",
      title: "Система навыков",
      lead: "Стартовые очки навыков: 4. За каждый уровень игрок получает +1 очко. Порядковый номер навыка равен его цене.",
      sections: [
        ["Общая информация", "<ul><li>Нельзя прокачать навык 2, пока не изучен навык 1, и так далее.</li><li>Система находится в разработке и может расширяться.</li></ul>"],
        ["Ветка: Оружейник", "<p class=\"muted\">Фокус: урон, эффекты и эффективность оружия.</p><ol><li>Длина лазерного прицела +50%.</li><li>Износ оружия снижен на 25%.</li><li>При HP ниже 35% снимаются негативные эффекты. Перезарядка: 180 секунд.</li><li>Шанс наложения кровотечения +10% и перелома +10%.</li><li>Шанс попадания в голову +5%, точность стрельбы -5%.</li></ol>"],
        ["Ветка: Инженер брони", "<p class=\"muted\">Фокус: защита и выживаемость.</p><ol><li>Потеря прочности брони снижена на 25%.</li><li>Сопротивление всем дебаффам +10%.</li><li>При HP ниже 35% входящий урон -10%.</li><li>Броня получает +2 линии ячеек по оси X.</li><li>Получаемый урон -10%, скорость передвижения -10%.</li></ol>"],
        ["Ветка: Выживальщик", "<p class=\"muted\">Фокус: мобильность и стамина.</p><ol><li>Максимальная стамина +10.</li><li>Скорость восстановления стамины +20%.</li><li>Шанс уклонения от урона 5%, шанс негативных эффектов +7%.</li><li>Скорость бега +10%, входящий урон +5%.</li><li>Максимальный запас здоровья +36.</li></ol>"],
        ["Ветка: Собиратель", "<p class=\"muted\">Фокус: лут, экономика и прогресс.</p><ol><li>Переносимый вес +10 кг.</li><li>Скорость поиска лута +20%.</li><li>Одежда получает +2 линии ячеек по оси X.</li><li>Выгода при продаже торговцу +15%.</li><li>Получаемый опыт +20%.</li></ol>"],
        ["Ветка: Медицина", "<p class=\"muted\">Фокус: лечение и баффы.</p><ol><li>Получаемое лечение +10%.</li><li>Получаемое лечение +15%.</li><li>Длительность положительных эффектов +25%.</li><li>Дополнительная длительность эффектов +25%.</li><li>Инжектор \"Целитель\": восстановление HP +100%, интервал применения -1 секунда.</li></ol>"]
      ]
    },
    promo: {
      eyebrow: "Инструменты",
      title: "Промокоды",
      lead: `Промокоды создаются через Telegram-бота ${config.bot}. Доступ к созданию выдается администрацией проекта.`,
      sections: [
        ["Кому доступно", "<ul><li>Стримерам.</li><li>Медиа-креаторам по игре.</li></ul>"],
        ["Как создать промокод", `<ol><li>Перейдите в бота: ${config.bot}</li><li>Введите команду: <code>/create promo ID DELAY LIMIT</code></li></ol><p><strong>ID</strong> - название промокода или <code>-</code> для автоматической генерации. <strong>DELAY</strong> - срок действия в днях. <strong>LIMIT</strong> - количество активаций.</p>`],
        ["Добавление наград", "<p>После команды сделайте перенос строки и укажите предмет с количеством. Каждый предмет добавляется с новой строки.</p><pre><code>/create promo test 10 5\nWeapon_Assault_0 1\nArmor_0 1</code></pre><p class=\"note\">Все промокоды отслеживаются. При злоупотреблениях доступ может быть снят.</p>"],
        ["Контакты", `<p>По вопросам промокодов: Telegram ${config.telegram}</p>`],
        ["Ключи предметов", itemKeys()]
      ]
    },
    rules: {
      eyebrow: "Сообщество",
      title: "Правила Discord и Telegram каналов",
      lead: "Пользователи, заходя в каналы и чаты Death Zone Online, соглашаются соблюдать эти правила. Незнание правил не освобождает от ответственности.",
      sections: [
        ["Обжалования и помощь", "<p>Для снятия наказаний, обжалований и жалоб обращайтесь к администрации сообщества. Опишите ситуацию спокойно и приложите доказательства, если они есть.</p>"],
        ["Жалоба на нарушение", "<p>Если вы заметили нарушение, сообщите администрации или используйте доступные инструменты жалобы в Discord или Telegram.</p>"],
        ["1. Использование чата в личных целях и злоупотребления", "<ul><li>Запрещены сливы или угрозы раскрытия личных данных.</li><li>Запрещены реклама, мошенничество, попрошайничество и массовое приглашение в сторонние группы.</li><li>Запрещены продажа, покупка и обмен аккаунтов.</li><li>Запрещены использование, поиск и распространение читов, софта и дюпов.</li><li>Запрещены спам, флуд, бессмысленные сообщения, спам реакциями, GIF и стикерами.</li></ul><p class=\"note\">Рассылка в личные сообщения может привести к бану.</p>"],
        ["2. Негативное поведение", "<ul><li>Запрещены оскорбления, агрессия и дискриминация.</li><li>Запрещены провокации, конфликты и споры, переходящие в оскорбления.</li><li>Запрещены обсуждения и призывы к наркотикам, политическим конфликтам и запрещенным темам.</li></ul>"],
        ["3. Неприемлемый контент", "<ul><li>Запрещены насилие, жестокость, контент 18+, шок-контент и flash-контент.</li><li>Запрещены нацизм, фашизм, запрещенные идеологии и их символика.</li><li>Запрещены стикерпаки, скрытый неприемлемый контент и файлы без предпросмотра в Telegram.</li><li>Правила также распространяются на аватарки и профили.</li></ul>"],
        ["4. Прочие нарушения", "<ul><li>Запрещены обход мута или бана.</li><li>Запрещены ложные репорты и необоснованные пинги администрации.</li><li>Запрещено публичное обсуждение наказаний.</li><li>Запрещено игнорировать предупреждения администрации.</li><li>Запрещена подделка личности, фейки и выдача себя за администрацию или разработчиков.</li></ul>"],
        ["Система наказаний", "<ul><li>Меры зависят от тяжести нарушения.</li><li>Повторные серьезные нарушения могут привести к перманентному бану.</li><li>По вопросам обжалования пишите администрации.</li></ul>"]
      ]
    }
  },
  en: {},
  uk: {}
};

content.en = {
  home: {
    eyebrow: "Official website",
    title: "Death Zone Online",
    lead: "Support, privacy policy, community rules, skill system, and promo code pages.",
    primary: ["support.html", "Contact support"],
    secondary: ["privacy.html", "Privacy policy"],
    cards: [
      ["support", "Support", "Help with bugs, lost progress, connection issues, and feedback."],
      ["privacy", "Privacy Policy", "How the game uses data, ads, purchases, and support information."],
      ["skillTree", "Skill System", "Branches for weapons, armor, survival, looting, and medicine."],
      ["promo", "Promo Codes", "Information about promo creation, parameters, and item keys."],
      ["rules", "Community Rules", "General rules for Death Zone Online Discord and Telegram channels."]
    ]
  },
  support: {
    eyebrow: "Support",
    title: "Death Zone Online - Support",
    lead: "If you experience bugs, lost progress, or have questions, contact us.",
    sections: [
      ["Contact", `<p>Email: <a href="mailto:${config.email}">${config.email}</a></p><p class="muted">We usually respond within 24-48 hours.</p>`],
      ["Common Issues", "<h3>Game crashes or does not start</h3><ul><li>Restart your device.</li><li>Make sure you have the latest version installed.</li></ul><h3>Lost progress or items</h3><ul><li>Contact us and include your Player ID, if available.</li></ul><h3>Connection issues</h3><ul><li>Check your internet connection.</li><li>Try switching between Wi-Fi and mobile data.</li></ul>"],
      ["Feedback & Suggestions", "<p>We are constantly improving the game and appreciate your feedback. Your ideas help make Death Zone Online better.</p>"],
      ["Developer", "<p>Enarchebl Studio</p>"]
    ]
  },
  privacy: {
    eyebrow: "Documents",
    title: "Privacy Policy",
    lead: "Game: Death Zone Online. Last updated: June 2026.",
    sections: [
      ["1. Introduction", "<p>This Privacy Policy explains how Death Zone Online collects, uses, and protects information when you use the game.</p>"],
      ["2. Information We May Collect", "<ul><li>Gameplay progress, achievements, actions, and statistics.</li><li>Device model, operating system version, and technical identifiers.</li><li>IP address and approximate country or region.</li><li>Advertising data from AdMob, ironSource LevelPlay, and Unity Ads.</li></ul>"],
      ["3. In-App Purchases", "<p>The game may include in-app purchases. Payments are processed by Apple App Store and Google Play Store. We do not store credit card information.</p>"],
      ["4. Use of Information", "<ul><li>Operating and maintaining the game.</li><li>Improving gameplay and stability.</li><li>Finding and fixing technical issues.</li><li>Providing support and preventing fraud.</li></ul>"],
      ["5. Children's Privacy", "<p>The game is not intended for users under 13. If such data is identified, it will be deleted after notification.</p>"],
      ["6. Data Sharing", "<p>We do not sell personal data. Limited information may be shared with advertising partners, analytics providers, and Apple or Google only as needed for game operation.</p>"],
      ["7. Security", "<p>We use reasonable technical and organizational measures, but no method of transmission or storage is completely secure.</p>"],
      ["8. Contact", `<p>Privacy questions: <a href="mailto:${config.email}">${config.email}</a></p>`],
      ["9. Changes", "<p>We may update this policy. Continued use of the game means acceptance of the updated version.</p>"]
    ]
  },
  skillTree: translatePage("en", "Skill System"),
  promo: translatePage("en", "Promo Codes"),
  rules: translatePage("en", "Community Rules")
};

content.uk = {
  home: {
    eyebrow: "Офіційний сайт",
    title: "Death Zone Online",
    lead: "Сторінки підтримки, політики конфіденційності, правил спільноти, системи навичок і промокодів.",
    primary: ["support.html", "Зв'язатися з підтримкою"],
    secondary: ["privacy.html", "Політика конфіденційності"],
    cards: [
      ["support", "Підтримка", "Допомога з помилками, втраченим прогресом, підключенням і відгуками."],
      ["privacy", "Політика конфіденційності", "Як гра використовує дані, рекламу, покупки та підтримку."],
      ["skillTree", "Система навичок", "Опис гілок: зброяр, броня, виживання, збір і медицина."],
      ["promo", "Промокоди", "Інформація про створення промокодів, параметри та ключі предметів."],
      ["rules", "Правила спільноти", "Загальні правила для Discord і Telegram каналів Death Zone Online."]
    ]
  },
  support: {
    eyebrow: "Підтримка",
    title: "Death Zone Online - підтримка",
    lead: "Якщо ви зіткнулися з помилкою, втратою прогресу або маєте питання, напишіть нам.",
    sections: [
      ["Контакти", `<p>Email: <a href="mailto:${config.email}">${config.email}</a></p><p class="muted">Зазвичай ми відповідаємо протягом 24-48 годин.</p>`],
      ["Поширені проблеми", "<h3>Гра вилітає або не запускається</h3><ul><li>Перезапустіть пристрій.</li><li>Переконайтеся, що встановлена остання версія гри.</li></ul><h3>Втрачено прогрес або предмети</h3><ul><li>Напишіть у підтримку та вкажіть Player ID, якщо він доступний.</li></ul><h3>Проблеми з підключенням</h3><ul><li>Перевірте інтернет-з'єднання.</li><li>Спробуйте перемкнутися між Wi-Fi і мобільною мережею.</li></ul>"],
      ["Відгуки та пропозиції", "<p>Ми постійно покращуємо гру та цінуємо ваші відгуки. Ваші ідеї допомагають робити Death Zone Online кращою.</p>"],
      ["Розробник", "<p>Enarchebl Studio</p>"]
    ]
  },
  privacy: {
    eyebrow: "Документи",
    title: "Політика конфіденційності",
    lead: "Гра: Death Zone Online. Останнє оновлення: червень 2026.",
    sections: [
      ["1. Вступ", "<p>Ця політика пояснює, як Death Zone Online збирає, використовує та захищає інформацію під час використання гри.</p>"],
      ["2. Які дані можуть збиратися", "<ul><li>Ігровий прогрес, досягнення, дії та статистика.</li><li>Модель пристрою, версія операційної системи та технічні ідентифікатори.</li><li>IP-адреса та приблизна країна або регіон.</li><li>Рекламні дані від AdMob, ironSource LevelPlay і Unity Ads.</li></ul>"],
      ["3. Покупки в застосунку", "<p>Гра може містити внутрішні покупки. Платежі обробляються Apple App Store і Google Play Store. Ми не зберігаємо дані банківських карток.</p>"],
      ["4. Використання інформації", "<ul><li>Робота та підтримка гри.</li><li>Покращення ігрового процесу та стабільності.</li><li>Пошук і виправлення технічних проблем.</li><li>Підтримка користувачів і запобігання шахрайству.</li></ul>"],
      ["5. Конфіденційність дітей", "<p>Гра не призначена для користувачів молодше 13 років. Якщо такі дані буде виявлено, їх буде видалено після звернення.</p>"],
      ["6. Передача даних", "<p>Ми не продаємо персональні дані. Обмежена інформація може передаватися рекламним партнерам, аналітичним сервісам і платформам Apple або Google лише для роботи гри.</p>"],
      ["7. Безпека", "<p>Ми застосовуємо розумні технічні та організаційні заходи, але жоден спосіб передавання чи зберігання даних не є повністю безпечним.</p>"],
      ["8. Контакти", `<p>Питання щодо конфіденційності: <a href="mailto:${config.email}">${config.email}</a></p>`],
      ["9. Зміни", "<p>Ми можемо оновлювати цю політику. Подальше використання гри означає згоду з оновленою версією.</p>"]
    ]
  },
  skillTree: translatePage("uk", "Система навичок"),
  promo: translatePage("uk", "Промокоди"),
  rules: translatePage("uk", "Правила спільноти")
};

function translatePage(lang, title) {
  const ru = content.ru;
  const copy = JSON.parse(JSON.stringify(ru[lang === "en" ? "skillTree" : "skillTree"]));
  if (title.includes("Promo") || title.includes("Промо")) return JSON.parse(JSON.stringify(ru.promo));
  if (title.includes("Rules") || title.includes("Правила")) return JSON.parse(JSON.stringify(ru.rules));
  return copy;
}

function itemKeys() {
  const groups = {
    CURRENCY: ["Money - Currency_1"],
    ASSAULT: ["AK-47 - Weapon_Assault_0", "AKS - Weapon_Assault_1", "RPK - Weapon_Assault_2", "GROZA - Weapon_Assault_3", "VSS - Weapon_Assault_4", "SVD - Weapon_Assault_5", "AK-12 - Weapon_Assault_6", "Vector - Weapon_Assault_7", "MP5 - Weapon_Assault_8", "AUG - Weapon_Assault_9", "M4A1 - Weapon_Assault_10", "FAL - Weapon_Assault_11", "M16A1 - Weapon_Assault_12", "FN SCAR - Weapon_Assault_13", "AR-15 - Weapon_Assault_14", "M110 - Weapon_Assault_15"],
    HELMET: ["Builder's Helmet - Helmet_0", "Motorcycle Helmet - Helmet_1", "PASGT Helmet - Helmet_2", "Alpha-2 Helmet - Helmet_3", "FAST Helmet - Helmet_4", "FAST Helmet - Helmet_5", "Sphere Helmet - Helmet_6", "ArmorSource Helmet - Helmet_7", "Helmet Mask 1 - Helmet_8", "Gentex TBH-R1 Helmet - Helmet_9", "L110 Helmet - Helmet_10", "Altyn Helmet - Helmet_11", "ZSh-1 Helmet - Helmet_12", "New Year's Helmet Mask 1 - Helmet_13"],
    ARMOR: ["Work Jacket - Armor_0", "T-shirt - Armor_1", "Jacket - Armor_2", "Lighteme G3 Suit - Armor_3", "Hunting Clothing - Armor_4"],
    "ARMORED VEST": ["Concealed Carry Body Armor 1 - ArmoredVest_0", "Hunter Body Armor - ArmoredVest_1", "Special Services Body Armor 2 - ArmoredVest_2", "Br2 Spetsnaz Body Armor - ArmoredVest_3", "PASGT Body Armor - ArmoredVest_4", "Kulon Body Armor - ArmoredVest_5", "Guardian-3 Body Armor Vest - ArmoredVest_6", "M1 Body Armor Vest - ArmoredVest_7", "INC Body Armor Vest - ArmoredVest_8", "Grenade Bulletproof Vest - ArmoredVest_9", "Segment-4 Bulletproof Vest - ArmoredVest_10", "Plitnik-4 Bulletproof Vest - ArmoredVest_11", "Konon Body Armor - ArmoredVest_12", "Gvardeets-5 Body Armor - ArmoredVest_13", "Mobile-5 Bulletproof Vest - ArmoredVest_14"],
    BAGS: ["Small Backpack - Bags_0", "Backpack - Bags_1", "Military Backpack - Bags_2", "Hiking Backpack - Bags_3", "Tactical Backpack - Bags_4"],
    AMMO: ["7.62x51 M61 Cartridge - Ammo_0", "5.56x45 M855 Cartridge - Ammo_1", "9x19 FMJ Cartridge - Ammo_2", "7.62x51 M80 Cartridge - Ammo_3", "5.56x45 M855A1 Cartridge - Ammo_4", "5.56x45 M995 Cartridge - Ammo_5", "9x19 7N31 Cartridge - Ammo_6", "9x19 JHP Cartridge - Ammo_7", "9x19 PST GZH Cartridge - Ammo_8", "7.62x39 SP Cartridge - Ammo_9", "7.62x39 SB Cartridge - Ammo_10", "7.62x39 AP Cartridge - Ammo_11"],
    TREATMENT: ["Travel First Aid Kit - Additional_Treatment_0", "First Aid Kit - Additional_Treatment_1", "Universal Travel First Aid Kit - Additional_Treatment_2", "MVZP First Aid Kit - Additional_Treatment_3", "BPMS First Aid Kit - Additional_Treatment_4", "Surgical Kit - Additional_Treatment_5", "Surgical Kit SM-PKhO1 - Additional_Treatment_6", "Surgical Kit NH-122 - Additional_Treatment_7", "Vaseline - Additional_Treatment_8", "Band-Aid - Additional_Treatment_9", "Bandage - Additional_Treatment_10", "Tourniquet - Additional_Treatment_11", "Military Tourniquet - Additional_Treatment_12", "Svertysh Injector - Additional_Treatment_13", "Hercules Injector - Additional_Treatment_14", "Neugomon Injector - Additional_Treatment_15", "Healer Injector - Additional_Treatment_16", "Analgin Tablets - Additional_Treatment_17", "Morphine Tablets - Additional_Treatment_18", "Bottle of Pills Morphine - Additional_Treatment_19", "Adrenaline Injector - Additional_Treatment_20", "Anti-Rad - Additional_Treatment_21", "Phoenix Injector - Additional_Treatment_22"],
    MODIFIER: ["Holographic sight - Modifier_0", "2x collimator sight - Modifier_1", "4x Holographic Sight - Modifier_2", "Level 1 Muzzle - Modifier_3", "Level 2 Muzzle - Modifier_4", "Level 3 Muzzle - Modifier_5", "Wooden forend with long stop - Modifier_6", "Weaver GT12 Tactical Foregrip - Modifier_7", "Cyma Magpu Tactical Foregrip - Modifier_8", "Extended Magazine for AK Tier 1 - Modifier_9", "Extended magazine for AK Tier 2 - Modifier_10", "Extended magazine for AK Tier 3 - Modifier_11", "Telescopic Stock for the Zenit PT-3 - Modifier_12", "Magpul AFG2 Tactical Grip - Modifier_13", "RAPS sniper stock - Modifier_14", "Compact Weapon Light - Modifier_15", "Reconnaissance NVD - Modifier_16", "Military Weapon Light - Modifier_17", "Operator NVD - Modifier_18", "Extended magazine capacity for VSS Tier 1 - Modifier_19", "Extended magazine capacity for VSS Tier 2 - Modifier_20", "Extended Magazine for M4 Tier 1 - Modifier_21", "Extended Magazine for M4 Tier 2 - Modifier_22", "Extended Magazine for M4 Tier 3 - Modifier_23", "Extended 7.62x51mm magazine - Modifier_24", "Extended magazine for SMG - Modifier_25", "EOTech G33.STS Magnifier 3x - Modifier_26", "Collimator sight OKP-7 - Modifier_27", "PSO 4x Scope - Modifier_28"],
    REPAIR: ["Small Armor Repair Kit - Repair_0", "Large Armor Repair Kit - Repair_1", "Small Weapon Repair Kit - Repair_2", "Large Weapon Repair Kit - Repair_3", "Level 3 Armor Plate - Repair_4", "Level 4 Armor Plate - Repair_5", "Level 5 Armor Plate - Repair_6"],
    JEWELRY: ["Digital Watch - Jewelry_0", "Phone - Jewelry_1", "Silver Ring - Jewelry_2", "Gold Ring - Jewelry_3", "Gold Watch - Jewelry_4", "Gold Coin - Jewelry_5", "Gold Bar - Jewelry_6"],
    ELECTRONICS: ["Wires - Electronics_0", "Computer Mouse - Electronics_1", "Disk Drive - Electronics_2", "Flash Drive - Electronics_3", "Chip - Electronics_4", "Processor - Electronics_5", "Cassette - Electronics_6", "Motherboard - Electronics_7", "Keyboard - Electronics_8", "Power Supply - Electronics_9", "Video Card - Electronics_10", "Computer Case - Electronics_11"],
    FUEL: ["Gasoline - Fuel_0", "Gas - Fuel_1"],
    RESOURCES: ["Nuts - Resources_0", "Duct Tape - Resources_1", "Nails - Resources_2", "Batteries - Resources_3", "Plastic - Resources_4", "Glue - Resources_5", "Wood Plank - Resources_6", "Particle Board - Resources_7", "Scrap Metal - Resources_8", "Sheet Metal - Resources_9", "Pipes - Resources_10", "Empty Shells - Resources_11", "Gunpowder - Resources_12", "Spray Can - Resources_13", "Copper Pipe - Resources_14", "Planks - Resources_15", "Cloth - Resources_16"],
    TRASH: ["Empty Syringe - Trash_0", "Soap - Trash_1", "Pile of Pills - Trash_2", "Pen - Trash_3", "Pencil - Trash_4", "Low-Quality Cigarettes - Trash_5", "Newspaper - Trash_6", "Matches - Trash_7", "Lighter - Trash_8", "Cup - Trash_9", "Gridded Notebook - Trash_10", "Rubber Boots - Trash_11", "Lined Notebook - Trash_12", "Plate - Trash_13", "Paper Pack - Trash_14", "Notebook - Trash_15", "Average-Quality Cigarettes - Trash_16", "High-Quality Cigarettes - Trash_17", "Flasks - Trash_18"]
  };

  return Object.entries(groups).map(([group, items]) => `<h3>${group}</h3><div class="code-list">${items.map((item) => `<div class="code-item">${item}</div>`).join("")}</div>`).join("");
}

function getLanguage() {
  const saved = localStorage.getItem("dzo-lang");
  if (saved && labels[saved]) return saved;
  const browser = (navigator.language || "ru").slice(0, 2).toLowerCase();
  return labels[browser] ? browser : "ru";
}

function setLanguage(lang) {
  localStorage.setItem("dzo-lang", lang);
  render(lang);
}

function hrefFor(pageId) {
  return config.pages.find(([id]) => id === pageId)?.[1] || "index.html";
}

function render(lang = getLanguage()) {
  const pageId = document.body.dataset.page || "home";
  const l = labels[lang];
  const page = content[lang][pageId] || content.ru[pageId] || content.ru.home;
  document.documentElement.lang = lang;
  document.title = `${page.title} - Death Zone Online`;

  const nav = config.pages.map(([id, href]) => `<a class="${id === pageId ? "active" : ""}" href="${href}">${l.menu[id]}</a>`).join("");
  const langButtons = Object.keys(labels).map((id) => `<button class="${id === lang ? "active" : ""}" type="button" data-lang="${id}">${id.toUpperCase()}</button>`).join("");
  const heroLogo = pageId === "home" ? `<div class="hero-logo"><img src="assets/game-logo.png" alt="Death Zone Online logo"></div>` : "";

  const body = pageId === "home" ? renderHome(page, l) : renderArticle(page);

  document.getElementById("app").innerHTML = `
    <div class="site">
      <header class="topbar">
        <div class="topbar-inner">
          <a class="brand" href="index.html">
            <span class="brand-mark"><img src="assets/game-logo.png" alt=""></span>
            <span class="brand-text">
              <span class="brand-title">${l.brand}</span>
              <span class="brand-subtitle">${l.studio}</span>
            </span>
          </a>
          <nav class="nav" aria-label="Main navigation">
            ${nav}
            <span class="lang" aria-label="Language selector">${langButtons}</span>
          </nav>
        </div>
      </header>
      <main>
        <section class="hero">
          <div class="hero-layout">
            <div>
              <div class="eyebrow">${page.eyebrow}</div>
              <h1>${page.title}</h1>
              <p class="lead">${page.lead}</p>
              ${page.primary ? `<div class="hero-actions"><a class="button primary" href="${page.primary[0]}">${page.primary[1]}</a><a class="button" href="${page.secondary[0]}">${page.secondary[1]}</a></div>` : ""}
            </div>
            ${heroLogo}
          </div>
        </section>
        ${body}
      </main>
      <footer class="footer">
        <div class="footer-inner">
          <span>${l.updated}</span>
          <a href="app-ads.txt">${l.appAds}: app-ads.txt</a>
        </div>
      </footer>
    </div>
  `;

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
}

function renderHome(page, l) {
  return `
    <section class="content">
      <div class="grid">
        ${page.cards.map(([id, title, text]) => `
          <a class="card" href="${hrefFor(id)}">
            <span class="card-kicker">${l.menu[id]}</span>
            <h2>${title}</h2>
            <p>${text}</p>
            <span class="more">${l.open}</span>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function renderArticle(page) {
  return `
    <section class="content">
      <article class="article">
        ${page.sections.map(([title, html]) => `<section class="section"><h2>${title}</h2>${html}</section>`).join("")}
      </article>
    </section>
  `;
}

function installLocalizedSharedPages() {
  content.en.skillTree = {
    eyebrow: "Gameplay",
    title: "Skill System",
    lead: "Starting skill points: 4. Each level grants +1 point. A skill number equals its point cost.",
    sections: [
      ["General Information", "<ul><li>You cannot unlock skill 2 before skill 1, and so on.</li><li>The system is in development and may be expanded or rebalanced.</li></ul>"],
      ["Branch: Weaponsmith", "<p class=\"muted\">Focus: damage, effects, and weapon efficiency.</p><ol><li>Laser sight length +50%.</li><li>Weapon durability loss reduced by 25%.</li><li>When HP is below 35%, negative effects are removed. Cooldown: 180 seconds.</li><li>Bleeding chance +10% and fracture chance +10%.</li><li>Headshot chance +5%, shooting accuracy -5%.</li></ol>"],
      ["Branch: Armor Engineer", "<p class=\"muted\">Focus: defense and survivability.</p><ol><li>Armor durability loss reduced by 25%.</li><li>Resistance to all debuffs +10%.</li><li>When HP is below 35%, incoming damage -10%.</li><li>Armor gets +2 inventory rows on the X axis.</li><li>Incoming damage -10%, movement speed -10%.</li></ol>"],
      ["Branch: Survivor", "<p class=\"muted\">Focus: mobility and stamina.</p><ol><li>Maximum stamina +10.</li><li>Stamina regeneration speed +20%.</li><li>5% chance to dodge damage, negative effect chance +7%.</li><li>Running speed +10%, incoming damage +5%.</li><li>Maximum health +36.</li></ol>"],
      ["Branch: Collector", "<p class=\"muted\">Focus: loot, economy, and progression.</p><ol><li>Carry weight +10 kg.</li><li>Loot search speed +20%.</li><li>Clothing gets +2 inventory rows on the X axis.</li><li>Trader selling profit +15%.</li><li>Experience gain +20%.</li></ol>"],
      ["Branch: Medicine", "<p class=\"muted\">Focus: healing and buffs.</p><ol><li>Received healing +10%.</li><li>Received healing +15%.</li><li>Positive effect duration +25%.</li><li>Additional effect duration +25%.</li><li>Healer injector: HP recovery +100%, use interval -1 second.</li></ol>"]
    ]
  };

  content.en.promo = {
    eyebrow: "Tools",
    title: "Promo Codes",
    lead: `Promo codes are created through the Telegram bot ${config.bot}. Creation access is granted by the project administration.`,
    sections: [
      ["Who Can Access", "<ul><li>Streamers.</li><li>Game media creators.</li></ul>"],
      ["How to Create a Promo Code", `<ol><li>Open the bot: ${config.bot}</li><li>Enter the command: <code>/create promo ID DELAY LIMIT</code></li></ol><p><strong>ID</strong> is the promo code name, or <code>-</code> for automatic generation. <strong>DELAY</strong> is the validity period in days. <strong>LIMIT</strong> is the number of activations.</p>`],
      ["Adding Rewards", "<p>After the command, add a new line and specify the item and quantity. Each item must be on a separate line.</p><pre><code>/create promo test 10 5\nWeapon_Assault_0 1\nArmor_0 1</code></pre><p class=\"note\">Promo codes are monitored. Access may be removed if abuse is detected.</p>"],
      ["Contacts", `<p>Promo code questions: Telegram ${config.telegram}</p>`],
      ["Item Keys", itemKeys()]
    ]
  };

  content.en.rules = {
    eyebrow: "Community",
    title: "Discord and Telegram Channel Rules",
    lead: "By joining Death Zone Online channels and chats, users agree to follow these rules. Not knowing the rules does not remove responsibility.",
    sections: [
      ["Appeals and Help", "<p>For punishment removal, appeals, or complaints, contact the community administration. Describe the situation calmly and include evidence if you have it.</p>"],
      ["Reporting a Violation", "<p>If you notice a violation, report it to the administration or use the available Discord or Telegram reporting tools.</p>"],
      ["1. Chat Abuse and Personal Use", "<ul><li>Sharing or threatening to reveal personal data is forbidden.</li><li>Advertising, scams, begging, and mass invitations to external groups are forbidden.</li><li>Buying, selling, or trading accounts is forbidden.</li><li>Using, searching for, or distributing cheats, software, or dupes is forbidden.</li><li>Spam, flooding, meaningless messages, and reaction, GIF, or sticker spam are forbidden.</li></ul><p class=\"note\">Direct message spam may lead to a ban.</p>"],
      ["2. Negative Behavior", "<ul><li>Insults, aggression, and discrimination are forbidden.</li><li>Provocations, conflicts, and arguments that turn into insults are forbidden.</li><li>Discussions or calls related to drugs, political conflicts, and prohibited topics are forbidden.</li></ul>"],
      ["3. Unacceptable Content", "<ul><li>Violence, cruelty, adult content, shock content, and flash content are forbidden.</li><li>Nazism, fascism, prohibited ideologies, and their symbols are forbidden.</li><li>Sticker packs, hidden unacceptable content, and Telegram files without preview are forbidden.</li><li>These rules also apply to avatars and profiles.</li></ul>"],
      ["4. Other Violations", "<ul><li>Bypassing mute or ban is forbidden.</li><li>False reports and unnecessary administration pings are forbidden.</li><li>Public discussion of punishments is forbidden.</li><li>Ignoring administration warnings is forbidden.</li><li>Impersonation, fake profiles, and pretending to be administration or developers are forbidden.</li></ul>"],
      ["Punishment System", "<ul><li>Measures depend on the severity of the violation.</li><li>Repeated serious violations may lead to a permanent ban.</li><li>For appeals, contact the administration.</li></ul>"]
    ]
  };

  content.uk.skillTree = {
    eyebrow: "Геймплей",
    title: "Система навичок",
    lead: "Стартові очки навичок: 4. За кожен рівень гравець отримує +1 очко. Номер навички дорівнює її вартості.",
    sections: [
      ["Загальна інформація", "<ul><li>Не можна прокачати навичку 2, поки не вивчена навичка 1, і так далі.</li><li>Система перебуває в розробці та може розширюватися або балансуватися.</li></ul>"],
      ["Гілка: Зброяр", "<p class=\"muted\">Фокус: шкода, ефекти та ефективність зброї.</p><ol><li>Довжина лазерного прицілу +50%.</li><li>Знос зброї знижено на 25%.</li><li>Коли HP нижче 35%, негативні ефекти знімаються. Перезарядка: 180 секунд.</li><li>Шанс кровотечі +10% і перелому +10%.</li><li>Шанс влучання в голову +5%, точність стрільби -5%.</li></ol>"],
      ["Гілка: Інженер броні", "<p class=\"muted\">Фокус: захист і виживання.</p><ol><li>Втрата міцності броні знижена на 25%.</li><li>Опір усім дебаффам +10%.</li><li>Коли HP нижче 35%, вхідна шкода -10%.</li><li>Броня отримує +2 рядки комірок по осі X.</li><li>Отримувана шкода -10%, швидкість пересування -10%.</li></ol>"],
      ["Гілка: Виживальник", "<p class=\"muted\">Фокус: мобільність і стаміна.</p><ol><li>Максимальна стаміна +10.</li><li>Швидкість відновлення стаміни +20%.</li><li>5% шанс ухилення від шкоди, шанс негативних ефектів +7%.</li><li>Швидкість бігу +10%, вхідна шкода +5%.</li><li>Максимальний запас здоров'я +36.</li></ol>"],
      ["Гілка: Збирач", "<p class=\"muted\">Фокус: лут, економіка та прогрес.</p><ol><li>Переносима вага +10 кг.</li><li>Швидкість пошуку луту +20%.</li><li>Одяг отримує +2 рядки комірок по осі X.</li><li>Вигода при продажу торговцю +15%.</li><li>Отримуваний досвід +20%.</li></ol>"],
      ["Гілка: Медицина", "<p class=\"muted\">Фокус: лікування та баффи.</p><ol><li>Отримуване лікування +10%.</li><li>Отримуване лікування +15%.</li><li>Тривалість позитивних ефектів +25%.</li><li>Додаткова тривалість ефектів +25%.</li><li>Інжектор \"Цілитель\": відновлення HP +100%, інтервал застосування -1 секунда.</li></ol>"]
    ]
  };

  content.uk.promo = {
    eyebrow: "Інструменти",
    title: "Промокоди",
    lead: `Промокоди створюються через Telegram-бота ${config.bot}. Доступ до створення видає адміністрація проєкту.`,
    sections: [
      ["Кому доступно", "<ul><li>Стримерам.</li><li>Медіа-креаторам по грі.</li></ul>"],
      ["Як створити промокод", `<ol><li>Перейдіть у бота: ${config.bot}</li><li>Введіть команду: <code>/create promo ID DELAY LIMIT</code></li></ol><p><strong>ID</strong> - назва промокоду або <code>-</code> для автоматичної генерації. <strong>DELAY</strong> - строк дії в днях. <strong>LIMIT</strong> - кількість активацій.</p>`],
      ["Додавання нагород", "<p>Після команди зробіть новий рядок і вкажіть предмет та кількість. Кожен предмет додається з нового рядка.</p><pre><code>/create promo test 10 5\nWeapon_Assault_0 1\nArmor_0 1</code></pre><p class=\"note\">Усі промокоди відстежуються. У разі зловживань доступ може бути знято.</p>"],
      ["Контакти", `<p>Питання щодо промокодів: Telegram ${config.telegram}</p>`],
      ["Ключі предметів", itemKeys()]
    ]
  };

  content.uk.rules = {
    eyebrow: "Спільнота",
    title: "Правила Discord і Telegram каналів",
    lead: "Користувачі, які заходять у канали та чати Death Zone Online, погоджуються дотримуватися цих правил. Незнання правил не звільняє від відповідальності.",
    sections: [
      ["Оскарження та допомога", "<p>Для зняття покарань, оскаржень або скарг звертайтеся до адміністрації спільноти. Опишіть ситуацію спокійно та додайте докази, якщо вони є.</p>"],
      ["Скарга на порушення", "<p>Якщо ви помітили порушення, повідомте адміністрацію або скористайтеся доступними інструментами скарг у Discord чи Telegram.</p>"],
      ["1. Зловживання чатом і використання в особистих цілях", "<ul><li>Заборонено зливати особисті дані або погрожувати їх розкриттям.</li><li>Заборонені реклама, шахрайство, жебрацтво та масові запрошення у сторонні групи.</li><li>Заборонені продаж, купівля та обмін акаунтів.</li><li>Заборонено використовувати, шукати або поширювати чити, софт і дюпи.</li><li>Заборонені спам, флуд, беззмістовні повідомлення, спам реакціями, GIF і стікерами.</li></ul><p class=\"note\">Розсилка в особисті повідомлення може призвести до бану.</p>"],
      ["2. Негативна поведінка", "<ul><li>Заборонені образи, агресія та дискримінація.</li><li>Заборонені провокації, конфлікти та суперечки, що переходять в образи.</li><li>Заборонені обговорення або заклики, пов'язані з наркотиками, політичними конфліктами та забороненими темами.</li></ul>"],
      ["3. Неприйнятний контент", "<ul><li>Заборонені насильство, жорстокість, контент 18+, шок-контент і flash-контент.</li><li>Заборонені нацизм, фашизм, заборонені ідеології та їхня символіка.</li><li>Заборонені стікерпаки, прихований неприйнятний контент і файли без предпросмотру в Telegram.</li><li>Ці правила також поширюються на аватарки та профілі.</li></ul>"],
      ["4. Інші порушення", "<ul><li>Заборонено обходити мут або бан.</li><li>Заборонені неправдиві репорти та необгрунтовані пінги адміністрації.</li><li>Заборонено публічно обговорювати покарання.</li><li>Заборонено ігнорувати попередження адміністрації.</li><li>Заборонені підробка особи, фейки та видавання себе за адміністрацію або розробників.</li></ul>"],
      ["Система покарань", "<ul><li>Заходи залежать від тяжкості порушення.</li><li>Повторні серйозні порушення можуть призвести до перманентного бану.</li><li>Для оскарження пишіть адміністрації.</li></ul>"]
    ]
  };
}

installLocalizedSharedPages();
render();
