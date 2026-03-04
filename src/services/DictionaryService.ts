import axios from "axios";

export class DictionaryService {

    async getDefinition(word: string) {

        const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);

        return res.data[0];

    }

}
