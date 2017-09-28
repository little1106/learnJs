const model = require('./model');

let Pet = model.pet,
    User = model.use;

(async () => {
    var user = await User.create({
        name: 'penghuiwu',
        gender: false,
        email: 'penghuiwu-' + Date.now() + '@garfield.pet',
        passwd: 'hahaha'
    });
    user.gender = true;
    await user.save();
    console.log('created: ' + JSON.stringify(user));
    var cat = await Pet.create({
        ownerId: user.id,
        name: 'Garfield',
        gender: false,
        birth: '2007-07-07',
    });
    cat.gender =true;
    console.log('created: ' + JSON.stringify(cat));
    var dog = await Pet.create({
        ownerId: user.id,
        name: 'Odie',
        gender: false,
        birth: '2008-08-08',
    });
    await dog.save();
    console.log('created: ' + JSON.stringify(dog));
})();
