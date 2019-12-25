CREATE TABLE TAIKHOAN (
    MATK INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    USERNAME VARCHAR(16) NOT NULL,
    PWD VARCHAR(20) NOT NULL,
    QUYEN TINYINT(1),
)

CREATE TABLE CHUDE (
    MACD INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    TENCD VARCHAR(30) NOT NULL,
    NGUPHAP VARCHAR(500),
)

CREATE TABLE NDUNG (
    MACD INT(10),
    CAPDO INT,
    MACH INT,
    LOAI INT,
    NDUNGCD NVARCHAR(100)
    DAPAN NVARCHAR(100)
    PRIMARY KEY(MACD, CAPDO, MACH)
)
ALTER TABLE CHUDE
    ADD FOREIGN KEY(MACD) REFERENCES NDUNG(MACD);

INSERT INTO `TAIKHOAN`(USERNAME,PWD,QUYEN) 
VALUES 
    ('admin','123456','0'),
    ('lhtthao','123456','1'),
    ('nhviet','123456','1'),
    ('nnbtam','123456','1'),
    ('pbminh','123456','1');

INSERT INTO `CHUDE`(TENCD) 
VALUES 
    ('Trái cây'),
    ('Động vật');

INSERT INTO `NDUNG`(MACD, CAPDO, MACH, LOAI, NDUNGCH, DAPAN) 
VALUES 
    (1, 1, 1, 1, N'Họ ăn một quả dâu', N'They eat a strawberry'),
    (1, 1, 2, 1, N'Chúng ta ăn thịt', N'We eat meat'),
    (1, 1, 3, 1, N'Người đàn ông ăn một quả cà chua', N'The man eats a tomato'),
    (1, 1, 4, 2, N'Cô ấy ăn phô mai', N'she eats _'),
    (1, 1, 5, 2, N'Tôi là người ăn chay; I am _; vegetarian; vegetable; vegetarians; vegetation', 'A'),
    (1, 1, 6, 2, N'Anh ấy uống bia; He drinks _; milk; wine; water; beer', 'D'),
    (1, 1, 7, 2, N'Tôi có một cái đĩa', N'I have a _; fork; bowl; plate; chopstick', 'C'),
    (1, 1, 8, 3, N'I eat meat', null),
    (1, 1, 9, 3, N'I drink beer', null),
    (1, 1, 10, 3, N'They eat food', null),
    (2, 1, 1, 1, N'Nó là một con rùa', N'It is a turtle'),
    (2, 1, 2, 1, N'Con ngựa ăn một quả táo', N'The horse eats an apple'),
    (2, 1, 3, 1, N'Con mèo uống sữa', N'The cat drinks milk'),
    (2, 1, 4, 2, N'Con chó uống nước; The _ drinks water; cat; dog; bird; mouse;', 'B'),
    (2, 1, 5, 2, N'Con cua ở dưới nước; The _ is under the water; crab; fish; shrimp; dolphin','A'),
    (2, 1, 6, 2, N'Nhà tôi có một con chuột; My house have a _; chicken; mouse; pig; cow', 'B'),
    (2, 1, 7, 2, N'Con voi thì to; The _ is big; mouse; crab; cat; elephant', 'D');
    (2, 1, 8, 3, N'I have a cat', null),
    (2, 1, 9, 3, N'A mouse and an elephant', null),
    (2, 1, 10, 3, N'You have a dog', null),

