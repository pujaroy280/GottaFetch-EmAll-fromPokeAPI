import fetchPoke from "./api-call.js";  // Import fetchPoke function from api-call.js file

// console.log(fetchPoke())

const data = await fetchPoke()
console.log(data)

const arrayofPokemons = data.results // The data from the keys of the object in the API that contains Pokemon names and info including url
console.log(arrayofPokemons)

arrayofPokemons.forEach((pokeType)=> { // pokeType argument can be any name since it's an input
    // run whatever code is here for each element in the array

    // Use DOM method to display pokemon names
    const name = document.createElement("p");  // Create text
    name.innerText = 'Pokemon Name: '+ pokeType.name  // Add the text to HTML
    document.body.append(name); // Append it to the document of HTML

    const info = document.createElement("p");
    info.innerText = 'Info: '+ pokeType.url
    document.body.append(info);
});