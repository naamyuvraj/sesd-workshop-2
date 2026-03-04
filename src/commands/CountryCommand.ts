import { BaseCommand } from "./BaseCommand";
import { CountryService } from "../services/CountryService";

export class CountryCommand extends BaseCommand {

    async execute(name: string) {

        const service = new CountryService();

        try {
            const country = await service.getCountry(name);

            console.log(`Country:    ${country.name.common}`);
            console.log(`Official:   ${country.name.official}`);
            console.log(`Capital:    ${country.capital ? country.capital.join(", ") : "N/A"}`);
            console.log(`Region:     ${country.region} (${country.subregion || "N/A"})`);
            console.log(`Population: ${country.population.toLocaleString()}`);
            console.log(`Languages:  ${country.languages ? Object.values(country.languages).join(", ") : "N/A"}`);
            console.log(`Currencies: ${country.currencies ? Object.values(country.currencies).map((c: any) => `${c.name} (${c.symbol})`).join(", ") : "N/A"}`);
        } catch {
            console.log(`Country "${name}" not found.`);
        }

    }

}
