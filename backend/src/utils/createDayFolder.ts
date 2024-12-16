import fs from 'fs';
import forceTwoDigits from './forceTwoDigits';

type CreateDayFolderReturn = {
    filePath: string;
};

/**
 * Create a folder based on a day's number.
 *
 * @param day Number of the day we want to create a folder
 */
function createDayFolder(day: number): CreateDayFolderReturn {
    const target_dir = `./${forceTwoDigits(day)}`;

    if (!fs.existsSync(target_dir)) {
        fs.mkdirSync(target_dir);
    }

    return {
        filePath: target_dir,
    };
}

export default createDayFolder;
