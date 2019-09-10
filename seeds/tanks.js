
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tanks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tanks').insert([
        {id: 1, litres: '50', img:'image url goes here'},
        {id: 2, litres: '70', img: 'image url goes here'},
        {id: 3, litres: '120', img: 'https://www.redwoodaquatics.co.nz/wp-content/uploads/2017/08/product_1067.jpg'},
        {id: 4, litres: '170', img: 'http://www.aquarium-site.com/wp-content/uploads/2019/01/tank-aquariums-of-aqua-one-silver-ufo-700-corner-fish-675.jpg'}
      ]);
    });
};
