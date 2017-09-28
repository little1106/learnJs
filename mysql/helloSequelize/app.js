const Sequelize = require('sequelize');
const config = require('./config');

var sequelize = new Sequelize(config.database,config.username,config.password,{
    host:config.host,
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        idle:30000
    }
});

var Pet = sequelize.define('pet',{
    id:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    name:Sequelize.STRING(100),
    gender:Sequelize.BOOLEAN,
    birth:Sequelize.STRING(10),
    createdAt:Sequelize.BIGINT,
    updateAt:Sequelize.BIGINT,
    version:Sequelize.BIGINT
    },{
        timestamps:false
    }
);

var now = Date.now();

(async()=>{
    var dog = await Pet.create({
        id:'d-'+now,
        name:'Odie',
        gender:false,
        birth:'1995-11-06',
        createdAt:now,
        updateAt:now,
        version:0
    });
    console.log('created:'+JSON.stringify(dog));
})();