const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

const users = [
    {
        username: 'Alfred',
        email: 'alfred@gmail.com',
    },
    {
        username: 'Bobby',
        email: 'Bobby@gmail.com'
    },
    {
        username: 'Chris',
        email: 'chris@gmail.com'
    },
    {
        username: 'Dennis',
        email: 'dennis@gmail.com'
    },
    {
        username: 'Eric',
        email: 'eric@gmail.com'
    },
    {
        username: 'Frank',
        email: 'frank@gmail.com'
    },
    {
        username: 'Gabe',
        email: 'gabe@gmail.com'
    },
    {
        username: 'Hillary',
        email: 'hillary@gmail.com'
    },
    {
        username: 'Iman',
        email: 'iman@gmail.com'
    },
    {
        username: 'Jona',
        email: 'jona@gmail.com'
    },
    {
        username: 'Kelise',
        email: 'kelise@gmail.com'
    },
  ]

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});
  
    await User.collection.insertMany(users);

    console.info('Seeding complete! 🌱');
    process.exit(0);
  });
  