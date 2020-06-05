const initialState = {
  all: [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1519112232436-9923c6ba3d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      tags: ['City', 'Canals'],
      name: 'Explore the beautiful streets of Venice.',
      price: 455,
      popularity: 5,
    },
    {
      id: 2,
      image:
        'https://images.pexels.com/photos/4064446/pexels-photo-4064446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['Explore', 'Adventure'],
      name: 'Hike to the summit of the Etna Volcano.',
      price: 110,
      popularity: 3,
    },
    {
      id: 3,
      image:
        'https://images.pexels.com/photos/2440524/pexels-photo-2440524.jpeg?cs=srgb&dl=clear-wine-glass-on-a-barrel-2440524.jpg&fm=jpg',
      tags: ['Vino', 'Explore'],
      name: 'Wine tasting in acient wine cellars.',
      price: 49,
      popularity: 2,
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1534425582704-65e021820688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      tags: ['Culinary', 'City'],
      name: 'Visit the kitchen of some famous Italian chefs.',
      price: 120,
      popularity: 4,
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1529419412599-7bb870e11810?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      tags: ['Explore', 'Adventure'],
      name: 'Climb the highest snow capped peaks of Italy.',
      price: 330,
      popularity: 1,
    },
  ],
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
