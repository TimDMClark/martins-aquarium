// Import the function that returns a copy of the fish array
import { getFish } from '/scripts/database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = `<body><article class="fishList">`

    // Create HTNL representations of each fish here
    for (const singleFish of fishes) {

        // Why is there a backtick used for this string? Because you have to pull from objects in your string.
        htmlString += `<section class="fishcard">
            <div><img  class="fish__image image--card" src="${singleFish.image}" /></div>
            <div class="fish__name">Name: ${singleFish.name}</div>
            <div class="fish__species">Species: ${singleFish.species}</div>
            <div class="fish__sizeInches">Size: ${singleFish.sizeInches}</div>
            <div class="fish__location">Location: ${singleFish.location}</div>
            <div class="fish__diet">Diet: ${singleFish.food}</div>
            <div class="tank__temperature">Tank Temperature: ${singleFish.waterFahrenheit}</div>
            <div class="tank__salinity">Tank Salinity: ${singleFish.salinity}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
};
