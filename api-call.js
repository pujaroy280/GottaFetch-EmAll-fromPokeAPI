//api-call

// https://dog.ceo/api/breeds/image/random/3

import axios from "axios";

/*
export default async function fetchPoke() {
    const response = await axios.get(  // Make API Call
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
    );
    return response;
}
*/
export default async function fetchPoke() {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=1021&offset=0"
    );

    if (response.status !== 200) {
      throw new Error("some kind of error :(");
    }

    return response.data;
  } catch (error) {
    console.error("Error: " + error);
  }
}
