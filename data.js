module.exports = {

	sim : {

		type : [
			'A simulation game',
			'A sim game',
			'A management game',
			'A god game',
			'A tycoon game',
			'A board game',
			'A card game',
		],

		action : [
			'buy',
			'sell',
			'amass',
			'muster',
			'trade',
			'farm',
			'buy and sell',
			'deal in',
			'harvest',
			'collect',
			'gather',
			'look after',
			'hoard',
			'organize',
		],

		resource : [
			'plants',
			'trees',
			'animals',
			'people',
			'workers',
			'employees',
			'citizens',
			'slaves',
			'gems',
			'gold',
			'crystals',
			'resources',
			'mana',
			'water',
			'power',
			'influence',
			'sheep',
			'timber',
			'ore',
			'souls',
			'monsters',
		],

		control : [
			'conquer',
			'influence',
			'manage',
			'control',
			'run',
			'command',
			'build',
			'expand',
			'exploit',
			'create',
			'oversee',
			'supervise',
			'govern',
			'dominate',
		],

		environment : [
			'hospital',
			'theme park',
			'dungeon',
			'farm',
			'civilization',
			'society',
			'gang',
			'business',
			'empire',
			'island',
			'space station',
			'moon base',
			'railroad',
			'house',
			'town',
			'city',
			'country',
			'planet'
		],

		reason : [
			'until time runs out',
			'in timed rounds',
			'faster than your opponents',
			'to make money',
			'to survive',
			'to defeat other players',
			'to win 3 rounds',
			'to defeat your opponents',
			'against the clock',
			'forever',
			'online',
			'against friends',
			'with friends',
		],

		templates : [
			'{{#with sim}} {{$ type}} where you {{$ action}} {{$ resource}} to {{$ control}} {{$ environment article=true}} {{/with}}',
			'{{#with sim}} {{$ type}} where you {{$ action}} {{$ resource}} and {{$ action}} {{$ resource}} to {{$ control}} {{$ environment article=true}} {{/with}}',
			'{{#with sim}} {{$ type}} where you {{$ action}} {{$ resource}} {{$ reason}} {{/with}}',
			'{{#with sim}} {{$ type}} where you {{$ action}} {{$ resource}} and {{$ action}} {{$ resource}} {{$ reason}} {{/with}}',
		]
	},

	action : {

		prefix : [
			'multiplayer',
			'cooperative',
			'online',
			'social',
			'on-rails',
			'tactical',
			'cover based',
			'top down',
			'squad based',
			'twin stick',
		],

		type : [
			'FPS',
			'first person game',
			'shooter',
			'shoot em up',
			'survival horror game',
			'stealth action game',
			'beat em-up',
			'hack n slash',
			'platformer',
			'roguelike',
		],

		attack : [
			'shoot',
			'shoot at',
			'intimidate',
			'kick',
			'punch',
			'assasinate',
			'argue with',
			'set fire to',
			'scream at',
			'torture',
			'chase',
			'punish',
			'hunt down',
			'crush',
			'eradicate',
			'sabotage',
			'wipe out',
			'annihilate',
			'lay waste to',
			'exterminate',
			'butcher',
			'snuff out',
			'erase',
			'main',
			'battle',
			'chop up',
			'explode',
			'stomp on',
			'beat down',
			'destroy',
			'take down',
			'melt the insides of',
			'ransack the homes of',
			'mercilessly slaughter',
			'go on a genocidal killing spree against',
			'devour the souls of',
		],

		enemies : [
			'nazis',
			'zombies',
			'zombie nazis',
			'goblins',
			'dragons',
			'bugs',
			'insects',
			'dinosaurs',
			'yetis',
			'orcs',
			'rats',
			'bats',
			'wasps',
			'golems',
			'elementals',
			'fairies',
			'lizardmen',
			'spiders',
			'cyborgs',
			'spies',
			'skeletons',
			'ghosts',
			'reanimated corpses',
			'vampires',
			'werewolves',
			'vikings',
			'gangsters',
			'drug dealers',
			'robots',
			'pirates',
			'demons',
			'devils',
			'cultists',
			'tentacled horrors',
			'blobs of ooze',
			'evil corporations',
			'mutated creatures',
			'rabid animals',
			'nightmare creatures from beyond our universe',
			'possessed townsfolk',
			'rogue government agents',
			'insurgents',
			'hillbillies',
			'devil worshippers'
		],

		modifier : [
			'in the face',
			'repeatedly',
			'from above',
			'from below',
			'from behind',
			'for fame',
			'for money',
			'with customizable weapons',
			'using the power of your mind',
			'with shurikens',
			'with swords',
			'with machine guns',
			'with a bazooka',
			'with grenades',
			'with a magical sword',
			'with explosive charges',
			'with nuclear weapons',
			'with a tank',
			'from the shadows',
			'with your bare hands',
			'with magical powers',
			'with an experimental physics manipulation weapon',
			'using vehicles'
		],

		extra : [
			'and eat the corpses',
			'and get cash for each kill',
			'and you are invincible',
			'and you are invisible',
			'and your friend betrays you at the end',
			'and you can rewind time',
			'and you can slow down time',
			'and you can control gravity',
			'but you cannot jump',
			'but it turns out you were the bad guy the whole time',
			'but it is all a dream',
			'but it is all a simulation',
			'but you die in one hit',
		],

		templates : [
			'{{#with action}} {{$ prefix article=true}} {{$ type}} where you {{$ attack}} {{$ enemies}} {{$ modifier}} {{/with}}',
			'{{#with action}} {{$ prefix article=true}} {{$ type}} where you {{$ attack}} {{$ enemies}} {{$ extra}} {{/with}}',
			'{{#with action}} {{$ prefix article=true}} {{$ type}} where you {{$ attack}} {{$ enemies}} {{$ modifier}} {{$ extra}} {{/with}}',
		]
	},

	weapon : {

		have : [
			'have',
			'wear',
			'wield',
			'carry',
			'use',
			'brandish',
		],

		type : [
			'sword',
			'dagger',
			'knife',
			'pistol',
			'machine gun',
			'shotgun',
			'rifle',
			'cannon',
			'bow',
			'crossbow',
			'sniper rifle',
			'assault rifle',
			'gatling gun',
			'bazooka',
			'spear',
			'shield',
			'jetpack',
			'glove',
			'helmet',
			'hat',
			'backpack',
			'visor',
			'ring',
		],

		effect : [
			'are on fire',
			'are remote controlled',
			'explode',
			'bounce off walls',
			'lock on to enemies',
			'ricochet wildly',
			'turn enemies to stone',
			'burn enemies',
			'entangle enemies',
			'terrify enemies',
			'split in two',
			'liquify enemies',
			'freeze enemies',
			'stun enemies',
			'absorb enemies health',
			'misfire occasionaly',
		],

		projectiles : [
			'knives',
			'bullets',
			'fireballs',
			'ice shards',
			'energy blasts',
			'lasers',
			'blobs of goop',
			'healing rays',
			'sound waves',
			'rockets',
			'shrink rays',
			'grenades',
			'bees',
			'sharks',
			'custard pies',
			'telekinetic blasts',
		],

		extra : [
			'with a long cooldown',
			'with a short cooldown',
			'but you can only use it once per level',
			'but using it costs you health',
			'and deals splash damage',
			'and can be upgraded',
			'and has infinite ammo',
			'and has limited ammo',
			'but is useless against some enemies',
			'but is more effective against some enemies',
			'and sometimes gets critical hits',
			'and damages the environment',
			'and looks awesome',
			'but looks stupid',
			'but has massive recoil',
		],

		verb : [
			'shoots',
			'deploys',
			'emits',
			'fires',
			'throws',
			'launches',
			'lobs',
		],

		templates : [
			'{{#with weapon}} A game where you {{$ have}} {{$ type article=true}} that {{$ effect singular=true}} {{$ extra}} {{/with}}',
			'{{#with weapon}} A game where you {{$ have}} {{$ type article=true}} that {{$ verb}} {{$ projectiles}} {{$ extra}} {{/with}}',
			'{{#with weapon}} A game where you {{$ have}} {{$ type article=true}} that {{$ verb}} {{$ projectiles}} that {{$ effect}} {{/with}}',
		]
	},

	character : {

		verb : [
			'play',
			'control',
			'are',
		],

		job : [
			'space marine',
			'soldier',
			'war veteran',
			'cowboy',
			'gangster',
			'scientist',
			'explorer',
			'pilot',
			'pirate',
			'smuggler',
			'robot',
			'mutant',
			'survivor',
			'test subject',
			'sailor',
			'super soldier',
			'shop keeper',
			'doctor',
			'rock star',
			'middle manager',
			'policeman',
			'minimum wage worker',
			'accountant',
			'chef',
			'traffic warden',
			'school teacher',
			'mime',
			'musician',
			'artist'
		],

		description : [
			'rugged',
			'grizzled',
			'psychotic',
			'depressed',
			'angry',
			'genocidal',
			'lost',
			'lonely',
			'young',
			'old',
			'retired',
			'famous',
			'paranoid',
			'starving',
			'clumsy',
			'vengeful',
			'manic',
			'repressed',
			'jealous',
			'muscular',
			'disguised',
			'desperate',
			'illiterate',
			'sickly',
			'mean',
			'miserly',
			'generous',
			'vapid',
			'celebrity',
			'domineering',
			'loud',
			'quiet',
		],

		thing : [
			'to dance',
			'to sing',
			'to paint',
			'fruit',
			'money',
			'killing things',
			'running',
			'violence',
			'pizza',
			'swimming',
			'violence',
			'social situations',
			'other people',
			'robots',
			'violence',
			'paperwork',
			'silence',
			'daylight',
			'mornings',
			'citrus fruits',
			'getting wet',
			'being cold',
			'hippies',
			'republicans',
		],

		does : [
			'get confused easily',
			'hoards collectables',
			'avoids conflict',
			'misses home',
			'wants to go home',
			'is afraid of the dark',
			'is afraid of cats',
			'has daddy issues',
			'wears vintage clothes',
			'listens to jazz music',
			'plays the guitar',
			'has body image issues',
			'lacks confidence',
			'watches too much tv',
			'enjoys life',
			'eats too much',
			'has repressed memories',
			'has anger issues',
			'struggles with maths',
			'longs for a quiet life',
		],

		templates : [
			'{{#with character}} A game where you {{$ verb}} {{$ description article=true}} {{$ job}} who loves {{$ thing}} {{/with}}',
			'{{#with character}} A game where you {{$ verb}} {{$ description article=true}} {{$ job}} who hates {{$ thing}} {{/with}}',
			'{{#with character}} A game where you {{$ verb}} {{$ description article=true}} {{$ job}} who loves {{$ thing}} but hates {{$ thing}} {{/with}}',
			'{{#with character}} A game where you {{$ verb}} {{$ description article=true}} {{$ job}} who loves {{$ thing}} and {{$ does}} {{/with}}',
			'{{#with character}} A game where you {{$ verb}} {{$ description article=true}} {{$ job}} who hates {{$ thing}} and {{$ does}} {{/with}}',
		]
	},

	adventure : {

		type : [
			'adventure game',
			'story driven game',
			'piece of interactive fiction',
			'RPG',
			'role playing game',
			'text adventure',
			'point and click game',
			'action RPG',
		],

		incident : [
			'meet a stranger',
			'discover a dark secret',
			'stumble upon a sinister plot',
			'witness a murder',
			'travel back in time',
			'travel forwards in time',
			'are involved in an accident',
			'are injured',
			'lose everything',
			'lose your memory',
			'lose a loved one',
			'wake up in a strange place',
			'are kidnapped',
			'have a bad day',
			'fall in love',
			'are given an important task',
			'must prove yourself',
		],

		act : [
			'gather a party',
			'gather supplies',
			'craft weapons',
			'explore the area',
			'assemble a team',
			'leave your home town',
			'train your skills',
			'gain special powers',
			'learn amazing new skills',
			'upgrade your equipment',
			'assemble an artifact',
			'piece together clues',
			'gather evidence',
			'perform menial chores',
			'kill monsters',
			'explore mysterious ruins',
			'explore a strange place',
			'experience new emotions',
			'overcome your fear',
			'become a warrior',
			'become the leader',
			'are put in charge',
			'collect equipment',
			'learn all you can',
			'escape captivity',
			'go an an epic quest',
			'go on a long journey',
			'visit strange new lands',
			'explore distant lands',
			'struggle against adversity',
			'face terrifying foes',
			'defeat numerous enemies',
			'vanquish determined enemies',
		],

		goal : [
			'gain levels',
			'get the girl',
			'find true love',
			'discover the truth',
			'redeem yourself',
			'find forgiveness',
			'save the day',
			'become the leader',
			'to prove yourself',
			'to impress girls',
			'undo your mistakes',
			'reveal the truth',
			'make up for the past',
			'disover yourself',
			'get rich',
			'look cool',
			'gain fabulous wealth',
			'uncover the secrets of your past',
			'save your family',
			'take down a corrupt government',
			'become amazingly wealthy',
			'escape your past',
		],

		style : [
			'gritty',
			'dark',
			'hyper realistic',
			'stylized',
			'colourful',
			'adult',
			'intense',
			'childish',
			'noir',
			'relaxing',
			'slapstick',
			'historical',
			'contemplative',
			'fast paced',
			'lonely',
			'thought provoking',
			'funny',
			'sarcastic',
			'satirical',
			'scary',
			'disturbing',
			'cartoon',
			'cell shaded',
			'light hearted',
			'open world',
			'cooperative',
			'multiplayer',
		],

		templates : [
			'{{#with adventure}} {{$ type article=true}} where you {{$ incident}} then {{$ act}} to {{$ goal}} {{/with}}',
			'{{#with adventure}} {{$ type article=true}} where you {{$ incident}} then {{$ act}} to {{$ goal}} {{/with}}',
			'{{#with adventure}} {{$ style article=true}} {{$ type }} where you {{$ incident}} then {{$ act}} to {{$ goal}} {{/with}}',
			'{{#with adventure}} {{$ style article=true}} {{$ type }} where you {{$ incident}} then {{$ act}} to {{$ goal}} {{/with}}',
		]

	},

	indie : {

		type : [
			'indie platformer',
			'game jam entry',
			'IGF entry',
			'experimental game',
			'student project',
			'art house game',
		],

		feature :  [
			'rogulike elements',
			'multiple endings',
			'difficult moral choices',
			'persistant elements',
			'permadeath',
			'crafting',
			'procedural content',
			'user generated content',
			'a high score table',
			'motion controls',
			'touch controls',
			'local multiplayer',
			'a powerful message',
			'an intriguing story',
			'difficult choices',
		],

		issue : [
			'religion',
			'politics',
			'gender',
			'identity',
			'self',
			'existance',
			'the meaning of life',
			'love',
			'loss',
			'death',
			'birth',
		],

		restriction : [
			'a 60 second countdown',
			'only 1 button',
			'only 2 buttons',
			'a limited palette',
			'only 3 colors',
			'8 bit graphics',
			'vector graphics',
			'16 bit graphics',
		],

		templates : [
			'{{#with indie}} {{$ type article=true}} with {{$ feature}}, {{$ feature}} and {{$ restriction}} {{/with}}',
			'{{#with indie}} {{$ type article=true}} which deals with {{$ issue}} and {{$ issue}} {{/with}}',
		]
	}


};
