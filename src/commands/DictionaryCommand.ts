import { BaseCommand } from "./BaseCommand";
import { DictionaryService } from "../services/DictionaryService";

export class DictionaryCommand extends BaseCommand {

    async execute(word: string) {

        const service = new DictionaryService();

        try {
            const entry = await service.getDefinition(word);

            console.log(`Word: ${entry.word}`);
            console.log(`Phonetic: ${entry.phonetic || "N/A"}`);

            for (const meaning of entry.meanings) {
                console.log(`\n[${meaning.partOfSpeech}]`);
                for (const def of meaning.definitions.slice(0, 2)) {
                    console.log(`  - ${def.definition}`);
                    if (def.example) {
                        console.log(`    Example: "${def.example}"`);
                    }
                }
            }
        } catch {
            console.log(`No definition found for "${word}".`);
        }

    }

}
