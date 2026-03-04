import axios from "axios";

export class JokeService {

    async getRandomJoke() {

        const res = await axios.get("https://official-joke-api.appspot.com/random_joke");

        return res.data;

    }

}
