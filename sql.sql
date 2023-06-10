CREATE TABLE produtos (
codigo SERIAL PRIMARY KEY, 
titulo TEXT NOT NULL, 
data_cadastro DATE, 
preco FLOAT, 
descricao TEXT NOT NULL, 
imagem TEXT NOT NULL
)

INSERT INTO produtos (titulo, data_cadastro, preco, descricao, imagem)
VALUES 
('Xiaomi Mi Band 7', '20230610', 208.00, 'Xiaomi Mi Band 7 Smartwatch Mi Band 7 Pulseira Inteligente Esportiva, Versão Global,Preto', 'https://m.media-amazon.com/images/I/51zdWxYDIeL._AC_SX522_.jpg'),
('Cooler Fan', '20230622', 24.89, 'Cooler Fan C3Tech F7-100BK Storm 12x12x2.5 cm Preto - Rolamento FDB 12v 1200RPM', 'https://m.media-amazon.com/images/I/51oM0asXqBL._AC_SX679_.jpg'),
('Fire TV Stick', '20230630', 351.55, 'Fire TV Stick | Streaming em Full HD com Alexa | Com Controle Remoto por Voz com Alexa', 'https://m.media-amazon.com/images/I/61DjN6pVKBL._AC_SX679_.jpg'),
('Echo Dot ', '20220711', 331.55, 'Echo Dot (3ª Geração): Smart Speaker com Alexa - Cor Preta', 'https://m.media-amazon.com/images/I/51+iQTwDsXL._AC_SX679_.jpg'), 
('Novo Kindle 11ª Geração', '20210425', 474.05, 'Novo Kindle 11ª Geração: Mais leve, tela de alta resolução e com o dobro de armazenamento - Cor Preta', 'https://m.media-amazon.com/images/I/71iBahDbhmL._AC_SX679_.jpg'),
('Samsung Galaxy S23', '20230629', 4.15900, 'Samsung Galaxy S23 5G 128GB Tela 6.1'' 8GB RAM IP68 Processador Qualcomm Snapdragon 8 Gen 2 Câmera Tripla de até 50MP + Selfie 12MP - Verde', 'https://m.media-amazon.com/images/I/61KuO4aH5jL._AC_SX679_.jpg'),
('Geonav Cabo Micro USB', '20230622',24.21, 'Geonav Cabo Micro USB, nylon trançado, para dispositivo Android e acessórios, 1,5 MT, MIC15T, Cinza','https://m.media-amazon.com/images/I/71DSeYXsIpL._AC_SX569_.jpg'),
('Adaptador de Ethernet da Amazon para Fire TV', '20230923', 119.00, 'Adaptador de Ethernet da Amazon para Fire TV','https://m.media-amazon.com/images/I/31OI2+BqVDL._AC_.jpg'),
('Clamper Energia 5 Tomadas', '20231025', 50.00, 'Clamper Energia 5 Tomadas','https://m.media-amazon.com/images/I/51C9M7zl-5L._AC_SX522_.jpg')