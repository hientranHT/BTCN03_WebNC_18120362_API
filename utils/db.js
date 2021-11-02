const { on } = require('nodemon');
const {Client} = require('pg');
const classroomtable="CLASSROOM_TABLE";
// const util = require('util');

const client =new Client({
    host:"ec2-44-199-158-170.compute-1.amazonaws.com",
    user:"hvrhohexchsrsv",
    port:5432,
    password:"9e6e3c0af169f542806167dfc9629f2f9c5d41254662883ce4956d218d895c40",
    database:"d1ht2nlulqq28d",
    ssl:on,
    ssl: { rejectUnauthorized: false }
})
client.connect();

module.exports = {
    load: sql => client.query(sql),
    add: (query) => client.query(query),
    del: (condition, tableName) => client.query(`delete from ${tableName} where ?`, condition),
    patch: (entity, condition, tableName) => client.query(`update ${tableName} set ? where ?`, [entity, condition])
};
client.end;