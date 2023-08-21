const urlString = window.location.search;
const urlParams = new URLSearchParams(urlString);

// Get the value of the 'page' parameter
const pageValue = urlParams.get("page");

class Movie {
    static titles = {};
    constructor(id, title, img, data, synopsis, iframe){
        this.title = title;
        this.img = img;
        this.data = data;
        this.synopsis = synopsis;
        this.iframe = iframe;
        Movie.titles[id] = this;
    }
}

const adam = new Movie(
    "adam",
    "Adam Project",
    "adam_project.png",
    [
        "2022",
        "1h 46m",
        "Shawn Levy",
        "Ryan Reynolds, Walker Scobell, Jennifer Garner, Zöe Saldaña",
        "Sci-fi, Drama"
    ],
    "After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self for a mission to save the future.",
    "https://www.youtube.com/embed/IE8HIsIrq4o"
);

const afterlife = new Movie(
    "afterlife",
    "Afterlife",
    "afterlife.png",
    [
        "2019",
        "18 episodes",
        "Ricky Gervais",
        "Ricky Gervais, Diane Morgan, Mandeep Dhillon, Ashley Jensen",
        "Acid humor, comic drama"
    ],
    "Tony's life is turned upside-down after his wife dies of breast cancer. He contemplates suicide, but instead decides to live long enough to punish the world for his wife's death by saying and doing whatever he wants. Although he thinks of this as his \"superpower,\" his plan is undermined when everyone around him tries to make him a better person.",
    "https://www.youtube.com/embed/-OaVeuSG7TY"
);

const bright = new Movie(
    "bright",
    "All the bright places",
    "all_the_bright_places.png",
    [
        "2020",
        "1h 48m",
        "Brett Haley",
        "Justice Smith, Ellen Fanning, Luke Wilson, Virginia Gardner",
        "Romance, Juvenile fiction"
    ],
    "Two teenagers going through challenging times form a strong bond as they embark on a transformative journey to explore the wonders of the state of Indiana, United States.",
    "https://www.youtube.com/embed/zfQXKVCudec"
);

const inception = new Movie(
    "inception",
    "Inception",
    "inception.png",
    [
        "2010",
        "2h 28m",
        "Christopher Nolan",
        "Leonardo DiCaprio, Elliot Page, Ken Watanabe, Cillian Murphy",
        "sci-fi, drama"
    ],
    "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    "https://www.youtube.com/embed/YoHD9XEInc0"
);

if(pageValue in Movie.titles){
    console.log(`Title: ${Movie.titles[pageValue].title}`);
    // Page title
    document.title = Movie.titles[pageValue].title;
    // Image
    const card_img = document.getElementById("card-img");
    card_img.src = "../media/" + Movie.titles[pageValue].img;
    // Title
    const title = document.getElementById("title");
    title.textContent = Movie.titles[pageValue].title;    
    // Data
    const release = document.getElementById("release");
    const duration = document.getElementById("duration");
    const direction = document.getElementById("direction");
    const cast = document.getElementById("cast");
    const genre = document.getElementById("genre");
    console.log(Movie.titles[pageValue].data);
    release.textContent = Movie.titles[pageValue].data[0];
    duration.textContent = Movie.titles[pageValue].data[1];
    direction.textContent = Movie.titles[pageValue].data[2];
    cast.textContent = Movie.titles[pageValue].data[3];
    genre.textContent = Movie.titles[pageValue].data[4];
    // Synopsis
    const synopsis = document.getElementById("synopsis");
    synopsis.textContent = Movie.titles[pageValue].synopsis;
    // Iframe
    const iframe = document.getElementById("iframe");
    iframe.src = Movie.titles[pageValue].iframe;
}