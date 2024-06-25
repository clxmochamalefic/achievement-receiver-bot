import { Message } from "discord.js";

import Command from "@cmd/commandInterface";

export default class XIVUserMappingCommand implements Command {
  commandNames = ["xiv_map"];

  help(commandPrefix: string): string {
    return `Use ${commandPrefix}echo to get same message.`;
  }

  async run(message: Message): Promise<void> {
    await message.reply(message.content);
  }
}

