import * as fs from 'fs';

async function readAndWriteAccessLog() {
    try {
        const data = await fs.promises.readFile('/var/log/apache2/access_log', { encoding: 'utf8' });
        console.info('Success reading!', data);
        await fs.promises.appendFile('/var/log/apache2/access_log', 'New access log entry');
        console.info('Success writing!');
    } catch (error) {
        console.error('Error:', error);
    }
}

readAndWriteAccessLog();
