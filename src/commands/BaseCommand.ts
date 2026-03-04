export abstract class BaseCommand {
    abstract execute(...args: any[]): void;
}