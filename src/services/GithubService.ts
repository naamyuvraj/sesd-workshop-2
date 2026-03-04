import axios from "axios";

export class GithubService {

    async getUser(username: string) {

        const res = await axios.get(`https://api.github.com/users/${username}`);

        return res.data;

    }

    async getRepos(username: string) {

        const res = await axios.get(`https://api.github.com/users/${username}/repos`, {
            params: { sort: "updated", per_page: 10 }
        });

        return res.data;

    }

}