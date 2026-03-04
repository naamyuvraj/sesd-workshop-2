import { BaseCommand } from "./BaseCommand";
import { IpService } from "../services/IpService";

export class IpInfoCommand extends BaseCommand {

    async execute() {

        const service = new IpService();

        const info = await service.getIpInfo();

        console.log(`IP Address: ${info.ip}`);
        console.log(`City:       ${info.city}`);
        console.log(`Region:     ${info.region}`);
        console.log(`Country:    ${info.country_name}`);
        console.log(`Timezone:   ${info.timezone}`);
        console.log(`ISP:        ${info.org}`);
        console.log(`Latitude:   ${info.latitude}`);
        console.log(`Longitude:  ${info.longitude}`);

    }

}
