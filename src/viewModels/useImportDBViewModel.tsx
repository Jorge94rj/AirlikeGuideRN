import { importDB, ImportDBStatus } from '../utils/dbHandler';
import { showDefaultToast } from '../utils/toastHandler';

export const useImportDBViewModel = () => {
    const importDBHandler = () => {
        void (async () => {
            const importDBStatus: ImportDBStatus = await importDB();
            switch (importDBStatus) {
                case 'imported':
                    showDefaultToast('DB imported successfully');
                    break;
                case 'fileNotSupported':
                    showDefaultToast("File not supported, make sure you're importing a .db file");
                    break;
                default:
                    showDefaultToast('There was an error trying to import the DB');
                    break;
            }
        })();
    };

    return {
        importDBHandler,
    };
};
