import  { defineStore } from 'pinia'

interface Name {
    name: string
}

interface Episode {
    name: string,
    air_date: string
}

interface Character {
    id: string,
    name: string,
    image: string,
    species: string,
    status: string,
    gender: string,
    origin: Name,
    location: Name,
    episode: Episode[]
}

export const useCharactersStore = defineStore('charactersStore', () => {
    const charactersList = ref([{
        "id": "86",
        "name": "Cyclops Rick",
        "image": "https://rickandmortyapi.com/api/character/avatar/86.jpeg",
        "species": "Humanoid",
        "status": "Dead",
        "gender": "Male",
        "origin": {
          "name": "unknown"
        },
        "location": {
          "name": "Citadel of Ricks"
        },
        "episode": [
          {
            "name": "Close Rick-counters of the Rick Kind",
            "air_date": "April 7, 2014"
          },
          {
            "name": "The Rickshank Rickdemption",
            "air_date": "April 1, 2017"
          },
          {
            "name": "The Ricklantis Mixup",
            "air_date": "September 10, 2017"
          }
        ]
      }]);

    function addCharacterToList(char: Character) {
        charactersList.value.push(char)
    }

    return { addCharacterToList, charactersList }
});