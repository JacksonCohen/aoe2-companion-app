module.exports = [
  {
    id: 0,
    checked: false,
    name: "Britons",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/a/ae/CivIcon-Britons.png/revision/latest?cb=20191107173130",
    speciality: "Foot archers",
    unique_unit: ["Longbowman"],
    unique_technologies: ["Yeomen", "Warwolf"],
    wonder:
      "Aachen Cathedral (before Definitive Edition) / Chichester Cathedral (in the Definitive Edition)",
    civilization_bonuses: [
      "Town Centers cost -50% wood starting in the Castle Age.",
      "Foot archers (except Skirmishers) have +1/+2 range in the Castle/Imperial Age.",
      "Shepherds work 25% faster."
    ],
    team_bonus: "Archery Ranges work 20% faster."
  },
  {
    id: 1,
    checked: false,
    name: "Byzantines",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/2/27/CivIcon-Byzantines.png/revision/latest?cb=20191107173131",
    speciality: "Defense",
    unique_unit: ["Cataphract"],
    unique_technologies: ["Greek Fire", "Logistica"],
    wonder: "Hagia Sophia",
    civilization_bonuses: [
      "Buildings have +10%/+20%/+30%/+40% HP in the Dark/Feudal/Castle/Imperial Age.",
      "Camel Riders, Skirmishers, and the Spearman lines are 25% cheaper.",
      "Fire Ships attack 20% faster.",
      "Advancing to the Imperial Age is 33% cheaper.",
      "Town Watch is free."
    ],
    team_bonus: "Monks heal 50% faster."
  },
  {
    id: 2,
    checked: false,
    name: "Celts",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/5/59/CivIcon-Celts.png/revision/latest?cb=20191107173132",
    speciality: "Infantry and siege weapons",
    unique_unit: ["Woad Raider"],
    unique_technologies: ["Stronghold", "Furor Celtica"],
    wonder: "Rock of Cashel",
    civilization_bonuses: [
      "Infantry units move 15% faster.",
      "Lumberjacks work 15% faster.",
      "Siege weapons fire +20% faster.",
      "Enemy herdables can be converted regardless of enemy units next to them."
    ],
    team_bonus: "Siege Workshops work 20% faster."
  },
  {
    id: 3,
    checked: false,
    name: "Chinese",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/c/cc/CivIcon-Chinese.png/revision/latest?cb=20191107173132",
    speciality: "Archers",
    unique_unit: ["Chu Ko Nu"],
    unique_technologies: ["Great Wall", "Rocketry"],
    wonder: "Temple of Heaven",
    civilization_bonuses: [
      "Start game with three extra Villagers, but with -200 food and -50 wood.",
      "Town Center supports ten population (instead of five).",
      "Technologies are 10%/15%/20% cheaper in the Feudal/Castle/Imperial Age.",
      "Demolition Ships have +50% HP."
    ],
    team_bonus: "Farms start with +45 food."
  },
  {
    id: 4,
    checked: false,
    name: "Franks",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/1/1b/CivIcon-Franks.png/revision/latest?cb=20191107173237",
    speciality: "Cavalry",
    unique_unit: ["Throwing Axeman"],
    unique_technologies: ["Chivalry", "Bearded Axe"],
    wonder: "St. Vitus Cathedral",
    civilization_bonuses: [
      "Farm upgrades are free.",
      "Castles are 25% cheaper.",
      "Cavalry have +20% HP.",
      "Foragers work 25% faster."
    ],
    team_bonus: "Knights have +2 Line of Sight."
  },
  {
    id: 5,
    checked: false,
    name: "Goths",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/2/24/CivIcon-Goths.png/revision/latest?cb=20191107173238",
    speciality: "Infantry",
    unique_unit: ["Huskarl"],
    unique_technologies: ["Anarchy", "Perfusion"],
    wonder: "Mausoleum of Theoderic I",
    civilization_bonuses: [
      "Infantry are 35% cheaper starting in the Feudal Age.",
      "Infantry have +1 attack bonus against standard buildings.",
      "Villagers have +5 attack against Wild Boars and carry +15 food from hunting.",
      "+10 population cap in the Imperial Age."
    ],
    team_bonus: "Barracks work 20% faster."
  },
  {
    id: 6,
    checked: false,
    name: "Japanese",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/9/9a/CivIcon-Japanese.png/revision/latest?cb=20191107173240",
    speciality: "Infantry",
    unique_unit: ["Samurai"],
    unique_technologies: ["Yasama", "Kataparuto"],
    wonder: "Tōdai-ji",
    civilization_bonuses: [
      "Fishing Ships have double HP, +2 pierce armor, and work 5%/10%/15%/20% faster in the Dark/Feudal/Castle/Imperial Age.",
      "Mills, Lumber Camps and Mining Camps are 50% cheaper.",
      "Infantry attack 25% faster starting in the Feudal Age."
    ],
    team_bonus: "Galleys have a +50% longer Line of Sight."
  },
  {
    id: 7,
    checked: false,
    name: "Mongols",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/1/10/CivIcon-Mongols.png/revision/latest?cb=20191107173335",
    speciality: "Cavalry archers",
    unique_unit: ["Mangudai"],
    unique_technologies: ["Nomads", "Drill"],
    wonder: "Great Tent of Genghis Khan",
    civilization_bonuses: [
      "Cavalry archers fire 25% faster.",
      "Light Cavalry and Hussars have +30% HP.",
      "Hunters work +50% faster."
    ],
    team_bonus: "The Scout Cavalry line has +2 Line of Sight."
  },
  {
    id: 8,
    checked: false,
    name: "Persians",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/a/ad/CivIcon-Persians.png/revision/latest?cb=20191107173335",
    speciality: "Cavalry",
    unique_unit: ["War Elephant"],
    unique_technologies: ["Kamandaran", "Mahouts"],
    wonder: "Taq Kasra",
    civilization_bonuses: [
      "Start game with +50 food and +50 wood.",
      "Town Centers and Docks have double HP and work 10%/15%/20% faster in the Feudal/Castle/Imperial Age."
    ],
    team_bonus: "Knights have +2 attack against archers."
  },
  {
    id: 9,
    checked: false,
    name: "Saracens",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/5/59/CivIcon-Saracens.png/revision/latest?cb=20191107173336",
    speciality: "Cavalry and navy",
    unique_unit: ["Mameluke"],
    unique_technologies: ["Madrasah", "Zealotry"],
    wonder: "Great Mosque of Samarra",
    civilization_bonuses: [
      "The commodity trading fee is 5%.",
      "Markets cost -75 wood.",
      "Transport Ships have double HP and +5 carry capacity.",
      "Galleys attack 20% faster.",
      "Cavalry Archers have +4 attack against standard buildings."
    ],
    team_bonus:
      "team_bonus: : Foot archers have +2 attack against standard buildings."
  },
  {
    id: 10,
    checked: false,
    name: "Teutons",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/3/3f/CivIcon-Teutons.png/revision/latest?cb=20191107173408",
    speciality: "Infantry",
    unique_unit: ["Teutonic Knight"],
    unique_technologies: ["Ironclad", "Crenellations"],
    wonder: "Maria Laach Abbey",
    civilization_bonuses: [
      "Monks have double healing range.",
      "Towers garrison twice as many units.",
      "Murder Holes are free.",
      "Farms are 33% cheaper.",
      "Town Centers can garrison +10 units."
    ],
    team_bonus: "Units resist conversion."
  },
  {
    id: 11,
    checked: false,
    name: "Turks",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/1/1c/CivIcon-Turks.png/revision/latest?cb=20191107173409",
    speciality: "Gunpowder units",
    unique_unit: ["Janissary"],
    unique_technologies: ["Sipahi", "Artillery"],
    wonder: "Selimiye Mosque",
    civilization_bonuses: [
      "Gunpowder units have +25% HP.",
      "Gunpowder technologies are 50% cheaper.",
      "Chemistry is free.",
      "Gold Miners work 20% faster.",
      "Light Cavalry and Hussar upgrades are free."
    ],
    team_bonus: "Gunpowder units are created 20% faster."
  },
  {
    id: 12,
    checked: false,
    name: "Vikings",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/c/c9/CivIcon-Vikings.png/revision/latest?cb=20191107173410",
    speciality: "Infantry and navy",
    unique_unit: ["Berserk", "Longboat"],
    unique_technologies: ["Chieftains", "Berserkergang"],
    wonder: "Borgund Stave Church",
    civilization_bonuses: [
      "Warships are 15%/15%/20% cheaper in the Feudal/Castle/Imperial Age.",
      "Infantry have +10%/+15%/+20% HP in the Feudal/Castle/Imperial Age.",
      "Wheelbarrow and Hand Cart are free."
    ],
    team_bonus: "Docks are 15% cheaper."
  },
  {
    id: 13,
    checked: false,
    name: "Aztecs",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/0/0c/CivIcon-Aztecs.png/revision/latest?cb=20191107173129",
    speciality: "Monks and infantry",
    unique_unit: ["Jaguar Warrior"],
    unique_technologies: ["Atlatl", "Garland Wars"],
    wonder: "Great Pyramid of Tenochtitlan",
    civilization_bonuses: [
      "Start the game with an Eagle Scout.",
      "Villagers carry +5 extra resources.",
      "All military units are created 15% faster.",
      "Monks gain 5 HP for every researched Monastery technology.",
      "Start with +50 gold."
    ],
    team_bonus: "Relics generate +33% gold."
  },
  {
    id: 14,
    checked: false,
    name: "Huns",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/1/17/CivIcon-Huns.png/revision/latest?cb=20191107173238",
    speciality: "Cavalry",
    unique_unit: ["Tarkan"],
    unique_technologies: ["Marauders", "Atheism"],
    wonder: "Arch of Constantine (ruined)",
    civilization_bonuses: [
      "Start the game with -100 wood, but with the population cap at the maximum.",
      "Cavalry Archers are 10%/20% cheaper in the Castle/Imperial Age.",
      "Trebuchets have +35% accuracy against units."
    ],
    team_bonus: "Stables work 20% faster."
  },
  {
    id: 15,
    checked: false,
    name: "Koreans",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/7/73/CivIcon-Koreans.png/revision/latest?cb=20191107173241",
    speciality: "Towers and navy",
    unique_unit: ["War Wagon", "Turtle Ship"],
    unique_technologies: ["Panokseon", "Shinkichon"],
    wonder: "Hwangnyong Temple",
    civilization_bonuses: [
      "Villagers have +3 Line of Sight.",
      "Stone Miners work 20% faster.",
      "Tower upgrades are free (Bombard Tower requires Chemistry).",
      "Towers (except Bombard Towers) have +1/+2 range in the Castle/Imperial Age.",
      "Fortifications are built 33% faster."
    ],
    team_bonus: "Mangonel line minimum range reduced."
  },
  {
    id: 16,
    checked: false,
    name: "Mayans",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/0/05/CivIcon-Mayans.png/revision/latest?cb=20191107173335",
    speciality: "Archers",
    unique_unit: ["Plumed Archer"],
    unique_technologies: ["Obsidian Arrows", "El Dorado"],
    wonder: "Tikal Temple I",
    civilization_bonuses: [
      "Start the game with an Eagle Scout.",
      "Start the game with +1 Villager, but with -50 food.",
      "Resources last 15% longer.",
      "Foot archers are 10%/20%/30% cheaper in the Feudal/Castle/Imperial Age."
    ],
    team_bonus: "Walls are 50% cheaper."
  },
  {
    id: 17,
    checked: false,
    name: "Spanish",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/0/0a/CivIcon-Spanish.png/revision/latest?cb=20191107173337",
    speciality: "Monks and gunpowder units",
    unique_unit: ["Conquistador", "Missionary"],
    unique_technologies: ["Inquisition", "Supremacy"],
    wonder: "Torre del Oro",
    civilization_bonuses: [
      "Builders work 30% faster.",
      "Blacksmith upgrades cost no gold.",
      "Cannon Galleons have better accuracy and faster cannonballs.",
      "Hand Cannoneers and Bombard Cannons fire 15% faster."
    ],
    team_bonus: "Trade units generate +25% gold."
  },
  {
    id: 18,
    checked: false,
    name: "Incas",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/5/5e/CivIcon-Incas.png/revision/latest?cb=20191107173239",
    speciality: "Infantry",
    unique_unit: ["Kamayuk", "Slinger"],
    unique_technologies: ["Andean Sling", "Couriers"],
    wonder: "Temple of the Sun at Macchu Picchu",
    civilization_bonuses: [
      "Start the game with an Eagle Scout.",
      "Start with a free Llama.",
      "Villagers benefit from Blacksmith infantry upgrades.",
      "Houses support 10 population.",
      "Buildings cost -15% stone."
    ],
    team_bonus: "Farms are built 50% faster."
  },
  {
    id: 19,
    checked: false,
    name: "Indians",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/8/8b/CivIcon-Indians.png/revision/latest?cb=20191107173239",
    speciality: "Camel Riders and gunpowder units",
    unique_unit: ["Elephant Archer", "Imperial Camel Rider"],
    unique_technologies: ["Sultans", "Shatagni"],
    wonder:
      "Gol Gumbaz (before Rise of the Rajas) / Brihadeeswarar Temple (since Rise of the Rajas)",
    civilization_bonuses: [
      "Fishermen work 15% faster and carry +15 food.",
      "Villagers are 10%/15%/20%/25% cheaper in the Dark/Feudal/Castle/Imperial Age.",
      "Camel Riders have +1 pierce armor."
    ],
    team_bonus: "Camels have +6 attack against buildings."
  },
  {
    id: 20,
    checked: false,
    name: "Italians",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/e/e1/CivIcon-Italians.png/revision/latest?cb=20191116050557",
    speciality: "Navy and archers",
    unique_unit: ["Genoese Crossbowman", "Condottiero"],
    unique_technologies: ["Pavise", "Silk Road"],
    wonder: "Genoa Cathedral, Cathedral of St. Lawrence",
    civilization_bonuses: [
      "Advancing to the next Age is 15% cheaper.",
      "Dock technologies are 50% cheaper.",
      "Fishing Ships are 20% cheaper.",
      "Gunpowder units are 20% cheaper."
    ],
    team_bonus: "Condottieri are available at the Barracks."
  },
  {
    id: 21,
    checked: false,
    name: "Magyars",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/6/68/CivIcon-Magyars.png/revision/latest?cb=20191107173242",
    speciality: "Cavalry",
    unique_unit: ["Magyar Huszar"],
    unique_technologies: ["Corvinian Army", "Recurve Bow"],
    wonder: "Hunyad Castle",
    civilization_bonuses: [
      "Forging, Iron Casting, and Blast Furnace are free.",
      "Scout Cavalry line is 15% cheaper.",
      "Villagers kill wild animals in one strike."
    ],
    team_bonus: "Foot archers have +2 Line of Sight."
  },
  {
    id: 22,
    checked: false,
    name: "Slavs",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/1/12/CivIcon-Slavs.png/revision/latest?cb=20191107173337",
    speciality: "Infantry and siege weapons",
    unique_unit: ["Boyar"],
    unique_technologies: ["Orthodoxy", "Druzhina"],
    wonder: "Kizhi Pogost",
    civilization_bonuses: [
      "Farmers work 15% faster.",
      "Tracking is free.",
      "Siege Workshop units are 15% cheaper."
    ],
    team_bonus:
      "Military buildings (excluding Castles and Docks) provide +5 population."
  },
  {
    id: 23,
    checked: false,
    name: "Berbers",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/7/71/CivIcon-Berbers.png/revision/latest?cb=20191107173130",
    speciality: "Navy and cavalry",
    unique_unit: ["Camel Archer", "Genitour"],
    unique_technologies: ["Kasbah", "Maghrabi Camels"],
    wonder: "Hassan Tower",
    civilization_bonuses: [
      "Villagers move +10% faster.",
      "Stable units are 15%/20% cheaper in the Castle/Imperial Age.",
      "Ships move +10% faster."
    ],
    team_bonus: "Genitour are available at the Archery Range."
  },
  {
    id: 24,
    checked: false,
    name: "Ethiopians",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/c/cb/CivIcon-Ethiopians.png/revision/latest?cb=20191107173133",
    speciality: "Archers and siege weapons",
    unique_unit: ["Shotel Warrior"],
    unique_technologies: ["Royal Heirs", "Torsion Engines"],
    wonder: "Biete Amanuel",
    civilization_bonuses: [
      "Archers fire +15% faster.",
      "Receive +100 food and +100 gold whenever a new Age is reached.",
      "The Pikeman upgrade is free."
    ],
    team_bonus: "Towers and Outposts have +3 Line of Sight."
  },
  {
    id: 25,
    checked: false,
    name: "Malians",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/8/80/CivIcon-Malians.png/revision/latest?cb=20191107173334",
    speciality: "Infantry",
    unique_unit: ["Gbeto"],
    unique_technologies: ["Tigui", "Farimba"],
    wonder: "Great Mosque of Djenné",
    civilization_bonuses: [
      "Buildings cost -15% wood (except Farms).",
      "Barracks units have +1/+2/+3 pierce armor in the Feudal/Castle/Imperial Age.",
      "Gold Mining is free."
    ],
    team_bonus: "Universities research +80% faster."
  },
  {
    id: 26,
    checked: false,
    name: "Portuguese",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/6/60/CivIcon-Portuguese.png/revision/latest?cb=20191107173336",
    speciality: "Navy and gunpowder units",
    unique_unit: ["Organ Gun", "Caravel"],
    unique_technologies: ["Carrack", "Arquebus"],
    wonder: "Belém Tower",
    civilization_bonuses: [
      "All units cost -15% gold.",
      "All ships have +10% HP.",
      "The Feitoria becomes available for building in the Imperial Age."
    ],
    team_bonus: "Free Cartography from the beginning of the game."
  },
  {
    id: 27,
    checked: false,
    name: "Burmese",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/7/79/CivIcon-Burmese.png/revision/latest?cb=20191107173131",
    speciality: "Monks and elephants",
    unique_unit: ["Arambai"],
    unique_technologies: ["Howdah", "Manipur Cavalry"],
    wonder: "Shwezigon Pagoda",
    civilization_bonuses: [
      "Lumber Camp technologies are free.",
      "Infantry has +1/+2/+3 attack in the Feudal/Castle/Imperial Age.",
      "Monastery technologies are 50% cheaper."
    ],
    team_bonus: "Relics are visible on the map from the game start."
  },
  {
    id: 28,
    checked: false,
    name: "Khmer",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/e/ec/CivIcon-Khmer.png/revision/latest?cb=20191107173240",
    speciality: "Siege weapons and elephants",
    unique_unit: ["Ballista Elephant"],
    unique_technologies: ["Tusk Swords", "Double Crossbow"],
    wonder: "Angkor Wat",
    civilization_bonuses: [
      "No buildings are required to construct certain buildings or advance in Age.",
      "Battle Elephants move +15% faster.",
      "Khmer Villagers drop off food from farms (1 unit at a time) without needing a drop site.",
      "Villagers can garrison in Houses."
    ],
    team_bonus: "Scorpions have +1 range."
  },
  {
    id: 29,
    checked: false,
    name: "Malay",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/c/c3/CivIcon-Malay.png/revision/latest?cb=20191107173334",
    speciality: "Navy",
    unique_unit: ["Karambit Warrior"],
    unique_technologies: ["Thalassocracy", "Forced Levy"],
    wonder: "Kalasan Temple",
    civilization_bonuses: [
      "Advancing in Age is +80% faster.",
      "Fish Traps are 33% cheaper.",
      "Fish Traps provide unlimited food.",
      "Battle Elephants are 30% cheaper."
    ],
    team_bonus: "Docks have double Line of Sight."
  },
  {
    id: 30,
    checked: false,
    name: "Vietnamese",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/0/07/CivIcon-Vietnamese.png/revision/latest?cb=20191107173409",
    speciality: "Archers",
    unique_unit: ["Rattan Archer", "Imperial Skirmisher"],
    unique_technologies: ["Chatras", "Paper Money"],
    wonder: "Bút Tháp",
    civilization_bonuses: [
      "Reveal enemy positions at game start.",
      "Archery Range units have +20% HP.",
      "Conscription is free."
    ],
    team_bonus: "Imperial Skirmishers are available at the Archery Range."
  },
  {
    id: 31,
    checked: false,
    name: "Bulgarians",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/c/ce/CivIcon-Bulgarians.png/revision/latest?cb=20191107173130",
    speciality: "Infantry and Cavalry",
    unique_unit: ["Konnik"],
    unique_technologies: ["Stirrups", "Bagains"],
    wonder: "Preslav Round Church",
    civilization_bonuses: [
      "Militia-line upgrades free.",
      "Town Centers cost -50% stone.",
      "Can build Krepost."
    ],
    team_bonus: "Blacksmiths work 50% faster."
  },
  {
    id: 32,
    checked: false,
    name: "Cumans",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/c/cc/CivIcon-Cumans.png/revision/latest?cb=20191107173133",
    speciality: "Cavalry",
    unique_unit: ["Kipchak"],
    unique_technologies: ["Steppe Husbandry", "Cuman Mercenaries"],
    wonder: "Sarkel Fortress (ruined)",
    civilization_bonuses: [
      "Additional Town Center can be built in the Feudal Age.",
      "Siege Workshops and Battering Ram available in the Feudal Age.",
      "Cavalry move 5% faster in the Feudal Age, 10% faster in Castle Age, and 15% faster in Imperial Age."
    ],
    team_bonus: "Palisade Walls have +50% hit points."
  },
  {
    id: 33,
    checked: false,
    name: "Lithuanians",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/0/0d/CivIcon-Lithuanians.png/revision/latest?cb=20191107173241",
    speciality: "Cavalry and Monks",
    unique_unit: ["Leitis"],
    unique_technologies: ["Hill Forts", "Tower Shields"],
    wonder: "Trakai Island Castle",
    civilization_bonuses: [
      "Start with +150 food.",
      "Spearman-line and Skirmishers move 10% faster.",
      "Each garrisoned Relic gives +1 attack to Knights and Leitis (maximum +4)."
    ],
    team_bonus: "Monastery works 20% faster."
  },
  {
    id: 34,
    checked: false,
    name: "Tatars",
    coat_of_arms:
      "https://vignette.wikia.nocookie.net/ageofempires/images/f/f2/CivIcon-Tatars.png/revision/latest?cb=20191107173338",
    speciality: "Cavalry archers",
    unique_unit: ["Keshik"],
    unique_technologies: ["Silk Armor", "Timurid Siegecraft"],
    wonder: "Ulugh Beg Observatory",
    civilization_bonuses: [
      "Herdables contain +50% food.",
      "Units deal +25% damage when attacking from hills (stacks with the regular hill attack bonus).",
      "Parthian Tactics are free."
    ],
    team_bonus: "Cavalry Archers +2 LOS."
  }
];
