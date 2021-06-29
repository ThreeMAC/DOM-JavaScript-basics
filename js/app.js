// Name the class of the HTML element you want to alter and store it in a variable
const albumsContainer = document.querySelector("#albums")

// You can make arrays for album images and names
//const albumImages = ["includes/images/Lil Baby Too Hard.jpg","includes/images/Pierre Bourne TLOP 5.png", "includes/images/Z Money Shawty Paid.jpg"]
//const albumNames = ["Lil Baby - Too Hard (2017)", "Pi'erre Bourne - TLOP 5", "Z-Money - Shawty Paid (2019)"]

// However, it is in your best interest to link these two together in an an array of objects like this. Especially if the data in the array can change
const albums = [
    { name: "Lil Baby - Too Hard (2017)", image: "includes/images/Lil Baby Too Hard.jpg" },
    { name: "Pi'erre Bourne - TLOP 5 (2021)", image: "includes/images/Pierre Bourne TLOP 5.png" },
    { name: "Z-Money - Shawty Paid (2019)", image: "includes/images/Z Money Shawty Paid.jpg" },
]

// Making a function with variable album. We can change its value when we call on the function.
function addAlbum(album){
    // Create a div tag and link it to a descriptive variable
    const albumsDiv = document.createElement("div")

    // Give the div the class "album"
    albumsDiv.classList.add("album")

    // You can also remove this class later on
    //albumsDiv.classList.remove("album")

    // Append or add the div with class "album" to the html div with "albums" tag
    albumsContainer.appendChild(albumsDiv)

    // Create element for an img
    const img = document.createElement("img")

    // Link the source for the image that's in the album array
    img.src = album.image

    // Append or add the image into the div albumsDiv
    albumsDiv.appendChild(img)

    // Do the same for the name
    const nameDiv = document.createElement("div")
    nameDiv.innerText = album.name
    albumsDiv.appendChild(nameDiv)

}

// If you have multiple album names and images, it's best to put these in an array first so you can loop through this array
// Here I'll use a standard for loop. It will call on addAlbum for how many objects there are stored in the albums array.
// This loop adds multiple albums, so I'll rewrite this as a function
function addAlbums() {
    for (let album of albums) {
        addAlbum(album)
    }
}
addAlbums()