import axios from "axios";

export class QuoteService {

    async getQuote() {

        const res = await axios.get("https://api.quotable.io/random");

        return res.data;

    }

}