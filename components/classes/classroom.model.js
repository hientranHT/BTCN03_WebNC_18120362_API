const db = require('../../utils/db');
const CLASSROOM_TABLE = 'CLASSROOM_TABLE';
module.exports = {
    add(entity) {
        const query=`insert into "${CLASSROOM_TABLE}" ("ClassroomID","ClassroomName","ClassroomDes") 
        values (${entity.ClassroomID},'{${entity.ClassroomName}}','{${entity.ClassroomDes}}')`;
        return db.add(query);
    },
    all() {
        return db.load(`select * from "${CLASSROOM_TABLE}"`);
    },

}