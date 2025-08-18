/* CREATE USERS */

INSERT INTO users (first_name, last_name, address, phone_number, password, email)
VALUES ('Pepito', 'Perez', '123 Main St', 1234567890, '$2b$10$FAkzbsXVvEg//C4ELYgx2uAGktaF5DzRcPaaDOpvWSRdVqPkGO85C', 'pepito@test.com');
-- PASSWORD 1234 
INSERT INTO users (first_name, last_name, address, phone_number, password, email)
VALUES ('Mickey', 'Mouse', '234 Disney St', 0987654321, '$2b$10$0I1T4RECuDN7MrpiaEGxkuZ/fNWGPD6R5MJo5E5F2jKFJsMHwqWQe', 'mickey@disney.com');
-- PASSWORD qwer
INSERT INTO users (first_name, last_name, address, phone_number, password, email)
VALUES ('John', 'Doe', '78 Red Boulvard', 341237890, '$2b$10$x71GetFh/o2Pv1iZlLE5lexs9zsE1jVEwatjd9xO/jrZQDz2uZJjC', 'john.doe@test.com');
-- PASSWORD asdf

/* CREATE PRODUCTS */

INSERT INTO products (user_id, title, price, description, stock, image_url, category)
VALUES (1, 'Donde las papas queman', 20000, 'crear divertidos recuerdos y pasarás momentos inolvidables junto a tus amigos y amigas. Con este pasatiempo entretenido las risas están aseguradas', 10, 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRGr59QJeV-tM3ydzODa_1wP0mODb9K_y95ZXI8wkcbErbz4TwNVTMtqV9cmNFvBDb2xZX_ZuB1T4IwvY9B3bfw878SM95cfccbbJwuSZUK1FbidJMPMSJo', 'Juegos de Mesa');

INSERT INTO products (user_id, title, price, description, stock, image_url, category)
VALUES (1, 'Sailor Moon & Luna', 16990, 'Nuevo en caja
Version Anime Sailor Moon', 5, 'https://http2.mlstatic.com/D_NQ_NP_948248-MLC76856821344_062024-O.webp', 'Figuras Coleccionables');

INSERT INTO products (user_id, title, price, description, stock, image_url, category)
VALUES (2, 'Goku Dragon Ball', 32000, 'Son Goku, también conocido como Kakarotto, es el personaje principal de la manga y anime de Dragon Ball', 5, 'https://http2.mlstatic.com/D_NQ_NP_820862-MLU71652616644_092023-O.webp', 'Figuras Coleccionables');

INSERT INTO products (user_id, title, price, description, stock, image_url, category)
VALUES (2, 'Grogu Plush Toy', 28990, '11 Pulgadas Star Wars Grogu Plush Toy de The Mandalorian', 3, 'https://i5.walmartimages.com/seo/Star-Wars-Grogu-Plush-Toy-11-In-Yoda-Baby-Figure-From-The-Mandalorian_3038f89c-9b9d-4aa9-9da9-7142f510133c.12ea50f594ee2bff0f036d035bb545a7.jpeg', 'Figuras Coleccionables');

INSERT INTO products (user_id, title, price, description, stock, image_url, category)
VALUES (2, 'Cartas Magic Bundle Assasin Creed', 65000, 'Un bundle lleno de cartas y accesorios: abre una caja repleta de cartas de Magic inspiradas en Assassins Creed', 8, 'https://m.media-amazon.com/images/I/71v-pklw0iL._AC_SX679_.jpg', 'TCG');

INSERT INTO products (user_id, title, price, description, stock, image_url, category)
VALUES (3, 'Album Pokemon', 25000, 'Álbum Pokémon Premium Más Colección Completa de Láminas Para pegar', 30, 'https://http2.mlstatic.com/D_NQ_NP_864803-MLC76997374343_062024-O.webp', 'Álbumes y Láminas');

INSERT INTO products (user_id, title, price, description, stock, image_url, category)
VALUES (3, 'El Asombroso Spiderman Vida y Muerte De Las arañas', 25990, 'Con “Vida y muerte de las arañas”. Pese al deseo de Mary Jane de mantenerse lejos de Nueva York y de Peter, éste no puede resistir ni un minuto más lejos de su esposa.', 7, 'https://www.crazyallcomics.cl/media/catalog/product/cache/23/image/500x400/17f82f742ffe127f42dca9de82fb58b1/p/a/panini_marvel_saga_spiderman_03.jpg', 'Mangas y Cómics');

INSERT INTO products (user_id, title, price, description, stock, image_url, category)
VALUES (3, 'Batman de Killing Joke Edición Especial', 14000, 'El autor aclamado por la crítica, Alan Moore, redefinió la narrativa de novelas gráficas con Watchmen y V de Vendetta.', 14, 'https://m.media-amazon.com/images/I/81K4ioEeoVL._SY466_.jpg', 'Mangas y Cómics');

INSERT INTO products (user_id, title, price, description, stock, image_url, category)
VALUES (1, 'Hogwarts Battle', 34000, 'Regresa a Hogwarts, escuela de magia y hechicería con esta segunda expansión al juego Harry Potter: Batalla de Hogwarts con nuevas tarjetas, habilidades, personajes para jugar, y más', 17, 'https://m.media-amazon.com/images/I/81rKelELUnL._AC_SX679_.jpg', 'Juegos de Mesa');

INSERT INTO products (user_id, title, price, description, stock, image_url, category)
VALUES (1, 'Monopoly Edición de Batman', 25000, '¡Captura a los villanos para salvar Gotham City! Este juego Monopoly Batman Edition combina el clásico juego de Monopoly con personajes icónicos de Batman, temas y obras de arte', 22, 'https://m.media-amazon.com/images/I/81SA1AxQ9xL._AC_SX679_.jpg', 'Juegos de Mesa');

INSERT INTO products (user_id, title, price, description, stock, image_url, category)
VALUES (2, 'Patricio Estrella', 33000, 'Esculpida con un vientre abultado redondeado, un ombligo ligeramente sobresaliente y con sus pantalones cortos habituales, esta figura de vinilo de Youtooz Patrick tiene 3 billetes de dólar verde en su mano', 27, 'https://m.media-amazon.com/images/I/619tQj-VUnL._AC_SX679_.jpg', 'Figuras Coleccionables');

INSERT INTO products (user_id, title, price, description, stock, image_url, category)
VALUES (3, 'Manga My Hero Academy', 6000, 'Héroes y villanos estarían luchando en todas partes. ¡Ser un héroe significaría aprender a usar tu poder, pero ¿a dónde irías para estudiar? ¡A la Academia de Héroes, por supuesto!', 45, 'https://m.media-amazon.com/images/I/81AjnD8nvHL._SY466_.jpg', 'Mangas y Cómics');

INSERT INTO products (user_id, title, price, description, stock, image_url, category)
VALUES (3, 'Álbum Dragon Ball Z 4', 12500, 'Recrea las grandes peleas y aventuras de Gokú con el álbum Dragon Ball Z 4 Saga de Cell parte 2', 15, 'https://http2.mlstatic.com/D_NQ_NP_685544-MLU77791780309_072024-O.webp', 'Álbumes y Láminas');

INSERT INTO products (user_id, title, price, description, stock, image_url, category)
VALUES (2, 'One Piece Gift Collection', 48000, 'Bundle Box One Piece con 13 sobres de tus personajes favoritos', 3, 'https://kantocards.com/cdn/shop/files/giftcollection_720x.jpg?v=1696360145', 'TCG');

INSERT INTO products (user_id, title, price, description, stock, image_url, category)
VALUES (2, 'Album 40 sobres Elemental', 13000, 'El nuevo álbum de estampas basado en el éxito de Disney y Pixar Elementos. Es una historia ubicada en ciudad elemento, un lugar mágico y lleno de personajes diferentes y muy divertidos', 46, 'https://tiendapanini.cl/media/catalog/product/0/0/004680acl.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=897&width=960&canvas=960:897&dpr=1%201x', 'Álbumes y Láminas');
