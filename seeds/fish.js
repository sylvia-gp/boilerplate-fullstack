
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fish').del()
    .then(function () {
      // Inserts seed entries
      return knex('fish').insert([
        {id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXwbZdKBYkZVPCVndfQRQvRCBjmAlkDdjUWAP2T6GzwEoyTFxI', species: 'Angelfish', quantity: '1', tank_id: '4'},
        {id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfhRe2vil3SVWmqP64V4fXJndGfoeOfV7b5HRj6ggnXJwgp5ls', species: 'Sparkling Gourami', quantity: '6', tank_id: '3'},
        {id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTu113AjV5UZKRpkroezVEwuGeMpRLJhP2_Boamx3rfFYsQcs2v', species: 'Pea Puffers', quantity: '3', tank_id: '2'},
        {id: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgFPO216_ahZOcdVvXCzPwyVQNdwLimzWVx5qZ6eDm-8yNdolV', species: 'Pygmy Corys', quantity: '8', tank_id: '1'},
        {id: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYMMf4XmxGTfCvQjxsh8dNJr7WzhTWhfqyxBFQ6PwNnji21E79', species: 'Albino Long-finned Bristlenoses', quantity: '2', tank_id: '4'},
        {id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHC3jQOgQogh-jOm6knAkVlSFiPL9_OFzbaXiAuxHSf6J1qdcT', species: 'Rio Salinas Corys', quantity: '8', tank_id: '3'},
        {id: 7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQon6HBu13BrQKyf9YUW4_wLzVdQBURcNAr1LSCv6J_bjelc0h1', species: 'Black Orchid Crowntail Betta', quantity: '1', tank_id: '1'},
      ]);
    });
};
