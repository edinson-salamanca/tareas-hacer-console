const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

const main = async () => {
    const tasks = new Tasks();
    const opt = await inquirerMenu();

    if (opt !== 0) {
        switch (opt) {
            case 1: {
                const desc = await readInput('Descripción');
                tasks.createTask(desc);
                break;
            }
        }
        await pause();
        await main();
    }
};

main();
