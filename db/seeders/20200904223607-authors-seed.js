'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Authors', [
      {firstName: 'Stephen', lastName: 'King', authorPic: './images/ha8a4fea.bmp', born: Date('September 21, 1947'), biography: 'Stephen Edwin King was born the second son of Donald and Nellie Ruth Pillsbury King. After his father left them when Stephen was two, he and his older brother, David, were raised by his mother. Parts of his childhood were spent in Fort Wayne, Indiana, where his father\'s family was at the time, and in Stratford, Connecticut. When Stephen was eleven, his mother brought her children back to Durham, Maine, for good. Her parents, Guy and Nellie Pillsbury, had become incapacitated with old age, and Ruth King was persuaded by her sisters to take over the physical care of them. Other family members provided a small house in Durham and financial support. After Stephen\'s grandparents passed away, Mrs. King found work in the kitchens of Pineland, a nearby residential facility for the mentally challenged.\n\nStephen attended the grammar school in Durham and Lisbon Falls High School, graduating in 1966. From his sophomore year at the University of Maine at Orono, he wrote a weekly column for the school newspaper, THE MAINE CAMPUS. He was also active in student politics, serving as a member of the Student Senate. He came to support the anti-war movement on the Orono campus, arriving at his stance from a conservative view that the war in Vietnam was unconstitutional. He graduated in 1970, with a B.A. in English and qualified to teach on the high school level. A draft board examination immediately post-graduation found him 4-F on grounds of high blood pressure, limited vision, flat feet, and punctured eardrums.\n\nHe met Tabitha Spruce in the stacks of the Fogler Library at the University, where they both worked as students; they married in January of 1971. As Stephen was unable to find placement as a teacher immediately, the Kings lived on his earnings as a laborer at an industrial laundry, and her student loan and savings, with an occasional boost from a short story sale to men\'s magazines.\n\nStephen made his first professional short story sale ("The Glass Floor") to Startling Mystery Stories in 1967. Throughout the early years of his marriage, he continued to sell stories to men\'s magazines. Many were gathered into the Night Shift collection or appeared in other anthologies.\n\nIn the fall of 1971, Stephen began teaching English at Hampden Academy, the public high school in Hampden, Maine. Writing in the evenings and on the weekends, he continued to produce short stories and to work on novels.',
        website: '', createdAt: new Date(), createdAt: new Date()},
      {firstName: 'Ed', lastName: 'Catmull', authorPic: './images/5618463.jpg', born: Date('March 31, 1945'), biography: 'Edwin Earl "Ed" Catmull, PhD is a computer scientist and current president of Walt Disney Animation Studios, DisneyToon Studios, and Pixar Animation Studios. As a computer scientist, Catmull has contributed to many important developments in computer graphics.',
        website: '', createdAt: new Date(), createdAt: new Date()},
      {firstName: 'Amy', lastName: 'Wallace', authorPic: './images/noImage.jpg', born: Date('July 3, 1955'), biography: 'Amy Wallace (July 3, 1955 – August 10, 2013) was an American writer. She was the daughter of writers Irving Wallace and Sylvia Wallace and the sister of writer and populist historian David Wallechinsky. She was co-author of the bestselling book, The Book of Lists (1977).', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'J.D.', lastName: 'Salinger', authorPic: './images/ijg08yta.bmp', born: Date('January 01, 1919'), died: Date('January 27, 2010'), biography: "Jerome David Salinger was an American author, best known for his 1951 novel The Catcher in the Rye, as well as his reclusive nature. His last original published work was in 1965; he gave his last interview in 1980. Raised in Manhattan, Salinger began writing short stories while in secondary school, and published several stories in the early 1940s before serving in World War II. In 1948 he published the critically acclaimed story \"A Perfect Day for Bananafish\" in The New Yorker magazine, which became home to much of his subsequent work. In 1951 Salinger released his novel The Catcher in the Rye, an immediate popular success. His depiction of adolescent alienation and loss of innocence in the protagonist Holden Caulfield was influential, especially among adolescent readers. The novel remains widely read and controversial, selling around 250,000 copies a year.\n\nThe success of The Catcher in the Rye led to public attention and scrutiny: Salinger became reclusive, publishing new work less frequently. He followed Catcher with a short story collection, Nine Stories (1953), a collection of a novella and a short story, Franny and Zooey (1961), and a collection of two novellas, Raise High the Roof Beam, Carpenters and Seymour: An Introduction (1963). His last published work, a novella entitled \"Hapworth 16, 1924\", appeared in The New Yorker on June 19, 1965.\n\nAfterward, Salinger struggled with unwanted attention, including a legal battle in the 1980s with biographer Ian Hamilton, and the release in the late 1990s of memoirs written by two people close to him: Joyce Maynard, an ex-lover; and Margaret Salinger, his daughter. In 1996, a small publisher announced a deal with Salinger to publish \"Hapworth 16, 1924\" in book form, but amid the ensuing publicity, the release was indefinitely delayed. He made headlines around the globe in June 2009, after filing a lawsuit against another writer for copyright infringement resulting from that writer's use of one of Salinger's characters from The Catcher in the Rye. Salinger died of natural causes on January 27, 2010, at his home in Cornish, New Hampshire.", website: '', createdAt: new Date(''), updatedAt: new Date()},
      {firstName: 'David Foster', lastName: 'Wallace', authorPic: './images/oaiyerr8.bmp', born: Date('February 21, 1962'), died: Date('September 12, 2008'), biography: 'David Foster Wallace worked surprising turns on nearly everything: novels, journalism, vacation. His life was an information hunt, collecting hows and whys. "I received 500,000 discrete bits of information today," he once said, "of which maybe 25 are important. My job is to make some sense of it." He wanted to write "stuff about what it feels like to live. Instead of being a relief from what it feels like to live." Readers curled up in the nooks and clearings of his style: his comedy, his brilliance, his humaneness.\n\nHis life was a map that ends at the wrong destination. Wallace was an A student through high school, he played football, he played tennis, he wrote a philosophy thesis and a novel before he graduated from Amherst, he went to writing school, published the novel, made a city of squalling, bruising, kneecapping editors and writers fall moony-eyed in love with him. He published a thousand-page novel, received the only award you get in the nation for being a genius, wrote essays providing the best feel anywhere of what it means to be alive in the contemporary world, accepted a special chair at California\'s Pomona College to teach writing, married, published another book and, last month [Sept. 2008], hanged himself at age 46.',
        website: '', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Philip K.', lastName: 'Dick', authorPic: './images/bklqwm7h.bmp', born: Date('December 16, 1928'), died: Date('March 2, 1982'), biography: 'Philip K. Dick was born in Chicago in 1928 and lived most of his life in California. In 1952, he began writing professionally and proceeded to write numerous novels and short-story collections. He won the Hugo Award for the best novel in 1962 for The Man in the High Castle and the John W. Campbell Memorial Award for best novel of the year in 1974 for Flow My Tears, the Policeman Said. Philip K. Dick died on March 2, 1982, in Santa Ana, California, of heart failure following a stroke.\n\nIn addition to 44 published novels, Dick wrote approximately 121 short stories, most of which appeared in science fiction magazines during his lifetime. Although Dick spent most of his career as a writer in near-poverty, ten of his stories have been adapted into popular films since his death, including Blade Runner, Total Recall, A Scanner Darkly, Minority Report, Paycheck, Next, Screamers, and The Adjustment Bureau. In 2005, Time magazine named Ubik one of the one hundred greatest English-language novels published since 1923. In 2007, Dick became the first science fiction writer to be included in The Library of America series.',
        website: '', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Sasha', lastName: 'Petraske', authorPic: './images/noImage.jpg', born: Date('March 16, 1973'), died: Date("August 21, 2015"), biography: '', createdAt: new Date(), updatedAt: new Date()},
      {firstName: '', lastName: '', authorPic: '', born: Date('March 31, 1945'), biography: '', website: '', createdAt: new Date(), updatedAt: new Date()},
      {firstName: '', lastName: '', authorPic: '', born: Date('March 31, 1945'), biography: '', website: '', createdAt: new Date(), updatedAt: new Date()},
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Authors', null, {})
  }
};


firstName: DataTypes.STRING,
lastName: DataTypes.STRING,
authorPic: DataTypes.STRING,
born: DataTypes.DATE,
died: DataTypes.DATE,
biography: DataTypes.TEXT,
website: DataTypes.STRING
