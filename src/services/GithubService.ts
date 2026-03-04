import axios from "axios";

export class GithubService {

    async getUser(username: string) {

        const res = await axios.get(`https://api.github.com/users/${username}`);

        return res.data;

    }

}