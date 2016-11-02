const db = require('APP/db');

let artists = [
  {
    name: 'Drake',
    bio: 'Aubrey Drake Graham, known simply as Drake, is a Canadian rapper, singer, songwriter, record producer, and actor. Drake initially gained recognition as an actor on the teen drama television series Degrassi: The Next Generation in the early 2000s.',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Drake_Bluesfest.jpg',
    youtube: 'https://www.youtube.com/watch?v=uxpDa-c-4Mc'
  },
  {
    name: 'Kanye West',
    bio: 'Kanye Omari West is an American hip hop recording artist, songwriter, record producer, fashion designer, and entrepreneur.',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Kanye_West_at_the_2009_Tribeca_Film_Festival.jpg/220px-Kanye_West_at_the_2009_Tribeca_Film_Festival.jpg',
    youtube: 'https://www.youtube.com/watch?v=IxGvm6btP1A'
  },
  {
    name: 'Jay-Z',
    bio: 'Shawn Corey Carter, known professionally as Jay Z, is an American rapper, businessman and investor. He is one of the most financially successful hip hop artists in America. In 2014, Forbes estimated Jay Z\'s net worth at nearly $520 million.',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Jay-Z_%40_Shawn_%27Jay-Z%27_Carter_Foundation_Carnival_%28crop_2%29.jpg/220px-Jay-Z_%40_Shawn_%27Jay-Z%27_Carter_Foundation_Carnival_%28crop_2%29.jpg',
    youtube: 'https://www.youtube.com/watch?v=Oz_-VaTHpc8'
  },
  {
    name: 'Beyonce',
    bio: 'Beyoncé Giselle Knowles-Carter is an American singer, songwriter, record producer and actress. Born and raised in Houston, Texas, she performed in various singing and dancing competitions as a child and rose to fame in the late 1990s as lead singer of R&B girl-group Destiny\'s Child.',
    picture: 'http://factmag-images.s3.amazonaws.com/wp-content/uploads/2013/12/beyonce-121313.jpg',
    youtube: 'https://www.youtube.com/watch?v=QxsmWxxouIM'
  },
  {
    name: 'Bruno Mars',
    bio: 'Peter Gene Hernandez, known professionally as Bruno Mars, is an American singer-songwriter, multi-instrumentalist, record producer, and choreographer.',
    picture: 'http://b-i.forbesimg.com/zackomalleygreenburg/files/2014/01/0102_30-under-30-bruno-mars_650x455.jpg',
    youtube: 'https://www.youtube.com/watch?v=OPf0YbXqDm0'
  },
  {
    name: 'Adele',
    bio: 'Adele Laurie Blue Adkins MBE is an English singer-songwriter. Graduating from the BRIT School for Performing Arts and Technology in 2006, Adele was given a recording contract by XL Recordings after a friend posted her demo on Myspace the same year. ',
    picture: 'https://pbs.twimg.com/profile_images/657199367556866048/EBEIl2ol.jpg',
    youtube: 'https://www.youtube.com/watch?v=YQHsXMglC9A'
  },
  {
    name: 'Coldplay',
    bio: 'Coldplay are a British rock band formed in 1996 by lead vocalist and pianist Chris Martin and lead guitarist Jonny Buckland at University College London.',
    picture: 'https://www.coldplaying.com/wp-content/uploads/2015/11/dgsdfsg.jpg',
    youtube: 'https://www.youtube.com/watch?v=vGZMvV9KBp8'
  },
  {
    name: 'Tim McGraw',
    bio: 'Samuel Timothy "Tim" McGraw is an American country music singer, songwriter and actor. He has been married to fellow country music singer Faith Hill since 1996, and is the son of the late baseball player Tug McGraw.',
    picture: 'https://www.picsofcelebrities.com/celebrity/tim-mcgraw/pictures/large/tim-mcgraw-pictures.jpg',
    youtube: 'https://www.youtube.com/watch?v=awzNHuGqoMc'
  },
  {
    name: 'The Black Keys',
    bio: 'The Black Keys are an American rock band formed in Akron, Ohio, in 2001. The group consists of Dan Auerbach and Patrick Carney.',
    picture: 'http://www.mtv.com/crop-images/2013/09/11/the_black_keys_1378933759570.jpg',
    youtube: 'https://www.youtube.com/watch?v=trk7P-9QDyc'
  },
  {
    name: 'New York Philharmonic',
    bio: 'The New York Philharmonic is a symphony orchestra based in New York City in the United States. It is one of the leading American orchestras popularly referred to as the "Big Five".',
    picture: 'http://ttwmagazine.net/wp-content/uploads/2014/10/philharmonic_2.png',
    youtube: 'https://www.youtube.com/watch?v=48IlBzG81l8'
  },
  {
    name: 'The Lumineers',
    bio: 'The Lumineers are a folk rock band, based in Denver, Colorado. The two founding members and songwriters of the Lumineers are Wesley Schultz and Jeremiah Fraites.',
    picture: 'https://media.npr.org/assets/img/2016/02/02/20151116_the_lumineers_shot_02_059_wide-de56fa91ebd422be6ddb197c109e2b6df79923ad.jpg?s=1400',
    youtube: 'https://www.youtube.com/watch?v=pTOC_q0NLTk'
  },
  {
    name: 'Stevie Wonder',
    bio: 'Stevland Hardaway Morris, known by his stage name Stevie Wonder, is an American musician, singer, songwriter, record producer, and multi-instrumentalist.',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Stevie_Wonder_1973.JPG',
    youtube: 'https://www.youtube.com/watch?v=0CFuCYNx-1g'
  },
  {
    name: 'Gary Clark Jr.',
    bio: 'Gary Lee Clark Jr. is an American musician based in Austin, Texas. Clark has shared the stage with various legends of rock and roll, and has stated that he is "influenced by blues, jazz, soul [and] country, as well as hip hop".',
    picture: 'https://s3.amazonaws.com/bit-photos/large/6128408.jpeg',
    youtube: 'https://www.youtube.com/watch?v=kvMd9KJrpg8'
  },
  {
    name: 'David Gilmore',
    bio: 'David Gilmore (born 5 February 1964 in Cambridge, Massachusetts) is an American session jazz guitarist.',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/David_Gilmore2011.JPG/440px-David_Gilmore2011.JPG',
    youtube: 'https://www.youtube.com/watch?v=1f7BJ8nhX9E'
  },
  {
    name: 'Sharon Isbin',
    bio: 'Sharon Isbin is an American Grammy Award-winning classical guitarist and the founding director of the Guitar Department at The Juilliard School.',
    picture: 'http://www.guitartv.com/wp-content/uploads/2012/04/isbin_sony_soho_11.jpg',
    youtube: 'https://www.youtube.com/watch?v=yIjfkYKKW54'
  },
  {
    name: 'Swedish House Mafia',
    bio: 'Swedish House Mafia was a Swedish electronic music supergroup consisting of Axwell, Steve Angello and Sebastian Ingrosso. The group officially formed in late 2008.',
    picture: 'http://www.billgrahamcivicauditorium.com/wp-content/uploads/2012/10/Swedish-house-_mafia-Bill-Graham-Civic-Auditorium.jpg',
    youtube: 'https://www.youtube.com/watch?v=1y6smkh6c-0'
  },
  {
    name: 'Taylor Swift',
    bio: 'Taylor Alison Swift is an American singer-songwriter. One of the most popular contemporary female recording artists, she is known for narrative songs about her personal life, which has received much media attention.',
    picture: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/01/29/11/Taylor-Swift-revenge-nerds.jpg',
    youtube: 'https://www.youtube.com/watch?v=nfWlot6h_JM'
  },
  {
    name: 'Lee Scratch Perry',
    bio: 'Lee "Scratch" Perry is a Jamaican music producer/Inventor noted for his innovative studio techniques and production values. Perry was one of the pioneers in the development of dub music with his early adoption of effects and remixing to create new instrumental or vocal versions of existing reggae tracks.',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Lee_Scratch_Perry_%40_Band_On_The_Wall%2C_Manchester_19-2-2013_%288493373312%29.jpg/1024px-Lee_Scratch_Perry_%40_Band_On_The_Wall%2C_Manchester_19-2-2013_%288493373312%29.jpg',
    youtube: 'https://www.youtube.com/watch?v=F8cXSqB5j0M'
  },
  {
    name: 'Kenny Chesney',
    bio: 'Kenneth Arnold "Kenny" Chesney is an American country music singer, songwriter and record producer. He has recorded 20 albums, 14 of which have been certified Gold or higher by the RIAA.',
    picture: 'https://up-1.cdn-fullscreendirect.com/production/photos/5351/large/20141228_175127_5351_684930.jpeg',
    youtube: 'https://www.youtube.com/watch?v=mDBxlVLTaQA'
  },
  {
    name: 'Allan Holdsworth',
    bio: 'Allan Holdsworth is a British guitarist and composer. He has released twelve studio albums as a solo artist and played a variety of musical styles spanning a period of more than four decades, but is best known for his work in jazz fusion.',
    picture: 'http://www.innerviews.org/inner/holdsworth2/holdsworthheader2.jpg',
    youtube: 'https://www.youtube.com/watch?v=zMi2mCe7CKg'
  },
  {
    name: 'Of Monsters and Men',
    bio: 'Of Monsters and Men is a five-member, English-language, indie folk-pop band from Reykjavík, Iceland, formed in 2010.',
    picture: 'https://a2-images.myspacecdn.com/images03/2/6a0c671d151d4ccfb795b849d0546e9e/300x300.jpg',
    youtube: 'https://www.youtube.com/watch?v=ghb6eDopW8I'
  }
];

