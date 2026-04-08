import type { User } from '../model/types';

export const dataUsers: User[] = [
  { 
    id: 1, 
    name: 'Анна Кузнецова', 
    email: 'anna@example.com', 
    role: 'admin', 
    isActive: true, 
    avatar: 'https://i.pravatar.cc/150?img=1',
    age: 28,
    city: 'Москва',
    phone: '+7 (495) 123-45-67',
    registeredAt: '2023-01-15'
  },
  { 
    id: 2, 
    name: 'Иван Петров', 
    email: 'ivan@example.com', 
    role: 'user', 
    isActive: true, 
    avatar: 'https://i.pravatar.cc/150?img=2',
    age: 34,
    city: 'Санкт-Петербург',
    phone: '+7 (812) 987-65-43',
    registeredAt: '2023-02-20'
  },
  { 
    id: 3, 
    name: 'Мария Смирнова', 
    email: 'maria@example.com', 
    role: 'editor', 
    isActive: false, 
    avatar: 'https://i.pravatar.cc/150?img=3',
    age: 25,
    city: 'Казань',
    phone: '+7 (843) 555-12-34',
    registeredAt: '2023-03-10'
  },
  { 
    id: 4, 
    name: 'Алексей Иванов', 
    email: 'alex@example.com', 
    role: 'user', 
    isActive: true, 
    avatar: 'https://i.pravatar.cc/150?img=4',
    age: 41,
    city: 'Новосибирск',
    phone: '+7 (383) 222-33-44',
    registeredAt: '2023-01-05'
  },
  { 
    id: 5, 
    name: 'Елена Попова', 
    email: 'elena@example.com', 
    role: 'user', 
    isActive: false, 
    avatar: 'https://i.pravatar.cc/150?img=5',
    age: 29,
    city: 'Екатеринбург',
    phone: '+7 (343) 777-88-99',
    registeredAt: '2023-04-18'
  },
  { 
    id: 6, 
    name: 'Дмитрий Соколов', 
    email: 'dmitry@example.com', 
    role: 'admin', 
    isActive: true, 
    avatar: 'https://i.pravatar.cc/150?img=6',
    age: 37,
    city: 'Москва',
    phone: '+7 (495) 444-55-66',
    registeredAt: '2023-02-28'
  },
  // Добавленные пользователи
  { 
    id: 7, 
    name: 'Ольга Васильева', 
    email: 'olga@example.com', 
    role: 'editor', 
    isActive: true, 
    avatar: 'https://i.pravatar.cc/150?img=7',
    age: 32,
    city: 'Нижний Новгород',
    phone: '+7 (831) 111-22-33',
    registeredAt: '2023-05-12'
  },
  { 
    id: 8, 
    name: 'Павел Морозов', 
    email: 'pavel@example.com', 
    role: 'user', 
    isActive: false, 
    avatar: 'https://i.pravatar.cc/150?img=8',
    age: 26,
    city: 'Ростов-на-Дону',
    phone: '+7 (863) 999-00-11',
    registeredAt: '2023-06-25'
  },
  { 
    id: 9, 
    name: 'Татьяна Новикова', 
    email: 'tatiana@example.com', 
    role: 'admin', 
    isActive: true, 
    avatar: 'https://i.pravatar.cc/150?img=9',
    age: 45,
    city: 'Самара',
    phone: '+7 (846) 333-44-55',
    registeredAt: '2023-01-30'
  },
  { 
    id: 10, 
    name: 'Сергей Козлов', 
    email: 'sergey@example.com', 
    role: 'user', 
    isActive: true, 
    avatar: 'https://i.pravatar.cc/150?img=10',
    age: 22,
    city: 'Уфа',
    phone: '+7 (347) 777-66-55',
    registeredAt: '2023-07-07'
  },
  { 
    id: 11, 
    name: 'Юлия Зайцева', 
    email: 'yulia@example.com', 
    role: 'editor', 
    isActive: false, 
    avatar: 'https://i.pravatar.cc/150?img=11',
    age: 31,
    city: 'Волгоград',
    phone: '+7 (844) 222-33-44',
    registeredAt: '2023-08-19'
  },
  { 
    id: 12, 
    name: 'Андрей Лебедев', 
    email: 'andrey@example.com', 
    role: 'user', 
    isActive: true, 
    avatar: 'https://i.pravatar.cc/150?img=12',
    age: 38,
    city: 'Красноярск',
    phone: '+7 (391) 555-66-77',
    registeredAt: '2023-09-02'
  }
];