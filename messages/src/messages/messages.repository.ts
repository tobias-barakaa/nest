import { readFile, writeFile } from "fs/promises";

export class MessagesRepository {
   async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages[id];

    }
    async findAll() {
        const contents = await readFile('message.json', 'utf-8');
        const messages = JSON.parse(contents);
        return messages;

    }

    async create(content: string) {
        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);
        const id = Math.floor(Math.random() * messages.length)
        messages[id] = {id, content};

        await writeFile('messages.json', JSON.stringify(messages));
        
    }
}