let users = [
  {
    name: 'Joe McTesterson',
    isAdmin: false,
    email: 'joe@example.com',
    password_digest: '123',
  },
  {
    name: 'Courtney Exampleton',
    isAdmin: true,
    email: 'courtney@example.com',
    password_digest: '123',
  },
  {
    name: 'Bob',
    isAdmin: false,
    email: 'bob@bob.gov',
    password_digest: '123',
  }
];

let genres = [
  'Classical',
  'Electronic',
  'Folk',
  'Blues',
  'Country',
  'Hip-hop',
  'Jazz',
  'Pop',
  'R&b',
  'Reggae',
  'Rock',
  'Psychedelic'
];

venue: [
    {
      name: 'Rockwood Music Hall',
      address: '196 Allen St, New York, NY 10002',
      description: 'Intimate venue presenting singer-songwriters & new artists for free, or at most a nominal charge.',
      picture: 'https://pbs.twimg.com/profile_images/498875184351154176/_W03FiQA.jpeg'
    },
    {
      name: 'Mercury Lounge',
      address: '217 E Houston St, New York, NY 10002',
      description: "Indie headliners & up-and-comers have kept this small music venue crowded since the '90s.",
      picture: 'http://newyork.cities2night.com/public/place_images/place_10492.jpg'
    },
    {
      name: 'Cake Shop NYC',
      address: '152 Ludlow St, New York, NY 10002',
      description: 'This live-music venue/record store (a former bakery) offers coffee, tea, light meals & baked goods.',
      picture: 'http://orsvp.com/wp-content/uploads/2016/03/cake-shop-nyc.jpg'
    },
    {
      name: "Arlene's Grocery",
      address: '95 Stanton St, New York, NY 10002',
      description: "Up-&-coming acts are the focus of this rock music bar that's also home to live-band karaoke.",
      picture: 'http://nyc.thedrinknation.com/images/article_gallery/2014-04-14-arlenes-690x420.jpg'
    },
    {
      name: 'DROM',
      address: '85 Avenue A, New York, NY 10009',
      description: 'This gypsy-themed lounge hosts a global roster of performers, ranging from jazz & funk to hip-hop.',
      picture: 'http://www.dromnyc.com/member_files/size/640x/object_files/drom.jpg'
    },
    {
      name: 'Pianos',
      address: '158 Ludlow St, New York, NY 10002',
      description: 'Hipsters pack this 2-level bar/music venue to hear live indie acts or dance to DJ sets upstairs.',
      picture: 'http://nyc.thedrinknation.com/images/bars/pianos.jpg'
    },
    {
      name: 'Spectrum',
      address: '121 Ludlow St #2, New York, NY 10002',
      description: 'Rotating art exhibits, live music & multimedia events featured in a second-story office venue.',
      picture: 'http://67.media.tumblr.com/tumblr_m8fd7rnqjL1rdrkcbo1_500.jpg'
    },
    {
      name: 'The Cutting Room',
      address: '44 E 32nd St, New York, NY 10010',
      description: 'Classy yet funky concert venue with diverse acts offers table service in theater & bar in front.',
      picture: 'http://www.downtownmagazinenyc.com/wp-content/uploads/2013/09/20130919_Zombies-140-759x500.jpg'
    },
    {
      name: 'Cafe Wha?',
      address: '115 Macdougal St, New York, NY 10012',
      description: 'Energetic house bands play at former hangout of Bob Dylan, Jimi Hendrix, Allen Ginsberg & others.',
      picture: 'https://media-cdn.tripadvisor.com/media/photo-s/08/94/31/e0/cafe-wha.jpg'
    },
    {
      name: 'Radio City Music Hall',
      address: '1260 6th Ave, New York, NY 10020',
      description: 'Circa-1932 art deco theater hosting the Christmas Spectacular with the Rockettes, concerts & more.',
      picture: 'https://s-media-cache-ak0.pinimg.com/originals/eb/26/4d/eb264d2c8f96db65542bca492c55ba99.jpg'
    },
    {
      name: 'Webster Hall',
      address: '125 E 11th St, New York, NY 10003',
      description: 'This nightclub, in a circa-1886 space, has bars, stages & dance floors on several levels.',
      picture: 'http://www.djoybeat.com/wp-content/uploads/2012/11/websterhall-ny5.jpg'
    },
    {
      name: 'Irving Plaza',
      address: '17 Irving Pl, New York, NY 10003',
      description: 'Prime NYC theater for established & up-and-coming bands, packing in fans since 1978.',
      picture: 'http://cdn.rsvlts.com/wp-content/uploads/2012/09/Imagine-Dragons-Irving-Plaza-New-York-City-RSVLTS.com-03.jpg'
    },
    {
      name: '(Le) Poisson Rouge ',
      address: '158 Bleecker St, New York, NY 10012',
      description: 'Barnlike multimedia concert venue, bar & art gallery that showcases avant-garde acts.',
      picture: 'http://www4.pictures.zimbio.com/gi/Kings+Leon+Perform+Private+Concert+SiriusXM+O6w4vtagQ4el.jpg'
    },
    {
      name: 'Highline Ballroom',
      address: '431 W 16th St, New York, NY 10011',
      description: 'Space alternates between nightclub with DJs & live music; acts range from jazz to rock & hip-hop.',
      picture: 'http://www.vamosparanovayork.com/wp-content/uploads/2016/02/highline-ballroom.jpg'
    },
    {
      name: 'Terminal 5',
      address: '610 W 56th St, New York, NY 10019',
      description: "Indie bands & more make some noise at this sprawling venue on the western fringe of Hell's Kitchen.",
      picture: 'https://blog.tickpick.com/wp-content/uploads/2013/02/Terminal-V-Seating.jpg'
    },
]

