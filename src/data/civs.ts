import CivilizationInterface from '../interfaces/Civilization.interface';

export const civilizationData: CivilizationInterface[] = [
  {
    id: 0,
    name: 'Britons',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/a/ae/CivIcon-Britons.png/revision/latest?cb=20191107173130',
    speciality: 'Foot archers',
    uniqueUnit: ['Longbowman'],
    uniqueTechnologies: ['Yeomen', 'Warwolf'],
    wonder:
      'Aachen Cathedral (before Definitive Edition) / Chichester Cathedral (in the Definitive Edition)',
    civilizationBonuses: [
      'Town Centers cost -50% wood starting in the Castle Age.',
      'Foot archers (except Skirmishers) have +1/+2 range in the Castle/Imperial Age.',
      'Shepherds work 25% faster.'
    ],
    teamBonus: 'Archery Ranges work 20% faster.'
  },
  {
    id: 1,
    name: 'Byzantines',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/2/27/CivIcon-Byzantines.png/revision/latest?cb=20191107173131',
    speciality: 'Defense',
    uniqueUnit: ['Cataphract'],
    uniqueTechnologies: ['Greek Fire', 'Logistica'],
    wonder: 'Hagia Sophia',
    civilizationBonuses: [
      'Buildings have +10%/+20%/+30%/+40% HP in the Dark/Feudal/Castle/Imperial Age.',
      'Camel Riders, Skirmishers, and the Spearman lines are 25% cheaper.',
      'Fire Ships attack 20% faster.',
      'Advancing to the Imperial Age is 33% cheaper.',
      'Town Watch is free.'
    ],
    teamBonus: 'Monks heal 50% faster.'
  },
  {
    id: 2,
    name: 'Celts',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/5/59/CivIcon-Celts.png/revision/latest?cb=20191107173132',
    speciality: 'Infantry and siege weapons',
    uniqueUnit: ['Woad Raider'],
    uniqueTechnologies: ['Stronghold', 'Furor Celtica'],
    wonder: 'Rock of Cashel',
    civilizationBonuses: [
      'Infantry units move 15% faster.',
      'Lumberjacks work 15% faster.',
      'Siege weapons fire +20% faster.',
      'Enemy herdables can be converted regardless of enemy units next to them.'
    ],
    teamBonus: 'Siege Workshops work 20% faster.'
  },
  {
    id: 3,
    name: 'Chinese',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/c/cc/CivIcon-Chinese.png/revision/latest?cb=20191107173132',
    speciality: 'Archers',
    uniqueUnit: ['Chu Ko Nu'],
    uniqueTechnologies: ['Great Wall', 'Rocketry'],
    wonder: 'Temple of Heaven',
    civilizationBonuses: [
      'Start game with three extra Villagers, but with -200 food and -50 wood.',
      'Town Center supports ten population (instead of five).',
      'Technologies are 10%/15%/20% cheaper in the Feudal/Castle/Imperial Age.',
      'Demolition Ships have +50% HP.'
    ],
    teamBonus: 'Farms start with +45 food.'
  },
  {
    id: 4,
    name: 'Franks',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/1/1b/CivIcon-Franks.png/revision/latest?cb=20191107173237',
    speciality: 'Cavalry',
    uniqueUnit: ['Throwing Axeman'],
    uniqueTechnologies: ['Chivalry', 'Bearded Axe'],
    wonder: 'St. Vitus Cathedral',
    civilizationBonuses: [
      'Farm upgrades are free.',
      'Castles are 25% cheaper.',
      'Cavalry have +20% HP.',
      'Foragers work 25% faster.'
    ],
    teamBonus: 'Knights have +2 Line of Sight.'
  },
  {
    id: 5,
    name: 'Goths',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/2/24/CivIcon-Goths.png/revision/latest?cb=20191107173238',
    speciality: 'Infantry',
    uniqueUnit: ['Huskarl'],
    uniqueTechnologies: ['Anarchy', 'Perfusion'],
    wonder: 'Mausoleum of Theoderic I',
    civilizationBonuses: [
      'Infantry are 35% cheaper starting in the Feudal Age.',
      'Infantry have +1 attack bonus against standard buildings.',
      'Villagers have +5 attack against Wild Boars and carry +15 food from hunting.',
      '+10 population cap in the Imperial Age.'
    ],
    teamBonus: 'Barracks work 20% faster.'
  },
  {
    id: 6,
    name: 'Japanese',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/9/9a/CivIcon-Japanese.png/revision/latest?cb=20191107173240',
    speciality: 'Infantry',
    uniqueUnit: ['Samurai'],
    uniqueTechnologies: ['Yasama', 'Kataparuto'],
    wonder: 'Tōdai-ji',
    civilizationBonuses: [
      'Fishing Ships have double HP, +2 pierce armor, and work 5%/10%/15%/20% faster in the Dark/Feudal/Castle/Imperial Age.',
      'Mills, Lumber Camps and Mining Camps are 50% cheaper.',
      'Infantry attack 25% faster starting in the Feudal Age.'
    ],
    teamBonus: 'Galleys have a +50% longer Line of Sight.'
  },
  {
    id: 7,
    name: 'Mongols',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/1/10/CivIcon-Mongols.png/revision/latest?cb=20191107173335',
    speciality: 'Cavalry archers',
    uniqueUnit: ['Mangudai'],
    uniqueTechnologies: ['Nomads', 'Drill'],
    wonder: 'Great Tent of Genghis Khan',
    civilizationBonuses: [
      'Cavalry archers fire 25% faster.',
      'Light Cavalry and Hussars have +30% HP.',
      'Hunters work +50% faster.'
    ],
    teamBonus: 'The Scout Cavalry line has +2 Line of Sight.'
  },
  {
    id: 8,
    name: 'Persians',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/a/ad/CivIcon-Persians.png/revision/latest?cb=20191107173335',
    speciality: 'Cavalry',
    uniqueUnit: ['War Elephant'],
    uniqueTechnologies: ['Kamandaran', 'Mahouts'],
    wonder: 'Taq Kasra',
    civilizationBonuses: [
      'Start game with +50 food and +50 wood.',
      'Town Centers and Docks have double HP and work 10%/15%/20% faster in the Feudal/Castle/Imperial Age.'
    ],
    teamBonus: 'Knights have +2 attack against archers.'
  },
  {
    id: 9,
    name: 'Saracens',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/5/59/CivIcon-Saracens.png/revision/latest?cb=20191107173336',
    speciality: 'Cavalry and navy',
    uniqueUnit: ['Mameluke'],
    uniqueTechnologies: ['Madrasah', 'Zealotry'],
    wonder: 'Great Mosque of Samarra',
    civilizationBonuses: [
      'The commodity trading fee is 5%.',
      'Markets cost -75 wood.',
      'Transport Ships have double HP and +5 carry capacity.',
      'Galleys attack 20% faster.',
      'Cavalry Archers have +4 attack against standard buildings.'
    ],
    teamBonus: 'teamBonus: : Foot archers have +2 attack against standard buildings.'
  },
  {
    id: 10,
    name: 'Teutons',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/3/3f/CivIcon-Teutons.png/revision/latest?cb=20191107173408',
    speciality: 'Infantry',
    uniqueUnit: ['Teutonic Knight'],
    uniqueTechnologies: ['Ironclad', 'Crenellations'],
    wonder: 'Maria Laach Abbey',
    civilizationBonuses: [
      'Monks have double healing range.',
      'Towers garrison twice as many units.',
      'Murder Holes are free.',
      'Farms are 33% cheaper.',
      'Town Centers can garrison +10 units.'
    ],
    teamBonus: 'Units resist conversion.'
  },
  {
    id: 11,
    name: 'Turks',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/1/1c/CivIcon-Turks.png/revision/latest?cb=20191107173409',
    speciality: 'Gunpowder units',
    uniqueUnit: ['Janissary'],
    uniqueTechnologies: ['Sipahi', 'Artillery'],
    wonder: 'Selimiye Mosque',
    civilizationBonuses: [
      'Gunpowder units have +25% HP.',
      'Gunpowder technologies are 50% cheaper.',
      'Chemistry is free.',
      'Gold Miners work 20% faster.',
      'Light Cavalry and Hussar upgrades are free.'
    ],
    teamBonus: 'Gunpowder units are created 20% faster.'
  },
  {
    id: 12,
    name: 'Vikings',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/c/c9/CivIcon-Vikings.png/revision/latest?cb=20191107173410',
    speciality: 'Infantry and navy',
    uniqueUnit: ['Berserk', 'Longboat'],
    uniqueTechnologies: ['Chieftains', 'Berserkergang'],
    wonder: 'Borgund Stave Church',
    civilizationBonuses: [
      'Warships are 15%/15%/20% cheaper in the Feudal/Castle/Imperial Age.',
      'Infantry have +10%/+15%/+20% HP in the Feudal/Castle/Imperial Age.',
      'Wheelbarrow and Hand Cart are free.'
    ],
    teamBonus: 'Docks are 15% cheaper.'
  },
  {
    id: 13,
    name: 'Aztecs',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/0/0c/CivIcon-Aztecs.png/revision/latest?cb=20191107173129',
    speciality: 'Monks and infantry',
    uniqueUnit: ['Jaguar Warrior'],
    uniqueTechnologies: ['Atlatl', 'Garland Wars'],
    wonder: 'Great Pyramid of Tenochtitlan',
    civilizationBonuses: [
      'Start the game with an Eagle Scout.',
      'Villagers carry +5 extra resources.',
      'All military units are created 15% faster.',
      'Monks gain 5 HP for every researched Monastery technology.',
      'Start with +50 gold.'
    ],
    teamBonus: 'Relics generate +33% gold.'
  },
  {
    id: 14,
    name: 'Huns',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/1/17/CivIcon-Huns.png/revision/latest?cb=20191107173238',
    speciality: 'Cavalry',
    uniqueUnit: ['Tarkan'],
    uniqueTechnologies: ['Marauders', 'Atheism'],
    wonder: 'Arch of Constantine (ruined)',
    civilizationBonuses: [
      'Start the game with -100 wood, but with the population cap at the maximum.',
      'Cavalry Archers are 10%/20% cheaper in the Castle/Imperial Age.',
      'Trebuchets have +35% accuracy against units.'
    ],
    teamBonus: 'Stables work 20% faster.'
  },
  {
    id: 15,
    name: 'Koreans',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/7/73/CivIcon-Koreans.png/revision/latest?cb=20191107173241',
    speciality: 'Towers and navy',
    uniqueUnit: ['War Wagon', 'Turtle Ship'],
    uniqueTechnologies: ['Panokseon', 'Shinkichon'],
    wonder: 'Hwangnyong Temple',
    civilizationBonuses: [
      'Villagers have +3 Line of Sight.',
      'Stone Miners work 20% faster.',
      'Tower upgrades are free (Bombard Tower requires Chemistry).',
      'Towers (except Bombard Towers) have +1/+2 range in the Castle/Imperial Age.',
      'Fortifications are built 33% faster.'
    ],
    teamBonus: 'Mangonel line minimum range reduced.'
  },
  {
    id: 16,
    name: 'Mayans',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/0/05/CivIcon-Mayans.png/revision/latest?cb=20191107173335',
    speciality: 'Archers',
    uniqueUnit: ['Plumed Archer'],
    uniqueTechnologies: ['Obsidian Arrows', 'El Dorado'],
    wonder: 'Tikal Temple I',
    civilizationBonuses: [
      'Start the game with an Eagle Scout.',
      'Start the game with +1 Villager, but with -50 food.',
      'Resources last 15% longer.',
      'Foot archers are 10%/20%/30% cheaper in the Feudal/Castle/Imperial Age.'
    ],
    teamBonus: 'Walls are 50% cheaper.'
  },
  {
    id: 17,
    name: 'Spanish',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/0/0a/CivIcon-Spanish.png/revision/latest?cb=20191107173337',
    speciality: 'Monks and gunpowder units',
    uniqueUnit: ['Conquistador', 'Missionary'],
    uniqueTechnologies: ['Inquisition', 'Supremacy'],
    wonder: 'Torre del Oro',
    civilizationBonuses: [
      'Builders work 30% faster.',
      'Blacksmith upgrades cost no gold.',
      'Cannon Galleons have better accuracy and faster cannonballs.',
      'Hand Cannoneers and Bombard Cannons fire 15% faster.'
    ],
    teamBonus: 'Trade units generate +25% gold.'
  },
  {
    id: 18,
    name: 'Incas',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/5/5e/CivIcon-Incas.png/revision/latest?cb=20191107173239',
    speciality: 'Infantry',
    uniqueUnit: ['Kamayuk', 'Slinger'],
    uniqueTechnologies: ['Andean Sling', 'Couriers'],
    wonder: 'Temple of the Sun at Macchu Picchu',
    civilizationBonuses: [
      'Start the game with an Eagle Scout.',
      'Start with a free Llama.',
      'Villagers benefit from Blacksmith infantry upgrades.',
      'Houses support 10 population.',
      'Buildings cost -15% stone.'
    ],
    teamBonus: 'Farms are built 50% faster.'
  },
  {
    id: 19,
    name: 'Indians',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/8/8b/CivIcon-Indians.png/revision/latest?cb=20191107173239',
    speciality: 'Camel Riders and gunpowder units',
    uniqueUnit: ['Elephant Archer', 'Imperial Camel Rider'],
    uniqueTechnologies: ['Sultans', 'Shatagni'],
    wonder:
      'Gol Gumbaz (before Rise of the Rajas) / Brihadeeswarar Temple (since Rise of the Rajas)',
    civilizationBonuses: [
      'Fishermen work 15% faster and carry +15 food.',
      'Villagers are 10%/15%/20%/25% cheaper in the Dark/Feudal/Castle/Imperial Age.',
      'Camel Riders have +1 pierce armor.'
    ],
    teamBonus: 'Camels have +6 attack against buildings.'
  },
  {
    id: 20,
    name: 'Italians',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/e/e1/CivIcon-Italians.png/revision/latest?cb=20191116050557',
    speciality: 'Navy and archers',
    uniqueUnit: ['Genoese Crossbowman', 'Condottiero'],
    uniqueTechnologies: ['Pavise', 'Silk Road'],
    wonder: 'Genoa Cathedral, Cathedral of St. Lawrence',
    civilizationBonuses: [
      'Advancing to the next Age is 15% cheaper.',
      'Dock technologies are 50% cheaper.',
      'Fishing Ships are 20% cheaper.',
      'Gunpowder units are 20% cheaper.'
    ],
    teamBonus: 'Condottieri are available at the Barracks.'
  },
  {
    id: 21,
    name: 'Magyars',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/6/68/CivIcon-Magyars.png/revision/latest?cb=20191107173242',
    speciality: 'Cavalry',
    uniqueUnit: ['Magyar Huszar'],
    uniqueTechnologies: ['Corvinian Army', 'Recurve Bow'],
    wonder: 'Hunyad Castle',
    civilizationBonuses: [
      'Forging, Iron Casting, and Blast Furnace are free.',
      'Scout Cavalry line is 15% cheaper.',
      'Villagers kill wild animals in one strike.'
    ],
    teamBonus: 'Foot archers have +2 Line of Sight.'
  },
  {
    id: 22,
    name: 'Slavs',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/1/12/CivIcon-Slavs.png/revision/latest?cb=20191107173337',
    speciality: 'Infantry and siege weapons',
    uniqueUnit: ['Boyar'],
    uniqueTechnologies: ['Orthodoxy', 'Druzhina'],
    wonder: 'Kizhi Pogost',
    civilizationBonuses: [
      'Farmers work 15% faster.',
      'Tracking is free.',
      'Siege Workshop units are 15% cheaper.'
    ],
    teamBonus: 'Military buildings (excluding Castles and Docks) provide +5 population.'
  },
  {
    id: 23,
    name: 'Berbers',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/7/71/CivIcon-Berbers.png/revision/latest?cb=20191107173130',
    speciality: 'Navy and cavalry',
    uniqueUnit: ['Camel Archer', 'Genitour'],
    uniqueTechnologies: ['Kasbah', 'Maghrabi Camels'],
    wonder: 'Hassan Tower',
    civilizationBonuses: [
      'Villagers move +10% faster.',
      'Stable units are 15%/20% cheaper in the Castle/Imperial Age.',
      'Ships move +10% faster.'
    ],
    teamBonus: 'Genitour are available at the Archery Range.'
  },
  {
    id: 24,
    name: 'Ethiopians',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/c/cb/CivIcon-Ethiopians.png/revision/latest?cb=20191107173133',
    speciality: 'Archers and siege weapons',
    uniqueUnit: ['Shotel Warrior'],
    uniqueTechnologies: ['Royal Heirs', 'Torsion Engines'],
    wonder: 'Biete Amanuel',
    civilizationBonuses: [
      'Archers fire +15% faster.',
      'Receive +100 food and +100 gold whenever a new Age is reached.',
      'The Pikeman upgrade is free.'
    ],
    teamBonus: 'Towers and Outposts have +3 Line of Sight.'
  },
  {
    id: 25,
    name: 'Malians',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/8/80/CivIcon-Malians.png/revision/latest?cb=20191107173334',
    speciality: 'Infantry',
    uniqueUnit: ['Gbeto'],
    uniqueTechnologies: ['Tigui', 'Farimba'],
    wonder: 'Great Mosque of Djenné',
    civilizationBonuses: [
      'Buildings cost -15% wood (except Farms).',
      'Barracks units have +1/+2/+3 pierce armor in the Feudal/Castle/Imperial Age.',
      'Gold Mining is free.'
    ],
    teamBonus: 'Universities research +80% faster.'
  },
  {
    id: 26,
    name: 'Portuguese',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/6/60/CivIcon-Portuguese.png/revision/latest?cb=20191107173336',
    speciality: 'Navy and gunpowder units',
    uniqueUnit: ['Organ Gun', 'Caravel'],
    uniqueTechnologies: ['Carrack', 'Arquebus'],
    wonder: 'Belém Tower',
    civilizationBonuses: [
      'All units cost -15% gold.',
      'All ships have +10% HP.',
      'The Feitoria becomes available for building in the Imperial Age.'
    ],
    teamBonus: 'Free Cartography from the beginning of the game.'
  },
  {
    id: 27,
    name: 'Burmese',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/7/79/CivIcon-Burmese.png/revision/latest?cb=20191107173131',
    speciality: 'Monks and elephants',
    uniqueUnit: ['Arambai'],
    uniqueTechnologies: ['Howdah', 'Manipur Cavalry'],
    wonder: 'Shwezigon Pagoda',
    civilizationBonuses: [
      'Lumber Camp technologies are free.',
      'Infantry has +1/+2/+3 attack in the Feudal/Castle/Imperial Age.',
      'Monastery technologies are 50% cheaper.'
    ],
    teamBonus: 'Relics are visible on the map from the game start.'
  },
  {
    id: 28,
    name: 'Khmer',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/e/ec/CivIcon-Khmer.png/revision/latest?cb=20191107173240',
    speciality: 'Siege weapons and elephants',
    uniqueUnit: ['Ballista Elephant'],
    uniqueTechnologies: ['Tusk Swords', 'Double Crossbow'],
    wonder: 'Angkor Wat',
    civilizationBonuses: [
      'No buildings are required to construct certain buildings or advance in Age.',
      'Battle Elephants move +15% faster.',
      'Khmer Villagers drop off food from farms (1 unit at a time) without needing a drop site.',
      'Villagers can garrison in Houses.'
    ],
    teamBonus: 'Scorpions have +1 range.'
  },
  {
    id: 29,
    name: 'Malay',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/c/c3/CivIcon-Malay.png/revision/latest?cb=20191107173334',
    speciality: 'Navy',
    uniqueUnit: ['Karambit Warrior'],
    uniqueTechnologies: ['Thalassocracy', 'Forced Levy'],
    wonder: 'Kalasan Temple',
    civilizationBonuses: [
      'Advancing in Age is +80% faster.',
      'Fish Traps are 33% cheaper.',
      'Fish Traps provide unlimited food.',
      'Battle Elephants are 30% cheaper.'
    ],
    teamBonus: 'Docks have double Line of Sight.'
  },
  {
    id: 30,
    name: 'Vietnamese',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/0/07/CivIcon-Vietnamese.png/revision/latest?cb=20191107173409',
    speciality: 'Archers',
    uniqueUnit: ['Rattan Archer', 'Imperial Skirmisher'],
    uniqueTechnologies: ['Chatras', 'Paper Money'],
    wonder: 'Bút Tháp',
    civilizationBonuses: [
      'Reveal enemy positions at game start.',
      'Archery Range units have +20% HP.',
      'Conscription is free.'
    ],
    teamBonus: 'Imperial Skirmishers are available at the Archery Range.'
  },
  {
    id: 31,
    name: 'Bulgarians',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/c/ce/CivIcon-Bulgarians.png/revision/latest?cb=20191107173130',
    speciality: 'Infantry and Cavalry',
    uniqueUnit: ['Konnik'],
    uniqueTechnologies: ['Stirrups', 'Bagains'],
    wonder: 'Preslav Round Church',
    civilizationBonuses: [
      'Militia-line upgrades free.',
      'Town Centers cost -50% stone.',
      'Can build Krepost.'
    ],
    teamBonus: 'Blacksmiths work 50% faster.'
  },
  {
    id: 32,
    name: 'Cumans',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/c/cc/CivIcon-Cumans.png/revision/latest?cb=20191107173133',
    speciality: 'Cavalry',
    uniqueUnit: ['Kipchak'],
    uniqueTechnologies: ['Steppe Husbandry', 'Cuman Mercenaries'],
    wonder: 'Sarkel Fortress (ruined)',
    civilizationBonuses: [
      'Additional Town Center can be built in the Feudal Age.',
      'Siege Workshops and Battering Ram available in the Feudal Age.',
      'Cavalry move 5% faster in the Feudal Age, 10% faster in Castle Age, and 15% faster in Imperial Age.'
    ],
    teamBonus: 'Palisade Walls have +50% hit points.'
  },
  {
    id: 33,
    name: 'Lithuanians',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/0/0d/CivIcon-Lithuanians.png/revision/latest?cb=20191107173241',
    speciality: 'Cavalry and Monks',
    uniqueUnit: ['Leitis'],
    uniqueTechnologies: ['Hill Forts', 'Tower Shields'],
    wonder: 'Trakai Island Castle',
    civilizationBonuses: [
      'Start with +150 food.',
      'Spearman-line and Skirmishers move 10% faster.',
      'Each garrisoned Relic gives +1 attack to Knights and Leitis (maximum +4).'
    ],
    teamBonus: 'Monastery works 20% faster.'
  },
  {
    id: 34,
    name: 'Tatars',
    coatOfArms:
      'https://vignette.wikia.nocookie.net/ageofempires/images/f/f2/CivIcon-Tatars.png/revision/latest?cb=20191107173338',
    speciality: 'Cavalry archers',
    uniqueUnit: ['Keshik'],
    uniqueTechnologies: ['Silk Armor', 'Timurid Siegecraft'],
    wonder: 'Ulugh Beg Observatory',
    civilizationBonuses: [
      'Herdables contain +50% food.',
      'Units deal +25% damage when attacking from hills (stacks with the regular hill attack bonus).',
      'Parthian Tactics are free.'
    ],
    teamBonus: 'Cavalry Archers +2 LOS.'
  }
];
