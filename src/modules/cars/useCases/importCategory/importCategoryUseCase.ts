import { parse } from 'csv-parse';
import fs from 'fs';

class ImportCategoryUseCase {
    execute(file: Express.Multer.File): void {
        const stream = fs.createReadStream(file.path)
        // a cada linha: retorna para uma função/ Arquivo => pipe()
        const parseFile = parse();// ler linha por linha

        stream.pipe(parseFile)// a cada pedaço lido é passado pelo pipe

        parseFile.on("data", async (line) => {
            console.log(line);
        })

    }
}
export { ImportCategoryUseCase }