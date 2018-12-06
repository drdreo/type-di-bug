import {Logger} from "./decorators/Logger";
import {ILogger} from "./interfaces/ILogger";

export class Game {
    @Logger() private readonly logger: ILogger;

    constructor() {
        // FAILS HERE, this.logger is undefined
        this.logger.debug("Game has started");
    }
}