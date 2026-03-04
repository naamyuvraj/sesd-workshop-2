import axios from "axios";

export class NumberFactService {

    async getFact(number: number) {

        const res = await axios.get(`http://numbersapi.com/${number}`, {
            headers: { "Content-Type": "text/plain" }
        });

        return res.data;

    }

}
