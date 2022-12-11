export const db = [
  {
    nombre: 'Vela Navideña',
    tipo: 'velas',
    linea: 'navideña',
    aroma: 'jazmin',
    imagen: 'navidad01.jpg',
    descripcion:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laudantium, dolore reprehenderit vero recusandae corrupti voluptas cum iusto dolores eveniet.',
  },
  {
    nombre: 'Vela de Jazmin',
    tipo: 'velas',
    linea: 'basica',
    aroma: 'jazmin',
    imagen: 'navidad01.jpg',
    descripcion:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laudantium, dolore reprehenderit vero recusandae corrupti voluptas cum iusto dolores eveniet.',
  },
  {
    nombre: 'Vela de Lavanda',
    tipo: 'velas',
    linea: 'basica',
    aroma: 'lavanda',
    imagen: 'lavanda.jpg',
    descripcion:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laudantium, dolore reprehenderit vero recusandae corrupti voluptas cum iusto dolores eveniet.',
  },
  {
    nombre: 'Vela Geometrica',
    tipo: 'difusores',
    linea: 'astrologica',
    aroma: 'vainilla',
    imagen: 'geometrica.jpg',
    descripcion:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laudantium, dolore reprehenderit vero recusandae corrupti voluptas cum iusto dolores eveniet.',
  },
  {
    nombre: 'Coconut',
    tipo: 'home-spray',
    linea: 'espirituales',
    aroma: 'coco',
    imagen: 'cuenco.jpg',
    descripcion:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laudantium, dolore reprehenderit vero recusandae corrupti voluptas cum iusto dolores eveniet.',
  },
];

export const database = {
  velas: [
    {
      nombre: 'frascos',
      linea: 'velas',
      aromas: [
        'lavanda',
        'coco',
        'vainilla & miel',
        'jazmin',
        'chocolate',
        'vainilla',
        'mango & maracuya',
        'papaya',
        'gardenia',
        'cafe',
        'caramelo',
        'frutilla',
        'naranja',
      ],
      precio: 1300,
      imagen: 'lavanda.jpg',
      descripcion:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laudantium, dolore reprehenderit vero recusandae corrupti voluptas cum iusto dolores eveniet.',
    },
    {
      nombre: 'cristal',
      linea: 'velas',
      aromas: [
        'gardenia',
        'uva',
        'flores blancas',
        'cereza',
        'almendra',
        'limon',
        'melon',
        'opium',
      ],
      precio: 1600,
      imagen: 'geometrica.jpg',
      descripcion:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laudantium, dolore reprehenderit vero recusandae corrupti voluptas cum iusto dolores eveniet.',
    },
    {
      nombre: 'Para hornito',
      linea: 'velas',
      aromas: [
        'chocolate',
        'papaya',
        'vainilla & miel',
        'mango & maracuya',
        'gardenia',
        'palo santo',
        'sandalo',
      ],
      precio: 980,
      imagen: 'navidad01.jpg',
      descripcion:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laudantium, dolore reprehenderit vero recusandae corrupti voluptas cum iusto dolores eveniet.',
    },
    {
      nombre: 'cuenco sagrado',
      linea: 'velas',
      aromas: ['palo santo', 'sandalo', 'hierbas', 'almendra', 'eucalipto'],
      precio: 1250,
      imagen: 'cuenco.jpg',
      descripcion:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laudantium, dolore reprehenderit vero recusandae corrupti voluptas cum iusto dolores eveniet.',
    },
  ],
  difusores: [
    {
      nombre: 'difusores',
      linea: 'difusores',
      aromas: ['aroma 1', 'aroma 2', 'aroma 3'],
      precio: 740,
      imagen: 'cuenco.jpg',
      descripcion:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laudantium, dolore reprehenderit vero recusandae corrupti voluptas cum iusto dolores eveniet.',
    },
  ],
  'home-spray': [
    {
      nombre: 'home spray',
      linea: 'home spray',
      aromas: ['aroma 1', 'aroma 2', 'aroma 3'],
      precio: 880,
      imagen: 'lavanda.jpg',
      descripcion:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laudantium, dolore reprehenderit vero recusandae corrupti voluptas cum iusto dolores eveniet.',
    },
  ],
};
