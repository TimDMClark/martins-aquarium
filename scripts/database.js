/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            image: "https://media.istockphoto.com/id/1219425970/photo/koi-fish-with-a-black-background.jpg?s=170667a&w=0&k=20&c=vz4iQy8-7my3f4jRKfq56uDlrhzIzwMndocfLciCVZA=",
            species: "Koi Bois",
            name: "The Flashy Duo",
            food: "plants",
            sizeInches: 16,
            location: "Caspian Sea",
            salinity: "< 3,000 ppm",
            waterFahrenheit: 68,
        },
        {
            image: "https://thumbs.dreamstime.com/b/checker-board-discus-fish-black-background-discus-fish-black-background-158664193.jpg",
            species: "Slim Jim",
            name: "Bookmark",
            food: "corn on the cob",
            sizeInches: 4,
            location: "Less Great Reef",
            salinity: "'Lotta Salt",
            waterFahrenheit: 59,
        },
        {
            image: "https://wallpapershome.com/images/pages/pic_h/1289.jpg",
            species: "Dory",
            name: "She Forgot",
            food: "What's Food?",
            sizeInches: 6,
            location: "Marine Life Institute as read by Sigourney Weaver",
            salinity: "Sweet & Salty",
            waterFahrenheit: 70,
        },
        {
            image: "https://c4.wallpaperflare.com/wallpaper/61/714/419/nature-animals-fish-black-background-wallpaper-preview.jpg",
            species: "Devil",
            name: "Nightmare",
            food: "plants",
            sizeInches: 666,
            location: "Hell",
            salinity: "Salt of a Thousand Lost Soul's Tears",
            waterFahrenheit: 9941,
        },
    ]
};

export const getFish = () => {
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
};