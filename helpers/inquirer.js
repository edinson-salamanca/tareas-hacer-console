const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');

require('colors');

const choices = new Choices([
    {
        value: 1,
        name: `${'1'.green} Crear tarea`,
    },
    {
        value: 2,
        name: `${'2'.green} Listar tareas`,
    },
    {
        value: 3,
        name: `${'3'.green} Listar tareas completadas`,
    },
    {
        value: 4,
        name: `${'4'.green} Listar tareas pendientes`,
    },
    {
        value: 5,
        name: `${'5'.green} Completar tarea(s)`,
    },
    {
        value: 6,
        name: `${'6'.green} Borrar tarea`,
    },
    {
        value: 0,
        name: `${'0'.green} Salir`,
    },
]);

const questions = [
    {
        type: 'list',
        name: 'option',
        message: '¿Que deseas hacer?',
        choices,
    },
];

const inquirerMenu = async () => {
    console.clear();
    showHeader();
    const { option } = await inquirer.prompt(questions);

    return option;
};

const showHeader = () => {
    let message = `
        ${'=========================='.green}
           ${'Seleccione una opción'}
        ${'=========================='.green}
    `;

    console.log(message);
};

const pause = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`,
        },
    ];

    await inquirer.prompt(question);
};

const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }

                return true;
            },
        },
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
};

module.exports = {
    inquirerMenu,
    pause,
    readInput,
};
