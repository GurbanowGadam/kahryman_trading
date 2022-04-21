DROP ROLE IF EXISTS kahryman_db_user;
DROP DATABASE IF EXISTS kahryman;

CREATE ROLE kahryman_db_user LOGIN SUPERUSER PASSWORD 'KT_salam^2';
CREATE DATABASE kahryman;


\c kahryman

SET client_encoding TO 'UTF-8';

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE languages(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "name" CHARACTER VARYING(25) NOT NULL,
    "short_name" CHARACTER VARYING(5) NOT NULL,
    "image_path" CHARACTER VARYING(75) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp(),
    UNIQUE("short_name")
);

    
CREATE TABLE "image"(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "image_path" CHARACTER VARYING(75) NOT NULL,
    "role" CHARACTER VARYING(25) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp()
);

CREATE TABLE "gallery"(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "gallery_path" CHARACTER VARYING(75) NOT NULL,
    "type" CHARACTER VARYING(25) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp()
);


CREATE TABLE "phone_numbers"(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "number" CHARACTER VARYING(25) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp()
);

CREATE TABLE "sliders"(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "image_path" CHARACTER VARYING(75) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp()
);


CREATE TABLE "mails"(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "mail" CHARACTER VARYING(50) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp()
);

CREATE TABLE "footer"(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "lang_id" uuid NOT NULL,
    "text" CHARACTER VARYING(200) NOT NULL,
    "right" CHARACTER VARYING(75) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT footer_lang_id_fk
        FOREIGN KEY("lang_id")
            REFERENCES languages("id")
                ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "home_translation"(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "lang_id" uuid NOT NULL,
    "topic_title" CHARACTER VARYING(25) NOT NULL,
    "faciliti_title_s" CHARACTER VARYING(25) NOT NULL,
    "faciliti_title_b" CHARACTER VARYING(25) NOT NULL,
    "faciliti_text" TEXT NOT NULL,
    "agencie_title" CHARACTER VARYING(25) NOT NULL,
    "agencie_content" TEXT NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT home_translation_lang_id_fk
        FOREIGN KEY("lang_id")
            REFERENCES languages("id")
                ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "faciliti_images"(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "image_path" CHARACTER VARYING(75) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp()
);
INSERT INTO faciliti_images(image_path)
VALUES
('upload\faciliti_images\image.jpg'),
('upload\faciliti_images\image.jpg'),
('upload\faciliti_images\image.jpg'),
('upload\faciliti_images\image.jpg'),
('upload\faciliti_images\image.jpg'),
('upload\faciliti_images\image.jpg');


CREATE TABLE contact_translation(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "lang_id" uuid NOT NULL,
    "title" CHARACTER VARYING(50) NOT NULL,
    "title_address" CHARACTER VARYING(50) NOT NULL,
    "name" CHARACTER VARYING(25) NOT NULL,
    "company_name" CHARACTER VARYING(25) NOT NULL,
    "mail" CHARACTER VARYING(25) NOT NULL,
    "subject" CHARACTER VARYING(25) NOT NULL,
    "message" CHARACTER VARYING(25) NOT NULL,
    "button_text" CHARACTER VARYING(10) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT contact_translation_lang_id_fk
        FOREIGN KEY("lang_id")
            REFERENCES languages("id")
                ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO contact_translation(lang_id, title, title_address, name, company_name, mail, subject, message, button_text )
VALUES
('7a982366-ee48-4344-8c3b-33afea798205','title_en','title_en','name_en','company_name_en','mail_en','subject_en','message_en','button_en');

CREATE TABLE about(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "image_path" CHARACTER VARYING(75) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp()
);
insert into about(image_path) VALUES('upload\about\0b9bd9aef74625c2898d028684d34151-l 1 (1).jpg');s

CREATE TABLE about_translation(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "lang_id" uuid NOT NULL,
    "about_id" uuid NOT NULL,
    "small_title" CHARACTER VARYING(25) NOT NULL,
    "big_title" CHARACTER VARYING(25) NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT about_translation_lang_id_fk
        FOREIGN KEY("lang_id")
            REFERENCES languages("id")
                ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT about_translation_about_id_fk
        FOREIGN KEY("about_id")
            REFERENCES about("id")
                ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO about_translation(lang_id, about_id, small_title, big_title, content)
VALUES
('7a982366-ee48-4344-8c3b-33afea798205','77667558-84b1-4f64-8107-8351001ae870','who we are','About us','Kahraman trading is one of the leading global organization engaged in source and supply of all types of fertilizers and chemicals with our own freight transportation sector. Our company has positioned itself to respond positively to any demand in the market based on our ability to call upon our network of worldwide contact to provide goods and services. Kahraman Trading now stands for a progressive brand that is synonymous with quality dealing in sulfur, urea 46, petroleum coke, potassium chloride, coals and etc. Our strategy is to fulfill the requirements of our various clients and Organizations by discussing all opportunities transparently. Therefore, our team strives for perfection is an on-going and high priority target. To achieve this target, our company adheres to the international code of conduct & follows them to the last detail.
');

CREATE TABLE products(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "image_path" CHARACTER VARYING(75) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp()
);


CREATE TABLE products_translation(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "lang_id" uuid NOT NULL,
    "product_id" uuid NOT NULL,
    "name" CHARACTER VARYING(25) NOT NULL,
    "text" TEXT NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT products_translation_lang_id_fk
        FOREIGN KEY("lang_id")
            REFERENCES languages("id")
                ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT products_translation_product_id_fk
        FOREIGN KEY("product_id")
            REFERENCES products("id")
                ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE menu_translation(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "lang_id" uuid NOT NULL,
    "name" CHARACTER VARYING(25) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT menu_translation_lang_id_fk
        FOREIGN KEY("lang_id")
            REFERENCES languages("id")
                ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE header(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "menu" CHARACTER VARYING(15) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp()
);



CREATE TABLE header_image(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "menu" CHARACTER VARYING(15) NOT NULL,
    "image_path" CHARACTER VARYING(75) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp()
);

INSERT INTO header_image(menu, image_path)
VALUES
('home','upload\headers\0002_10-1.jpg'),
('about','upload\headers\images.jpeg'),
('gallery','upload\headers\0002_10-1.jpg'),
('product','upload\headers\images.jpeg'),
('contact','upload\headers\0002_10-1.jpg'),

('home','upload\headers\images.jpeg'),
('about','upload\headers\0002_10-1.jpg'),
('gallery','upload\headers\images.jpeg'),
('product','upload\headers\0002_10-1.jpg'),
('contact','upload\headers\images.jpeg');

CREATE TABLE header_text_translation(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "lang_id" uuid NOT NULL,
    "header_image_id" uuid NOT NULL,
    "small_text" CHARACTER VARYING(25) NOT NULL,
    "text" CHARACTER VARYING(250) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT header_text_translation_lang_id_fk
        FOREIGN KEY("lang_id")
            REFERENCES languages("id")
                ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT header_text_translation_header_image_id_fk
        FOREIGN KEY("header_image_id")
            REFERENCES header_image("id")
                ON DELETE CASCADE ON UPDATE CASCADE
);
 a374001e-2fa9-4492-852a-392796d337e9 | home    | upload\headers\0002_10-1.jpg | 2022-04-19 09:12:06.073124+03
 b2db1c2a-d88f-4961-849c-2fc23e0d6f8f | about   | upload\headers\images.jpeg   | 2022-04-19 09:12:06.078137+03
 e7682b68-41d5-43ff-961e-4406816bdc03 | gallery | upload\headers\0002_10-1.jpg | 2022-04-19 09:12:06.078921+03
 fa2a4035-9e89-4054-b33e-89eb277efba2 | product | upload\headers\images.jpeg   | 2022-04-19 09:12:06.079395+03
 5e89a8db-7d5b-49b4-9146-9be6ffbdf4a9 | contact | upload\headers\0002_10-1.jpg | 2022-04-19 09:12:06.079824+03
 e5ad4e14-7117-4997-8429-46e182f4dc86 | home    | upload\headers\images.jpeg   | 2022-04-19 09:12:06.080252+03
 5cc6fca6-0a2d-4e61-8aef-35aa085c8a38 | about   | upload\headers\0002_10-1.jpg | 2022-04-19 09:12:06.080664+03
 6f9492a7-16d0-4cea-b387-94fa84edc61c | gallery | upload\headers\images.jpeg   | 2022-04-19 09:12:06.081243+03
 93706640-9bda-4c8e-b65b-300013f67b59 | product | upload\headers\0002_10-1.jpg | 2022-04-19 09:12:06.081831+03
 c6355544-8242-4c37-a95e-3b34d1d25278 | contact | upload\headers\images.jpeg   | 2022-04-19 09:12:06.082265+03

                  id                  |  name   | short_name |            image_path             |          created_at
--------------------------------------+---------+------------+-----------------------------------+-------------------------------
 7a982366-ee48-4344-8c3b-33afea798205 | english | en         | upload/language/1649752422799.jpg | 2022-04-12 11:35:12.837456+03
 e0b1effc-d822-47df-9ef7-34b239e6dc23 | rus     | ru         | upload/language/1649752422799.jpg | 2022-04-15 14:21:22.022634+03

INSERT INTO header_text_translation(lang_id, header_image_id, small_text, text)
VALUES
('7a982366-ee48-4344-8c3b-33afea798205', 'a374001e-2fa9-4492-852a-392796d337e9', 'small_text_en_1.1', 'text_en_1.1'),
('7a982366-ee48-4344-8c3b-33afea798205', 'b2db1c2a-d88f-4961-849c-2fc23e0d6f8f', 'small_text_en_2.1', 'text_en_2.1'),
('7a982366-ee48-4344-8c3b-33afea798205', 'e7682b68-41d5-43ff-961e-4406816bdc03', 'small_text_en_3.1', 'text_en_3.1'),
('7a982366-ee48-4344-8c3b-33afea798205', 'fa2a4035-9e89-4054-b33e-89eb277efba2', 'small_text_en_4.1', 'text_en_4.1'),
('7a982366-ee48-4344-8c3b-33afea798205', '5e89a8db-7d5b-49b4-9146-9be6ffbdf4a9', 'small_text_en_5.1', 'text_en_5.1'),
('7a982366-ee48-4344-8c3b-33afea798205', 'e5ad4e14-7117-4997-8429-46e182f4dc86', 'small_text_en_1.2', 'text_en_1.2'),
('7a982366-ee48-4344-8c3b-33afea798205', '5cc6fca6-0a2d-4e61-8aef-35aa085c8a38', 'small_text_en_2.2', 'text_en_2.2'),
('7a982366-ee48-4344-8c3b-33afea798205', '6f9492a7-16d0-4cea-b387-94fa84edc61c', 'small_text_en_3.2', 'text_en_3.2'),
('7a982366-ee48-4344-8c3b-33afea798205', '93706640-9bda-4c8e-b65b-300013f67b59', 'small_text_en_4.2', 'text_en_4.2'),
('7a982366-ee48-4344-8c3b-33afea798205', 'c6355544-8242-4c37-a95e-3b34d1d25278', 'small_text_en_5.2', 'text_en_5.2'),

('e0b1effc-d822-47df-9ef7-34b239e6dc23', 'a374001e-2fa9-4492-852a-392796d337e9', 'small_text_ru_1.1', 'text_ru_1.1'),
('e0b1effc-d822-47df-9ef7-34b239e6dc23', 'b2db1c2a-d88f-4961-849c-2fc23e0d6f8f', 'small_text_ru_2.1', 'text_ru_2.1'),
('e0b1effc-d822-47df-9ef7-34b239e6dc23', 'e7682b68-41d5-43ff-961e-4406816bdc03', 'small_text_ru_3.1', 'text_ru_3.1'),
('e0b1effc-d822-47df-9ef7-34b239e6dc23', 'fa2a4035-9e89-4054-b33e-89eb277efba2', 'small_text_ru_4.1', 'text_ru_4.1'),
('e0b1effc-d822-47df-9ef7-34b239e6dc23', '5e89a8db-7d5b-49b4-9146-9be6ffbdf4a9', 'small_text_ru_5.1', 'text_ru_5.1'),
('e0b1effc-d822-47df-9ef7-34b239e6dc23', 'e5ad4e14-7117-4997-8429-46e182f4dc86', 'small_text_ru_1.2', 'text_ru_1.2'),
('e0b1effc-d822-47df-9ef7-34b239e6dc23', '5cc6fca6-0a2d-4e61-8aef-35aa085c8a38', 'small_text_ru_2.2', 'text_ru_2.2'),
('e0b1effc-d822-47df-9ef7-34b239e6dc23', '6f9492a7-16d0-4cea-b387-94fa84edc61c', 'small_text_ru_3.2', 'text_ru_3.2'),
('e0b1effc-d822-47df-9ef7-34b239e6dc23', '93706640-9bda-4c8e-b65b-300013f67b59', 'small_text_ru_4.2', 'text_ru_4.2'),
('e0b1effc-d822-47df-9ef7-34b239e6dc23', 'c6355544-8242-4c37-a95e-3b34d1d25278', 'small_text_ru_5.2', 'text_ru_5.2');


CREATE TABLE "address"(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "lang_id" uuid NOT NULL,
    "address" CHARACTER VARYING(100) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT locasions_lang_id_fk
        FOREIGN KEY("lang_id")
            REFERENCES languages("id")
                ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE "statistics"(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "number" NUMERIC(10) NOT NULL,
    "title" CHARACTER VARYING(50) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp()
);


CREATE TABLE "statistics_translations"(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "lang_id" uuid NOT NULL,
    "statistics_id" uuid NOT NULL,
    "title" CHARACTER VARYING(50) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT statistics_translations_lang_id_fk
        FOREIGN KEY("lang_id")
            REFERENCES languages("id")
                ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT statistics_translations_statistics_id_fk
        FOREIGN KEY("statistics_id")
            REFERENCES statistics("id")
                ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "topics"(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "title" CHARACTER VARYING(25) NOT NULL,
    "content" TEXT NOT NULL,
    "image_path" CHARACTER VARYING(75) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp()
);

INSERT INTO topics(title, content, image_path) 
VALUES
('title_1', 'content_1', 'image_path_1'),
('title_2', 'content_2', 'image_path_2'),
('title_3', 'content_3', 'image_path_3'),
('title_4', 'content_4', 'image_path_4'),
('title_5', 'content_5', 'image_path_5');

CREATE TABLE "topics_translations"(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "lang_id" uuid NOT NULL,
    "topic_id" uuid NOT NULL,
    "title" CHARACTER VARYING(25) NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT topics_translations_lang_id_fk
        FOREIGN KEY("lang_id")
            REFERENCES languages("id")
                ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT topics_translations_topic_id_fk
        FOREIGN KEY("topic_id")
            REFERENCES topics("id")
                ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "admins"(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "username" CHARACTER VARYING(25) NOT NULL,
    "role" CHARACTER VARYING(25) NOT NULL,
    "email" CHARACTER VARYING(50) NOT NULL,
    "password" CHARACTER VARYING(150) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp()
);

INSERT INTO admins(username, "role", email, "password") VALUES ('kahryman', 'superadmin', 'gadamgurbanaga@gmail.com','$2b$10$4g54bq0dVLzVrvT6q.s3cOYZ3FeSBrosY1QWxIB4Yo4N8szuPSiSa')


