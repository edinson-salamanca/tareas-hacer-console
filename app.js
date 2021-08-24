const { inquirerMenu } = require('./helpers/inquirer');

const main = async () => {
    let opt = await inquirerMenu();
    console.log(opt);
};

main();