let events = [
  {
    date: Date.UTC(2016, 10, 5, 21),
    initialTickets: 500,
    ticketPrice: 2510
  },
  {
    date: Date.UTC(2016, 10, 6, 21, 30),
    initialTickets: 300,
    ticketPrice: 5065
  },
  {
    date: Date.UTC(2016, 11, 8, 21),
    initialTickets: 200,
    ticketPrice: 3034
  },
  {
    date: Date.UTC(2016, 11, 11, 20, 30),
    initialTickets: 50,
    ticketPrice: 15081
  },
  {
    date: Date.UTC(2016, 11, 15, 21),
    initialTickets: 550,
    ticketPrice: 7513
  },
  {
    date: Date.UTC(2016, 11, 17, 21, 30),
    initialTickets: 750,
    ticketPrice: 8093
  },
  {
    date: Date.UTC(2016, 12, 20, 20, 30),
    initialTickets: 400,
    ticketPrice: 1005
  },
  {
    date: Date.UTC(2016, 12, 25, 20),
    initialTickets: 1000,
    ticketPrice: 30096
  },
  {
    date: Date.UTC(2017, 1, 8, 21, 30),
    initialTickets: 200,
    ticketPrice: 6034
  },
  {
    date: Date.UTC(2017, 1, 20, 20, 30),
    initialTickets: 150,
    ticketPrice: 4012
  }
]

