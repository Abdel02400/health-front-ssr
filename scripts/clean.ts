import fs from 'node:fs/promises';

const clean = async () => {
    console.info('Cleaning dist/...');

    try {
        await fs.rm('dist', { recursive: true, force: true });
        console.info('dist/ cleaned.');
    } catch (err) {
        console.error('Error cleaning dist : ', err);
    }
};

clean();