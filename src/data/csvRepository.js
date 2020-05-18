import file from '../../src/files/services.csv';
import { readRemoteFile } from 'react-papaparse'


class csvRepository {

    parseCsv() {
      return readRemoteFile(
            file,
            {
                complete: (results) => {
                    console.log(results)
                    return results.data;
                }
            }
        )
    }
}

export default csvRepository;