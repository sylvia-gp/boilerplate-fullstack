
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tanks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tanks').insert([
        {id: 1, litres: '50', img:'https://files.slack.com/files-pri/T02SQPVAC-FND3Q5E6S/20190219_175624.jpg'},
        {id: 2, litres: '70', img: 'https://files.slack.com/files-pri/T02SQPVAC-FNASZNNQM/20190325_131044.jpg'},
        {id: 3, litres: '120', img: 'https://files.slack.com/files-pri/T02SQPVAC-FNCNTUHBR/20190910_200934.jpg'},
        {id: 4, litres: '170', img: 'https://files.slack.com/files-pri/T02SQPVAC-FNAT0JWSZ/20190910_200907.jpg'}
      ]);
    });
};
