'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [
      { title: 'Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration', cover: './images/18077903.jpg', published: new Date('July 24th 2009'), summary: '', createdAt: new Date(), updatedAt: new Date()},
      { title: 'The Shining', cover: './images/11588.jpg', published: new Date('January 28th 1977'), summary: 'Jack Torrance\'s new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he\'ll have plenty of time to spend reconnecting with his family and working on his writing. But as the harsh winter weather sets in, the idyllic location feels ever more remote...and more sinister. And the only one to notice the strange and terrible forces gathering around the Overlook is Danny Torrance, a uniquely gifted five-year-old.', createdAt: new Date(), updatedAt: new Date()},
      { title: 'It', cover: './images/830502.jpg', published: new Date('October 1st 1987'), summary: '', createdAt: new Date(), updatedAt: new Date()},
      { title: 'The Stand', cover: './images/149267.jpg', published: new Date('May 1st 1990'), summary: "Welcome to Derry, Maine ...It’s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real ...They were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But none of them can withstand the force that has drawn them back to Derry to face the nightmare without an end, and the evil without a name.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'The Catcher in the Rye', cover: './images/5107.jpg', published: new Date('January 30th 2001'), summary: "The hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caulfield. Through circumstances that tend to preclude adult, secondhand description, he leaves his prep school in Pennsylvania and goes underground in New York City for three days. The boy himself is at once too simple and too complex for us to make any final comment about him or his story. Perhaps the safest thing we can say about Holden is that he was born in the world not just strongly attracted to beauty but, almost, hopelessly impaled on it. There are many voices in this novel: children's voices, adult voices, underground voices-but Holden's voice is the most eloquent of all. Transcending his own vernacular, yet remaining marvelously faithful to it, he issues a perfectly articulated cry of mixed pain and pleasure. However, like most lovers and clowns and poets of the higher orders, he keeps most of the pain to, and for, himself. The pleasure he gives away, or sets aside, with all his heart. It is there for the reader who can handle it to keep.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Franny and Zooey', cover: './images/5113.jpg', published: new Date('January 30th 2001'), summary: 'The short story, Franny, takes place in an unnamed college town and tells the tale of an undergraduate who is becoming disenchanted with the selfishness and inauthenticity she perceives all around her.', createdAt: new Date(), updatedAt: new Date()},
      { title: 'Infinite Jest', cover: './images/6759.jpg', published: new Date('2005'), summary: "A gargantuan, mind-altering tragi-comedy about the Pursuit of Happiness in America.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Consider the Lobster and Other Essays', cover: './images/6751.jpg', published: new Date(), summary: "Do lobsters feel pain? Did Franz Kafka have a funny bone? What is John Updike's deal, anyway? And what happens when adult video starlets meet their fans in person? David Foster Wallace answers these questions and more in essays that are also enthralling narrative adventures. Whether covering the three-ring circus of a vicious presidential race, plunging into the wars between dictionary writers, or confronting the World's Largest Lobster Cooker at the annual Maine Lobster Festival, Wallace projects a quality of thought that is uniquely his and a voice as powerful and distinct as any in American letters.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Do Androids Dream of Electric Sheep?', cover: './images/36402034._SY475_.jpg', published: new Date('February 26th 2008'), summary: "It was January 2021, and Rick Deckard had a license to kill. Somewhere among the hordes of humans out there, lurked several rogue androids. Deckard's assignment--find them and then...'retire' them. Trouble was, the androids all looked exactly like humans, and they didn't want to be found!", createdAt: new Date(), updatedAt: new Date()},
      { title: 'The Man in the High Castle', cover: './images', published: new Date(), summary: "", createdAt: new Date(), updatedAt: new Date()},
      { title: 'White Fragility', cover: './images/white.jpg', published: new Date(), summary: "Referring to the defensive moves that white people make when challenged racially, white fragility is characterized by emotions such as anger, fear, and guilt and by behaviors including argumentation and silence. These behaviors, in turn, function to reinstate white racial equilibrium and prevent any meaningful cross-racial dialogue. In this in-depth exploration, anti-racist educator Robin DiAngelo examines how white fragility develops, how it protects racial inequality, and what can be done to engage more constructively.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'The Sympathizer', cover: './images/23168277.jpg', published: new Date(), summary: "t is April 1975, and Saigon is in chaos. At his villa, a general of the South Vietnamese army is drinking whiskey and, with the help of his trusted captain, drawing up a list of those who will be given passage aboard the last flights out of the country. The general and his compatriots start a new life in Los Angeles, unaware that one among their number", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Things That Make White People Uncomfortable', cover: './images/37823757', published: new Date(), summary: "", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Daughter of Moloka', cover: './images/daughter.jpg', published: new Date(), summary: "This companion tale to Moloka'i tells the story of Ruth, the daughter that Rachel Kalama—quarantined for most of her life at the isolated leprosy settlement of Kalaupapa—was forced to give up at birth.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Between The World And Me', cover: './images/didg.jpg', published: new Date(), summary: "This is your country, this is your world, this is your body, and you must find some way to live within the all of it.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Freedom Is a Constant Struggle',cover:'./images', published: new Date(), summary: "In these newly collected essays, interviews, and speeches, world-renowned activist and scholar Angela Y. Davis illuminates the connections between struggles against state violence and oppression throughout history and around the world", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Eye of the World', cover: './images/eyeWorld.jpg', published: new Date(), summary: "The Wheel of Time turns and Ages come and pass. What was, what will be, and what is, may yet fall under the Shadow.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'The Sympathizer', cover: './images', published: new Date(), summary: "It is April 1975, and Saigon is in chaos. At his villa, a general of the South Vietnamese army is drinking whiskey and, with the help of his trusted captain, drawing up a list of those who will be given passage aboard the last flights out of the country. The general and his compatriots start a new life in Los Angeles, unaware that one among their number, the captain, is secretly observing and reporting on the group to a higher-up in the Viet Cong.", createdAt: new Date(), updatedAt: new Date()},
      { title: '', cover: './images', published: new Date(), summary: "", createdAt: new Date(), updatedAt: new Date()},
      { title: '', cover: './images', published: new Date(), summary: "", createdAt: new Date(), updatedAt: new Date()},
      { title: '', cover: './images', published: new Date(), summary: "", createdAt: new Date(), updatedAt: new Date()},
      { title: '', cover: './images', published: new Date(), summary: "", createdAt: new Date(), updatedAt: new Date()},
      { title: '', cover: './images', published: new Date(), summary: "", createdAt: new Date(), updatedAt: new Date()},
      { title: 'OathBringer', cover: './images/OathBringer.jpg', published: new Date(), summary: "Three years ago, Lift asked a goddess to stop her from growing older--a wish she believed was granted. Now, in Edgedancer, the barely teenage nascent Knight Radiant finds that time stands still for no one. Although the young Azish emperor granted her safe haven from an executioner she knows only as Darkness, court life is suffocating the free-spirited Lift, who can't help heading to Yeddaw when she hears the relentless Darkness is there hunting people like her with budding powers. The downtrodden in Yeddaw have no champion, and Lift knows she must seize this awesome responsibility.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Words of Radiance', cover: './images/17332218.jpg', published: new Date(), summary: "Expected by his enemies to die the miserable death of a military slave, Kaladin survived to be given command of the royal bodyguards, a controversial first for a low-status darkeyes. Now he must protect the king and Dalinar from every common peril as well as the distinctly uncommon threat of the Assassin, all while secretly struggling to master remarkable new powers that are somehow linked to his honorspren, Syl.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'The Way of Kings', cover: './images/wayOf.jpg', published: new Date(), summary: "According to mythology mankind used to live in The Tranquiline Halls. Heaven. But then the Voidbringers assaulted and captured heaven, casting out God and men. Men took root on Roshar, the world of storms. And the Voidbringers followed...", createdAt: new Date(), updatedAt: new Date()},
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {})
  }
};
