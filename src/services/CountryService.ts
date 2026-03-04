import axios from "axios";

export class CountryService {

    async getCountry(name: string) {

        const res = await axios.get(`https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`);

        return res.data[0];

    }

}
