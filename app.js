const { inquirerMenu, pause } = require('./helpers/inquirer');

const main = async () => {
    const opt = await inquirerMenu();

    if (opt !== 0) {
        await pause();
        await main();
    }
};

main();
