import { Message } from "discord.js";

import Command from "@cmd/commandInterface";

export default class EchoCommand implements Command {
  commandNames = ["echo", "print"];

  help(commandPrefix: string): string {
    return `Use ${commandPrefix}echo to get same message.`;
  }

  async run(message: Message): Promise<void> {
    await message.reply(message.content);
  }
}

