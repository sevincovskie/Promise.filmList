const movie = [
    {
        name:' The Avengers : Age of Ultron',
        year: 2015,
        rating:7.3,
        director:'Stan Lee, Joss Whedon',
        genre:'action,ADVENTURA,sci-fi',
        actors:'Robert D. Jr, Chris E. ,Mark R., Chirs H. Scralett J. Jeremy R. Samuel L.J.',
        img:'image/avengers.png',
        about:'When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it is up to Earth is mightiest heroes to stop the villainous Ultron from enacting his terrible plan.'
    },
    {
        name:'Im Westen nichts Neues',
        year: 2022,
        rating:7.0,
        director:'Edward Berger',
        genre:'action,war,drama',
        actors:'Felix Kammerer',
        img:'image/wars.png',
        about:'A young German soldier terrifying experiences and distress on the western front during World War I.'
    },
    {
        name: 'Heart of Stone',
        year: 2023,
        rating: 5.7,
        director: 'Tom Harper',
        genre: 'action , crime,thriller',
        actors: 'Gal Gadot , Jamie Dornan, Alia Bhat',
        img:'image/heartstone.png',
        about: 'An intelligence operative for a shadowy global peacekeeping agency races to stop a hacker from stealing its most valuable and dangerous weapon.'
    },
    {
        name:'Ferdinand',
        year: 2017,
        rating: 6.7,
        director:'Carlos Saldanha' ,
        genre:'animation,adventure,comedy' ,
        actors:'Jhon Cena, Kate McKinnon' ,
        img:'image/ferdinand.png' ,
        about:'After Ferdinand, a bull with a big heart, is mistaken for a dangerous beast, he is captured and torn from his home. Determined to return to his family, he rallies a misfit team on the ultimate adventure'

    },

    {
        name:'John Wick',
        year: 2023,
        rating:7.7 ,
        director:'Chad Stahelski',
        genre:'action,crime,thriller',
        actors:'Keanu Reeves, Laurence Fishburne, Lance Reddick',
        img:'image/jhonwick.png',
        about:'John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.'
    },
    {
        name:'The Witcher',
        year: 2023,
        rating:8.8,
        director:'Lauren Schmidt Hissrich',
        genre:'action,adventure,drama',
        actors:'Anya Chalotra, Henry Cavill, Freya Allan',
        img:'image/witcher.png',
        about:'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.'
    },

    {
        name:'Oppehaymer',
        year: 2023,
        rating:8.5,
        director:'Christopher Nolan',
        genre:'biography,history,drama',
        actors:'Cillian Murphy, Emily Blunt, Robert Downey Jr, Matt Damon',
        img:'image/Oppenheimer.png',
        about:'The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.'
    },

    {
        name:' Turning Red',
        year: 2022,
        rating:7.0,
        director:'Domee Shi',
        genre:'biography,history,drama',
        actors:'Rosalie Chiang,Sandra Oh, Ava Morse, Hyein Park, Maitreyi Ramakrish',
        img:'image/red.png',
        about:'A thirteen-year-old girl named Mei Lee is torn between staying her mothers dutiful daughter and the changes of adolescence. And as if the challenges were not enough, whenever she gets overly excited she transforms into a giant red panda.'
    },
    {
        name:' Dune',
        year: 2021,
        rating:8.0,
        director:'Denis Villeneuve',
        genre:'action,adventura,drama',
        actors:'Timothée Chalamet, Zendaya , Oscar Isaac,Jason Momoa',
        img:'image/dune.png',
        about:'A noble family becomes embroiled in a war for control over the galaxys most valuable asset while its heir becomes troubled by visions of a dark future.'
    },
    {
        name:'Star Wars: Episode IX - The Rise of Skywalker',
        year: 2019,
        rating:6.4,
        director:'J.J. Abrams',
        genre:'action,adventura,fantasy',
        actors:'Daisy Ridley, Jhon Boyega, Adam Driver, Oscar Isaac',
        img:'image/starwars.png',
        about:'In the riveting conclusion of the landmark Skywalker saga, new legends will be born-and the final battle for freedom is yet to come.'
    },
    
];

  
  const movieCards = document.querySelector("#film-cards");

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(movie) {
            resolve(movie) 
        }else {
            reject ('Movie is not found')
        }
    },3000);
    
    
  });


  myPromise.then (item => {
    console.log(item);
    movieCards.innerHTML = item.map (item => `
        <div class="cards">
           <img class ="card-img-top" src="${item.img}"style="height: 400px; object-fit: cover;" alt=""/>
            <div class="card-body">
                
                <h4 class="card-title">${item.name}</h4>
                <p class="card-text">Director: ${item.director}</p>
                <p class="card-text">Release Date: ${item.year}</p>
                <p class="card-text">Genre: ${item.genre}</p>
                <p class="card-text">Rate: ${item.rating}</p>
                <p class="card-text">Actors: ${item.actors}</p>
                <p class="card-text">Storyline: ${item.about}</p>
            </div>
        </div>
    `).join("");
  }).catch(err => console.log(err));
    