reviews: [
    {
      title: 'SO GROSS',
      rating: '1',
      content: "OMG this venue was SO DISGUSTING!!! there was grime on my pint glass, and the bartender looked like he doesn't even know what a shower is"
    },
    {
      title: 'AH-MAZING <3',
      rating: '5',
      content: "The best concert of my life was here! I can't wait to go back!"
    },
    {
      title: 'meh',
      rating: '2',
      content: "it was fine"
    },
    {
      title: 'Overpriced',
      rating: '3',
      content: "I had a good time, but I feel like it was eniterly worth the money."
    },
    {
      title: 'Be careful wear you stand',
      rating: '3',
      content: "Where we first started out standing, we couldn't see very well, and the speakers were too loud. But then we moved halfway through and really enjoyed ourselves."
    },
    {
      title: 'a little too close',
      rating: '3',
      content: "I felt so claustrophobic at this place. People were basically standing on top of each other. They should sell less tickets"
    },
    {
      title: 'Staff could be friendlier',
      rating: '4',
      content: "Overall this place is great! But the bartender got a little huffy when I asked for extra limes."
    },
    {
      title: 'Lots of fun',
      rating: '4',
      content: "Any show here is always so fun. They only negative thing is the drinks are a little pricey"
    },
    {
      title: 'Always a good time',
      rating: '4',
      content: "just like the title says"
    },
    {
      title: 'Awesome',
      rating: '4',
      content: "Great location, short lines, and a fun crowd!"
    },
    {
      title: 'Not enough of these kind of places',
      rating: '5',
      content: "The once New York City music scene has been almost destroyed by losing Roseland & CBGB'S. Too many to list. We must hold on to places like this if we even have a chance of bringing music to the City...."
    },
    {
      title: 'Love this spot for up and coming artists.',
      rating: '5',
      content: "Literally the best intimate atmosphere to see any band or artist to perform. If you see an artist you love playing there ok the roster GET TICKETS!"
    },
    {
      title: 'Staff is unfriendly and rude.',
      rating: '1',
      content: " First 30 seconds entering the place and were told to wait outside. Then told that you can't wait outside so to go down the street when there was nobody waiting in line. Instantly got a negative sense of the place."
    },
    {
      title: 'Cool room. Good sound.',
      rating: '4',
      content: "The bar area can get a bit crowded.  The guy checking IDs was pretty rude, but other than that it was a good time. "
    },
    {
      title: 'One of the last great classic New York venues.',
      rating: '4',
      content: "I always jump on tickets if I see someone I know playing here since it's such an intimate space.  Bar setup in the front is kind of annoying and tight, but it reminds me of my youth so I'll give it a pass."
    },
    {
      title: 'Great place to see upcoming bands',
      rating: '5',
      content: "Good spot to find local good live music! Drink elsewhere before the show though."
    },
    {
      title: "There are plenty of better places to party in NYC.",
      rating: '1',
      content: "A coat-check employee stole $20 I had inside my coat pocket! The crowds are full of old and/or weird people. The music is usually bad or just okay."
    },
    {
      title: 'WORST SHOW EVER!!!!!!1',
      rating: '1',
      content: "the artist was SO BAD, they didn't even play a full set. the venue should have NEVER booked them! I WANT A REFUND!!!"
    },
    {
      title: 'Had a great time',
      rating: '5',
      content: "Bathrooms were the cleanest I've ever seen in a place like this"
    },
    {
      title: 'Great place for drinks and music',
      rating: '5',
      content: "The hostess and security staff were very pleasant."
    },
    {
      title: 'Come early',
      rating: '3',
      content: "The layout is a bit quirky so arrive early to get decent seat for show."
    },
    {
      title: 'One of my favorites',
      rating: '5',
      content: "Great venue space offering a variety of different artists and entertainment."
    },
    {
      title: 'UGH',
      rating: '2',
      content: "Bad beer at high rates and $5 fee on ATM, terrible bathroom location and setup."
    },
    {
      title: 'Venue bad, music good',
      rating: '2',
      content: "Rude, overly aggressive security. The venue was very unorganized, but preformers were great nonetheless."
    },
    {
      title: 'The go to NYC music venue',
      rating: '4',
      content: "Worth the price of admission."
    },
    {
      title: 'Excellent place for a concert',
      rating: '2',
      content: "I've been here twice.  Fantastic show each time!  The acoustics are fantastic, and it's just the right size so you're not a lightyear away from the band.  Quick bar service, too!"
    },
    {
      title: 'Needs A/C',
      rating: '4',
      content: "Way way way too hot inside. Very expensive beers."
    },
    {
      title: 'will be back',
      rating: '5',
      content: "just had a wonderful evening and there is a lot of energy in the room."
    },
    {
      title: "Don't",
      rating: '1',
      content: "Dirty and disgusting place with very disrespectful and unprofessional customer approach. You are just wasting Your hard earned money if You come here."
    },
    {
      title: 'This is a great venue',
      rating: '4',
      content: "The merch stand could be much better organized, but the bars serve a great variety of drinks and there are multiple bars so the lines aren't too outrageous. Very nice seating, lobby, bathrooms, etc."
    }
]

// function randomItem(items) {
//   return items[Math.floor(Math.random() * items.length)];
// }

const seedArtists = () => db.Promise.map(artists, artist => db.model('artists').create(artist))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedArtists)
  .then(artists => console.log(`Seeded ${artists.length} artists OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
