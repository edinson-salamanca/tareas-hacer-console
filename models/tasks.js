const Task = require('./task');

/**
 * _listado:
 *      {'uuid--12sdf:{id:12,desc:asd,completadoEn:212}}
 *
 */

class Tasks {
    constructor() {
        this._listing = {};
    }

    createTask(desc = '') {
        const task = new Task(desc);
        this._listing[task.id] = task;
    }

    get getListingArr() {
        const listing = new Array();

        Object.keys(this._listing).forEach((key) => {
            listing.push(this._listing[key]);
        });

        return listing;
    }
}

module.exports = Tasks;
