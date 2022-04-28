import fs from 'fs';

export const deleteFile = async (filename: string) => {
    try {
        //verificando se o arquivo já existe
        await fs.promises.stat(filename);
    } catch (error) {
        return;
    }
    //excluindo para evitar que ele seja duplicado novamente
    await fs.promises.unlink(filename);
}