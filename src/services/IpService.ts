import axios from "axios";

export class IpService {

    async getIpInfo() {

        const res = await axios.get("https://ipapi.co/json/");

        return res.data;

    }

}
