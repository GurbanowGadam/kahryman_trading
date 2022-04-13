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


CREATE TABLE "mails"(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "mail" CHARACTER VARYING(50) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp()
);

INSERT INTO mails(mail) VALUES('info@kahrymantrading.com');

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

INSERT INTO footer("lang_id", "text", "right") 
VALUES
('b2365323-12f3-4f39-9846-100bdaf42271','footer_text...footer_text...en','ALL RIGHTS RESERVED_en.'),
('06a0affa-2e7a-49f0-8cfe-7cdb06265229','footer_text...footer_text...ru','ALL RIGHTS RESERVED_ru.');

CREATE TABLE "home_translation"(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "lang_id" uuid NOT NULL,
    "image_text" TEXT NOT NULL,
    "topic_title" CHARACTER VARYING(25) NOT NULL,
    "faciliti_title_s" CHARACTER VARYING(25) NOT NULL,
    "faciliti_title_b" CHARACTER VARYING(25) NOT NULL,
    "faciliti_content" TEXT NOT NULL,
    "agencie_title" CHARACTER VARYING(25) NOT NULL,
    "agencie_content" TEXT NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT home_translation_lang_id_fk
        FOREIGN KEY("lang_id")
            REFERENCES languages("id")
                ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO home_translation(lang_id, image_text, topic_title, faciliti_title_s, faciliti_title_b, faciliti_content, agencie_title, agencie_content)
VALUES
('b2365323-12f3-4f39-9846-100bdaf42271','image_text....image_text....en','topic_title...en','faciliti_title_s...en','faciliti_title_b...en','faciliti_content...en','agencie_title...en','agencie_content...en'),
('06a0affa-2e7a-49f0-8cfe-7cdb06265229','image_text....image_text....ru','topic_title...ru','faciliti_title_s...ru','faciliti_title_b...ru','faciliti_content...ru','agencie_title...ru','agencie_content...ru');

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



CREATE TABLE about_translation(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "lang_id" uuid NOT NULL,
    "small_title" CHARACTER VARYING(25) NOT NULL,
    "big_title" CHARACTER VARYING(25) NOT NULL,
    "content" TEXT NOT NULL,
    "button_text" CHARACTER VARYING(25) NOT NULL,
    "image_path" CHARACTER VARYING(75) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT about_translation_lang_id_fk
        FOREIGN KEY("lang_id")
            REFERENCES languages("id")
                ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO about_translation(lang_id, small_title, big_title, content, button_text, image_path)
VALUES
('7a982366-ee48-4344-8c3b-33afea798205','about_small_title_en','about_big_title_en','about_content_en','button_text_en', 'image_path.jpg');


CREATE TABLE products_translation(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "lang_id" uuid NOT NULL,
    "name" CHARACTER VARYING(25) NOT NULL,
    "text" TEXT NOT NULL,
    "image_path" CHARACTER VARYING(75) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT products_translation_lang_id_fk
        FOREIGN KEY("lang_id")
            REFERENCES languages("id")
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


CREATE TABLE header_text_translation(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "lang_id" uuid NOT NULL,
    "menu" CHARACTER VARYING(15) NOT NULL,
    "small_text" CHARACTER VARYING(25) NOT NULL,
    "text" CHARACTER VARYING(250) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT header_text_translation_lang_id_fk
        FOREIGN KEY("lang_id")
            REFERENCES languages("id")
                ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE header_image(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "menu" CHARACTER VARYING(15) NOT NULL,
    "image_path" CHARACTER VARYING(75) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp()
);

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

INSERT INTO "address"(lang_id, address) 
VALUES
('b2365323-12f3-4f39-9846-100bdaf42271','address....address.....en'),
('06a0affa-2e7a-49f0-8cfe-7cdb06265229','address....address.....ru');

CREATE TABLE "statistics"(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "lang_id" uuid NOT NULL,
    "text" CHARACTER VARYING(50) NOT NULL,
    "number" NUMERIC(10) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT locasions_lang_id_fk
        FOREIGN KEY("lang_id")
            REFERENCES languages("id")
                ON DELETE CASCADE ON UPDATE CASCADE
);



CREATE TABLE "topics_translations"(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "lang_id" uuid NOT NULL,
    "title" CHARACTER VARYING(25) NOT NULL,
    "content" TEXT NOT NULL,
    "image_path" CHARACTER VARYING(75) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT topics_translations_lang_id_fk
        FOREIGN KEY("lang_id")
            REFERENCES languages("id")
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


