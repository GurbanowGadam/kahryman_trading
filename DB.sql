--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: about_image; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.about_image (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    image_path character varying(75) NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL,
    "position" character varying(25)
);


ALTER TABLE public.about_image OWNER TO postgres;

--
-- Name: about_translation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.about_translation (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    lang_id uuid NOT NULL,
    small_title character varying(25) NOT NULL,
    big_title character varying(25) NOT NULL,
    content text NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL
);


ALTER TABLE public.about_translation OWNER TO postgres;

--
-- Name: address; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.address (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    address character varying(100) NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL
);


ALTER TABLE public.address OWNER TO postgres;

--
-- Name: address_translations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.address_translations (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    lang_id uuid NOT NULL,
    address_id uuid NOT NULL,
    address character varying(100) NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL
);


ALTER TABLE public.address_translations OWNER TO postgres;

--
-- Name: admins; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admins (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    username character varying(25) NOT NULL,
    role character varying(25) NOT NULL,
    email character varying(50) NOT NULL,
    password character varying(150) NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL
);


ALTER TABLE public.admins OWNER TO postgres;

--
-- Name: contact_translation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contact_translation (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    lang_id uuid NOT NULL,
    title character varying(50) NOT NULL,
    title_address character varying(50) NOT NULL,
    name character varying(25) NOT NULL,
    company_name character varying(25) NOT NULL,
    mail character varying(25) NOT NULL,
    subject character varying(25) NOT NULL,
    message character varying(25) NOT NULL,
    button_text character varying(10) NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL
);


ALTER TABLE public.contact_translation OWNER TO postgres;

--
-- Name: faciliti_images; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.faciliti_images (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    image_path character varying(75) NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL
);


ALTER TABLE public.faciliti_images OWNER TO postgres;

--
-- Name: footer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.footer (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    lang_id uuid NOT NULL,
    text character varying(200) NOT NULL,
    bottum_title character varying(75) NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL
);


ALTER TABLE public.footer OWNER TO postgres;

--
-- Name: gallery; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gallery (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    gallery_path character varying(75) NOT NULL,
    type character varying(25) NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL,
    image_path character varying(75)
);


ALTER TABLE public.gallery OWNER TO postgres;

--
-- Name: header_image; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.header_image (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    menu character varying(15) NOT NULL,
    image_path character varying(75) NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL
);


ALTER TABLE public.header_image OWNER TO postgres;

--
-- Name: header_text_translation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.header_text_translation (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    lang_id uuid NOT NULL,
    header_image_id uuid NOT NULL,
    small_text character varying(75) NOT NULL,
    text character varying(250) NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL
);


ALTER TABLE public.header_text_translation OWNER TO postgres;

--
-- Name: home_translation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.home_translation (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    lang_id uuid NOT NULL,
    faciliti_text text NOT NULL,
    agencie_content text NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL,
    topic_title character varying(75),
    faciliti_title_s character varying(75),
    faciliti_title_b character varying(75),
    agencie_title character varying(75)
);


ALTER TABLE public.home_translation OWNER TO postgres;

--
-- Name: languages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.languages (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(25) NOT NULL,
    short_name character varying(5) NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL
);


ALTER TABLE public.languages OWNER TO postgres;

--
-- Name: mails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mails (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    mail character varying(50) NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL
);


ALTER TABLE public.mails OWNER TO postgres;

--
-- Name: menu_translation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.menu_translation (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    lang_id uuid NOT NULL,
    name character varying(25) NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL
);


ALTER TABLE public.menu_translation OWNER TO postgres;

--
-- Name: phone_numbers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.phone_numbers (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL,
    number character varying(25)
);


ALTER TABLE public.phone_numbers OWNER TO postgres;

--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    image_path character varying(75) NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: products_translation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_translation (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    lang_id uuid NOT NULL,
    product_id uuid NOT NULL,
    name character varying(25) NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL,
    button_text character varying(20)
);


ALTER TABLE public.products_translation OWNER TO postgres;

--
-- Name: sliders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sliders (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    image_path character varying(75) NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL
);


ALTER TABLE public.sliders OWNER TO postgres;

--
-- Name: statistics; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.statistics (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    number numeric(10,0) NOT NULL,
    title character varying(50) NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL
);


ALTER TABLE public.statistics OWNER TO postgres;

--
-- Name: statistics_translations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.statistics_translations (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    lang_id uuid NOT NULL,
    statistics_id uuid NOT NULL,
    title character varying(50) NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL
);


ALTER TABLE public.statistics_translations OWNER TO postgres;

--
-- Name: topics; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.topics (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    title character varying(25) NOT NULL,
    content text NOT NULL,
    image_path character varying(75) NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL
);


ALTER TABLE public.topics OWNER TO postgres;

--
-- Name: topics_translations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.topics_translations (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    lang_id uuid NOT NULL,
    topic_id uuid NOT NULL,
    title character varying(25) NOT NULL,
    content text NOT NULL,
    created_at timestamp with time zone DEFAULT clock_timestamp() NOT NULL
);


ALTER TABLE public.topics_translations OWNER TO postgres;

--
-- Data for Name: about_image; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.about_image (id, image_path, created_at, "position") FROM stdin;
b881c4f9-2a80-4d48-8220-33efbd365fce	api/upload/about-images/1651672477370	2022-04-27 18:17:59.033352+03	left
b583d208-b09b-4426-8eb4-f52b5adcc8c1	api/upload/about-images/1651672488480	2022-04-25 12:28:00.696282+03	left
9d9adb89-65f4-42be-a30c-8ebd89efb302	api/upload/about-images/1651672493943	2022-04-27 18:18:02.801186+03	left
8026ab12-7712-40aa-ae50-e3c7520fe99c	api/upload/about-images/1651672498747	2022-04-27 18:18:29.563354+03	left
b50af504-cd14-48d0-b1b2-9f0819554ad7	api/upload/about-images/1651672506738	2022-04-27 18:18:30.510212+03	left
90a00f8d-e9f1-4c86-a52f-158fd355af24	api/upload/about-images/1651672514573	2022-04-25 12:27:56.282773+03	bottom
3b812e3c-db91-493d-91cf-1f2209449a71	api/upload/about-images/1651672523536	2022-04-25 12:27:49.066126+03	left
\.


--
-- Data for Name: about_translation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.about_translation (id, lang_id, small_title, big_title, content, created_at) FROM stdin;
ce0962f9-aa91-403a-8293-70444377b7d0	7a982366-ee48-4344-8c3b-33afea798205	who we are	About us	  MARYLAND LLC is an international commodity trading house with its headquarters situated in Dubai. In a short span of time, MARYLAND LLC has expanded its network across various continents. We are committed to supply our clients with all types of fertilizers and petrochemicals with our own freight transportation sector. \n   \nThe management at MARYLAND LLC holds extensive knowledge and experience in the field of commodity trading. Over the years, we have passed on our expertise and passion for trading to all of the teams that work in 15 different countries and built a strong trading organization together. Our company has positioned itself to respond positively to any demand in the market based on our ability to call upon our network of worldwide contact to provide goods and services.\n   \nMARYLAND LLC now stands for a progressive brand that is synonymous with quality dealing in SULFUR, UREA 46, POTASSIUM CHLORIDE, POLYMER PRODUCTS, PETROLEUM COKE, COALS and etc. Our procurement teams are empowered by the strong presence on the ground at procurement centers and are aided by a dedicated team specializing in providing the best quality products. On the other hand, our marketing team is empowered by our presence at distribution centers and specializes in providing the best value to customers. \n\nThe company’s rapid expansion stems from the efficient, experienced and professional members of the organization, whose key focus is to create sustainable value for all stakeholders. The culture in MARYLAND LLC places strong emphasis on fulfilling the needs of customers, partners and suppliers, and at the same time fostering long-term relationships with them. \n\nThe company’s generic evolution has been an inspiration and encouragement for the entire organization. By upholding its core values strongly and capitalizing on its strengths, MARYLAND LLC will continue to pursue its vision and mission. \n\n	2022-04-25 13:14:34.79603+03
\.


--
-- Data for Name: address; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.address (id, address, created_at) FROM stdin;
9bef914f-5176-4b94-b349-7b9df31cfefa	mary	2022-04-30 10:47:07.472018+03
\.


--
-- Data for Name: address_translations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.address_translations (id, lang_id, address_id, address, created_at) FROM stdin;
a5f90781-d42e-4d94-a2f5-67fd12383a02	7a982366-ee48-4344-8c3b-33afea798205	9bef914f-5176-4b94-b349-7b9df31cfefa	Al Marar Building 196, Flat no.  110, Al Marar Dubai UAE	2022-04-30 10:47:07.553092+03
\.


--
-- Data for Name: admins; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.admins (id, username, role, email, password, created_at) FROM stdin;
a79e3a8e-7cff-4589-bfa2-e0af0eee5e2a	maryland_llc	superadmin	info@marylandllc.ae	$2a$10$QFugw.JgeGZ0BBKJ7QeI9uNWsNhrP0Jt.hU2KstV.lXJ7tEMgwTri	2022-04-12 11:40:53.751736+03
\.


--
-- Data for Name: contact_translation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contact_translation (id, lang_id, title, title_address, name, company_name, mail, subject, message, button_text, created_at) FROM stdin;
37bd16be-1d6d-40cf-94da-ccd31915b487	7a982366-ee48-4344-8c3b-33afea798205	Contact us	Our contact address	Name	Company name	E-mail	Subject	Message	SEND	2022-04-16 14:15:12.745112+03
\.


--
-- Data for Name: faciliti_images; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.faciliti_images (id, image_path, created_at) FROM stdin;
b1aa46b3-0a6d-4bcd-a01e-7c6edb18a2f0	api/upload/faciliti-images/1651672360127	2022-04-26 09:12:15.422832+03
76a8904f-d7c1-48fc-b38a-c5111951f026	api/upload/faciliti-images/1651672365298	2022-04-26 09:12:23.763499+03
e2fa2392-2da6-4ced-b386-18d73eb545e2	api/upload/faciliti-images/1651672370810	2022-04-26 09:12:29.985693+03
65dfac69-ca0f-4a6c-be50-0ae1e8b4f7cb	api/upload/faciliti-images/1651672380177	2022-04-16 14:44:57.65503+03
f7c48ee7-6b70-41f9-af98-08c219f529a0	api/upload/faciliti-images/1651672398264	2022-04-26 09:12:08.010458+03
b57f6374-678c-407d-9afd-c1bafa790bb8	api/upload/faciliti-images/1651672412282	2022-04-26 09:12:02.319083+03
\.


--
-- Data for Name: footer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.footer (id, lang_id, text, bottum_title, created_at) FROM stdin;
9324f285-0886-4c81-9a4d-f6a834a287fd	7a982366-ee48-4344-8c3b-33afea798205	If you have any questions about us, or want to reach us, please do not hesitate to contact us or send us an email.	Copyright © 2022 . All rights reserved.	2022-04-26 16:49:11.234165+03
\.


--
-- Data for Name: gallery; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gallery (id, gallery_path, type, created_at, image_path) FROM stdin;
31b21d23-2545-4775-8456-673cef65b226	api/upload/gallery/1651679573915.mp4	video	2022-05-04 18:37:57.692155+03	api/upload/gallery/1651679573935
9895c2c9-7e3d-4ebe-87c8-c7d5812aa17b	api/upload/gallery/1651679618024	image	2022-05-04 18:32:54.55256+03	\N
\.


--
-- Data for Name: header_image; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.header_image (id, menu, image_path, created_at) FROM stdin;
3f46a47d-5135-4ba6-97fa-ad8e5a678449	product	api/upload/header/1651672231200	2022-04-29 17:02:00.292012+03
fa2a4035-9e89-4054-b33e-89eb277efba2	product	api/upload/header/1651672241305	2022-04-19 09:12:06.079395+03
10ac7886-ff70-46b2-9f8d-161a4a29e98d	gallery	api/upload/header/1651672250932	2022-04-27 13:44:22.106812+03
1ea432e0-3add-4d32-a497-8fd5b8055419	gallery	api/upload/header/1651672258226	2022-04-29 17:04:54.547318+03
3f92e8f3-2839-490a-8c3c-40a2e62da937	gallery	api/upload/header/1651672264307	2022-04-29 17:05:07.373404+03
57ea0da6-7bab-4ee3-90ee-0be50f57e499	gallery	api/upload/header/1651672272665	2022-04-29 17:05:25.027501+03
f6fe5ace-e032-4bee-adc6-f2075ab8cafc	gallery	api/upload/header/1651672283479	2022-04-25 17:53:31.227119+03
5e89a8db-7d5b-49b4-9146-9be6ffbdf4a9	contact	api/upload/header/1651672295302	2022-04-19 09:12:06.079824+03
be0c4c50-589d-4ff2-ba3a-8b22da063bd0	contact	api/upload/header/1651672301242	2022-04-27 13:45:16.450975+03
8c529070-3e45-44e4-8f88-10ed727872e8	home	api/upload/header/1651672120686	2022-04-29 16:53:28.266104+03
38ee8ea7-b398-4cdc-bbb4-f065d4fd737c	home	api/upload/header/1651672127916	2022-04-29 16:56:10.253435+03
5b17b94d-6c07-4ea5-8edb-a377d1aea4e6	home	api/upload/header/1651672134392	2022-04-25 11:27:03.744712+03
e5ad4e14-7117-4997-8429-46e182f4dc86	home	api/upload/header/1651672142141	2022-04-19 09:12:06.080252+03
d4c96646-2ffe-4930-aeed-a454fc0508c8	home	api/upload/header/1651672149136	2022-04-29 16:53:28.2662+03
b2db1c2a-d88f-4961-849c-2fc23e0d6f8f	about	api/upload/header/1651672158745	2022-04-19 09:12:06.078137+03
1fbc8c46-cc99-445c-8823-19993caeccd0	about	api/upload/header/1651672167630	2022-04-29 16:58:30.708273+03
4fdde150-f10a-407c-a55b-6a1c5b52ee6f	about	api/upload/header/1651672174390	2022-04-29 16:58:51.276353+03
53fc68b0-0035-4ed5-b33f-86850025972e	about	api/upload/header/1651672180909	2022-04-29 16:59:09.923557+03
88ea80e9-35dd-45fb-b1ea-20f13c638554	about	api/upload/header/1651672187502	2022-04-27 14:35:51.351669+03
95c6c926-9c5b-472c-839e-83c69d227740	product	api/upload/header/1651672205143	2022-04-29 17:01:21.476036+03
f8d4aa4d-a392-4934-854f-4e29bbd5196b	product	api/upload/header/1651672215568	2022-04-27 13:44:02.619186+03
fe2524b9-7916-4db4-a1b9-9d0e2fc90323	product	api/upload/header/1651672222350	2022-04-29 17:01:45.229615+03
\.


--
-- Data for Name: header_text_translation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.header_text_translation (id, lang_id, header_image_id, small_text, text, created_at) FROM stdin;
3973081b-27cf-4c11-81f7-e7df4dbd2f6f	7a982366-ee48-4344-8c3b-33afea798205	38ee8ea7-b398-4cdc-bbb4-f065d4fd737c	potassium chloride	Our services and our service is a solution before the customer's problems arise	2022-04-29 16:56:10.255611+03
6b010969-1ef0-4fd2-8044-b8470d8a76f4	7a982366-ee48-4344-8c3b-33afea798205	5b17b94d-6c07-4ea5-8edb-a377d1aea4e6	MARYLAND LLC	Feeding the world, \ncaring the earth	2022-04-25 11:27:03.90733+03
720eb7df-6ba1-4f4f-8931-b82090b14a03	7a982366-ee48-4344-8c3b-33afea798205	e5ad4e14-7117-4997-8429-46e182f4dc86	MARYLAND LLC	Feeding the world, \ncaring the earth	2022-04-19 09:15:33.560135+03
4555c53a-7cf4-4a36-927b-2d9a0c6da6f8	7a982366-ee48-4344-8c3b-33afea798205	d4c96646-2ffe-4930-aeed-a454fc0508c8	potassium chloride	Our services and our service is a solution before the customer's problems arise	2022-04-29 16:53:28.35702+03
6de1c17e-fa49-4b44-a2bd-814b8047caa8	7a982366-ee48-4344-8c3b-33afea798205	b2db1c2a-d88f-4961-849c-2fc23e0d6f8f	MARYLAND LLC	Feeding the world, \ncaring the earth	2022-04-19 09:15:33.558213+03
bdd47ccf-09e0-43bf-aba6-78344dae81ec	7a982366-ee48-4344-8c3b-33afea798205	1fbc8c46-cc99-445c-8823-19993caeccd0	potassium chloride	Our services and our service is a solution before the customer's problems arise	2022-04-29 16:58:30.710345+03
98a9d435-ff82-4d26-9756-b00fa9e65a50	7a982366-ee48-4344-8c3b-33afea798205	4fdde150-f10a-407c-a55b-6a1c5b52ee6f	potassium chloride	Our services and our service is a solution before the customer's problems arise	2022-04-29 16:58:51.278316+03
49cbe9d9-3b5d-444f-a193-15214e403e5f	7a982366-ee48-4344-8c3b-33afea798205	53fc68b0-0035-4ed5-b33f-86850025972e	potassium chloride	Our services and our service is a solution before the customer's problems arise	2022-04-29 16:59:09.926023+03
4f74a5a3-02a4-41ac-b9f0-1f948e9a4539	7a982366-ee48-4344-8c3b-33afea798205	88ea80e9-35dd-45fb-b1ea-20f13c638554	MARYLAND LLC	Feeding the world, \ncaring the earth	2022-04-27 14:35:51.558217+03
8e84dc6e-1139-41a5-a403-51539c4dc285	7a982366-ee48-4344-8c3b-33afea798205	95c6c926-9c5b-472c-839e-83c69d227740	potassium chloride	Our services and our service is a solution before the customer's problems arise	2022-04-29 17:01:21.478131+03
f453ceb5-35d5-4509-ac35-707bcbd9d5e4	7a982366-ee48-4344-8c3b-33afea798205	f8d4aa4d-a392-4934-854f-4e29bbd5196b	potassium chloride	Our services and our service is a solution before the customer's problems arise	2022-04-27 13:44:02.622394+03
4f106f75-ecee-4d04-a9d6-fc2df0c7926d	7a982366-ee48-4344-8c3b-33afea798205	fe2524b9-7916-4db4-a1b9-9d0e2fc90323	MARYLAND LLC	Feeding the world, \ncaring the earth	2022-04-29 17:01:45.231989+03
fb69a8c3-86af-4bac-870e-c55586ca5eff	7a982366-ee48-4344-8c3b-33afea798205	3f46a47d-5135-4ba6-97fa-ad8e5a678449	MARYLAND LLC	Feeding the world, \ncaring the earth	2022-04-29 17:02:00.308269+03
b9c511b9-e8f0-4233-9cc2-d485f26776ce	7a982366-ee48-4344-8c3b-33afea798205	fa2a4035-9e89-4054-b33e-89eb277efba2	potassium chloride	Our services and our service is a solution before the customer's problems arise	2022-04-19 09:15:33.559201+03
c5379dfa-1190-48a4-bfa8-d3468ddf45a9	7a982366-ee48-4344-8c3b-33afea798205	10ac7886-ff70-46b2-9f8d-161a4a29e98d	potassium chloride	Our services and our service is a solution before the customer's problems arise	2022-04-27 13:44:22.109354+03
0680253f-4021-4867-bd5e-87e6caef9492	7a982366-ee48-4344-8c3b-33afea798205	1ea432e0-3add-4d32-a497-8fd5b8055419	MARYLAND LLC	Feeding the world, \ncaring the earth	2022-04-29 17:04:54.549707+03
e3de4456-94a5-40b5-bfd0-fbf5a3366053	7a982366-ee48-4344-8c3b-33afea798205	3f92e8f3-2839-490a-8c3c-40a2e62da937	MARYLAND LLC	Feeding the world, \ncaring the earth	2022-04-29 17:05:07.375653+03
2663c5ee-612d-4a6f-9930-25b637cf92b8	7a982366-ee48-4344-8c3b-33afea798205	57ea0da6-7bab-4ee3-90ee-0be50f57e499	potassium chloride	Our services and our service is a solution before the customer's problems arise	2022-04-29 17:05:25.054295+03
84850232-96a4-46f2-b948-3c498ad51326	7a982366-ee48-4344-8c3b-33afea798205	f6fe5ace-e032-4bee-adc6-f2075ab8cafc	potassium chloride	Our services and our service is a solution before the customer's problems arise	2022-04-25 17:57:49.951643+03
02d32476-a65d-4e46-b912-dc20a6f7ba74	7a982366-ee48-4344-8c3b-33afea798205	5e89a8db-7d5b-49b4-9146-9be6ffbdf4a9	potassium chloride	Our services and our service is a solution before the customer's problems arise	2022-04-19 09:15:33.559667+03
0df61712-2f3d-4622-b54a-617d69d747b7	7a982366-ee48-4344-8c3b-33afea798205	8c529070-3e45-44e4-8f88-10ed727872e8	potassium chloride	Our services and our service is a solution before the customer's problems arise	2022-04-29 16:53:28.382165+03
71e90672-926d-4805-939c-318c5d3248a8	7a982366-ee48-4344-8c3b-33afea798205	be0c4c50-589d-4ff2-ba3a-8b22da063bd0	potassium chloride	Our services and our service is a solution before the customer's problems arise	2022-04-27 13:45:16.464193+03
\.


--
-- Data for Name: home_translation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.home_translation (id, lang_id, faciliti_text, agencie_content, created_at, topic_title, faciliti_title_s, faciliti_title_b, agencie_title) FROM stdin;
1319bc3f-a4a7-4d2a-8b62-d481d41e11d1	7a982366-ee48-4344-8c3b-33afea798205	Our strategy is to fulfill the requirements of our various clients and Organizations by discussing all opportunities transparently. Therefore, our team strives for perfection is an on-going and high priority target. To achieve this target, our company adheres to the international code of conduct & follows them to the last detail. 	MARYLAND LLC has established long-standing partnerships with a number of global fertilizer and petrochemical companies in Middle East, China, India, Turkey, Africa and CIS countries which have resulted in a series of mutually beneficial investments and initiatives.	2022-04-17 10:41:31.841858+03	Products	our strategy	 OUR STRATEGY	OUR GLOBAL BUSINESS COORDINATES
\.


--
-- Data for Name: languages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.languages (id, name, short_name, created_at) FROM stdin;
7a982366-ee48-4344-8c3b-33afea798205	english	en	2022-04-12 11:35:12.837456+03
\.


--
-- Data for Name: mails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mails (id, mail, created_at) FROM stdin;
e692f486-b423-4aec-ac28-d311d955c373	info@marylandllc.ae	2022-04-30 10:50:25.220365+03
\.


--
-- Data for Name: menu_translation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.menu_translation (id, lang_id, name, created_at) FROM stdin;
330f3507-3925-4c9b-a40a-3fcf67c9da6e	7a982366-ee48-4344-8c3b-33afea798205	Home	2022-04-29 15:59:58.238061+03
5e2d64a3-fe60-4084-a5d8-74a9ccacf8ce	7a982366-ee48-4344-8c3b-33afea798205	About us	2022-04-29 15:59:58.239285+03
6758e712-5f2a-4d13-9ec2-ceebf3c86d29	7a982366-ee48-4344-8c3b-33afea798205	Product	2022-04-29 15:59:58.239899+03
1d361f12-bb9c-40ce-8848-0d0cc9e93a43	7a982366-ee48-4344-8c3b-33afea798205	Gallery	2022-04-29 15:59:58.24049+03
58ff2da0-4494-4b44-a61e-4943da0faa62	7a982366-ee48-4344-8c3b-33afea798205	Contacts	2022-04-29 15:59:58.241102+03
\.


--
-- Data for Name: phone_numbers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.phone_numbers (id, created_at, number) FROM stdin;
b6dd4de1-a365-4318-a0a5-5e451f2f55b9	2022-04-30 15:03:49.249174+03	+971581282568
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, image_path, created_at) FROM stdin;
99a7f07e-b2d6-45e6-b070-40a7c1a9c356	upload/products/1651304544115	2022-04-30 10:42:24.351231+03
\.


--
-- Data for Name: products_translation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_translation (id, lang_id, product_id, name, created_at, button_text) FROM stdin;
98e4fb0e-0cc3-402f-8e31-6c1f1013b18c	7a982366-ee48-4344-8c3b-33afea798205	99a7f07e-b2d6-45e6-b070-40a7c1a9c356	dsds	2022-04-30 10:42:24.353544+03	asasas
\.


--
-- Data for Name: sliders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sliders (id, image_path, created_at) FROM stdin;
7402d243-e875-4345-9aea-d5e9ac8c6c28	api/upload/sliders/1651672439393	2022-04-16 13:58:05.802491+03
081eb7ff-0f4f-488c-b267-d30de2d87d03	api/upload/sliders/1651672444880	2022-04-16 13:58:05.803396+03
1a88ebb5-399f-4d55-a866-4fbef47824b7	api/upload/sliders/1651672449080	2022-04-16 13:58:05.802905+03
22c29828-eab3-4035-a5ea-f8c39255b443	api/upload/sliders/1651672452632	2022-04-26 09:09:37.894496+03
334f3b98-84f1-4385-b1d0-73b7d7bdb5ff	api/upload/sliders/1651672456940	2022-04-27 13:38:58.846392+03
120fb990-90f8-4a13-93e0-789771760161	api/upload/sliders/1651672461022	2022-04-16 13:58:05.802068+03
\.


--
-- Data for Name: statistics; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.statistics (id, number, title, created_at) FROM stdin;
80187579-4cb9-43bf-a992-33e17c9da076	50000	kaliy	2022-04-21 11:09:56.818453+03
ba449b81-b364-4152-a560-1009837c74c9	150000	kukurt	2022-04-21 11:14:19.3204+03
7358b374-3a41-4988-bcb3-54d6edd46c8c	700000	aaaaa	2022-04-29 07:40:58.060301+03
\.


--
-- Data for Name: statistics_translations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.statistics_translations (id, lang_id, statistics_id, title, created_at) FROM stdin;
0ec0706a-cc54-4f10-b46b-5ce03a17e83e	7a982366-ee48-4344-8c3b-33afea798205	80187579-4cb9-43bf-a992-33e17c9da076	TONNAGE POTASSIUM	2022-04-21 11:12:26.044718+03
761e3bf3-6921-4c20-8d1e-50bfa5127fa4	7a982366-ee48-4344-8c3b-33afea798205	ba449b81-b364-4152-a560-1009837c74c9	TONNAGE UREA	2022-04-21 11:16:18.918516+03
61e41137-a5d1-4359-bcd6-d85c66aefa01	7a982366-ee48-4344-8c3b-33afea798205	7358b374-3a41-4988-bcb3-54d6edd46c8c	TONNAGE SULPHUR	2022-04-29 07:42:33.370741+03
\.


--
-- Data for Name: topics; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.topics (id, title, content, image_path, created_at) FROM stdin;
36bf0aff-9ef4-4118-a5ce-c3104ad20949	title_3	content_3	api/upload/topics/1651672321142	2022-04-16 11:55:01.2373+03
db752622-5d6a-4fc1-82b6-830b934c7108	title_4	content_4	api/upload/topics/1651672327529	2022-04-16 11:55:01.237985+03
e9e900dd-2361-45e8-87da-11de27edcd70	title_2	content_2	api/upload/topics/1651672333676	2022-04-16 11:55:01.2365+03
3c939445-00b3-4394-8b0e-bc316f4859ec	title_1	content_1	api/upload/topics/1651672340250	2022-04-16 11:55:01.235402+03
9c4df3a0-a3b7-41dc-8e30-422a7492a13c	title_5	content_5	api/upload/topics/1651672345842	2022-04-16 11:55:01.238603+03
\.


--
-- Data for Name: topics_translations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.topics_translations (id, lang_id, topic_id, title, content, created_at) FROM stdin;
d844f6fe-6c6d-4ebc-984a-ce2de572a62f	7a982366-ee48-4344-8c3b-33afea798205	36bf0aff-9ef4-4118-a5ce-c3104ad20949	SULFUR	Sulphur is an essential element for life. The major derivative of sulphur is sulphuric acid (H2SO4), one of the most important elements used as an industrial raw material. It is widely demanded for making car batteries, fertilizers, oil refining, water processing, and mineral extraction. Other applications for sulfur-based chemicals include rubber vulcanization, bleaching paper, and product making such as cement, detergents, pesticides. 	2022-04-16 11:57:30.346213+03
e36ea1ff-bb8a-475e-8f8f-cdb4553aac89	7a982366-ee48-4344-8c3b-33afea798205	db752622-5d6a-4fc1-82b6-830b934c7108	Polypropylene	Polypropylene (PP) is a thermoplastic “addition polymer” made from the combination of propylene monomers. It is used in a variety of applications to include packaging for consumer products, plastic parts for various industries including the automotive industry, special devices like living hinges, and textiles. Polypropylene’s unique ability to be manufactured through different methods and into different applications meant it soon started to challenge many of the old alternative materials, notably in the packaging, fiber, and injection molding industries. Its growth has been sustained over the years and it remains a major player in the plastic industry worldwide. It is a very flexible, soft material with a relatively low melting point.	2022-04-16 11:57:30.346638+03
883b5a58-ab92-448d-89ba-80b9bcb1ba80	7a982366-ee48-4344-8c3b-33afea798205	e9e900dd-2361-45e8-87da-11de27edcd70	BITUMEN	Bitumen is a specialist fuel grade that can be used in applications such as road surfacing, roofing and certain types of paint. It is only produced in about 65% of refineries around the world and has a yield of only 3-4% of the total crude slate. Bitumen itself is a black and very sticky liquid. It contains so much carbon that unless it is kept headed to a temperature of about 150 degrees Celsius, it solidifies into a rock-hard wax. test	2022-04-16 11:57:30.345753+03
fe3d626d-2743-4b2d-a8f6-ab43659d273a	7a982366-ee48-4344-8c3b-33afea798205	3c939445-00b3-4394-8b0e-bc316f4859ec	UREA-46	Nitrogen plays an important role in the protein development process of plants. Swiss Singapore Overseas Enterprises’ portfolio of nitrogen-based fertilizer products is diverse and includes the following:\n\nUrea (Granular and Prilled): Urea has the highest nitrogen content of all solid nitrogenous fertilizers in common use. It is widely used in fertilizers and is an important raw material for the chemical industry Potassium is a major crop nutrient after phosphorous and nitrogen. It is important for agriculture as it improves water retention, yield and nutrient value of food crops.\n Urea fertilizer contains this nutrient and provides plants with a variety of benefits. It contains 46 percent nitrogen.  This fertilizer type promotes the beautiful deep green color in plants, giving your plants a healthy and stunning appearance.\nDuring the photosynthesis process, plants take carbon dioxide and water from the air and soil and transform it into glucose, which they use as food for energy. The urea fertilizer aids in the photosynthesis process, allowing plants to thrive.\n	2022-04-16 11:57:30.343667+03
4094d3ca-393d-4227-bff5-9a2ae9c79a77	7a982366-ee48-4344-8c3b-33afea798205	9c4df3a0-a3b7-41dc-8e30-422a7492a13c	POTASSIUM CHLORIDE Q	Potassium is essential for photosynthesis, protein synthesis, nitrogen fixation, starch formation and the translocation of sugars. It also:\n\nactivates over 80 cellular enzymes\nimproves plant ability to resist disease and cold\nenhances fruit quality\nincreases root growth and improves drought resistance\nPotash is the most valued and widely used potassium fertilizer in agriculture worldwide.\n\nPotash increases disease resistance, drought tolerance, plumpness of grain and seed, and improves stem rigidity and cold hardiness. Application of potash enhances firmness, texture, flavor, size and color of fruit crops, and increases oil content of oil crops.	2022-04-16 11:57:30.34705+03
\.


--
-- Name: about_image about_image_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.about_image
    ADD CONSTRAINT about_image_pkey PRIMARY KEY (id);


--
-- Name: about_translation about_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.about_translation
    ADD CONSTRAINT about_translation_pkey PRIMARY KEY (id);


--
-- Name: address address_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT address_pkey PRIMARY KEY (id);


--
-- Name: address_translations address_translations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address_translations
    ADD CONSTRAINT address_translations_pkey PRIMARY KEY (id);


--
-- Name: admins admins_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_pkey PRIMARY KEY (id);


--
-- Name: contact_translation contact_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contact_translation
    ADD CONSTRAINT contact_translation_pkey PRIMARY KEY (id);


--
-- Name: faciliti_images faciliti_images_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.faciliti_images
    ADD CONSTRAINT faciliti_images_pkey PRIMARY KEY (id);


--
-- Name: footer footer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footer
    ADD CONSTRAINT footer_pkey PRIMARY KEY (id);


--
-- Name: gallery gallery_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gallery
    ADD CONSTRAINT gallery_pkey PRIMARY KEY (id);


--
-- Name: header_image header_image_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.header_image
    ADD CONSTRAINT header_image_pkey PRIMARY KEY (id);


--
-- Name: header_text_translation header_text_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.header_text_translation
    ADD CONSTRAINT header_text_translation_pkey PRIMARY KEY (id);


--
-- Name: home_translation home_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.home_translation
    ADD CONSTRAINT home_translation_pkey PRIMARY KEY (id);


--
-- Name: languages languages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.languages
    ADD CONSTRAINT languages_pkey PRIMARY KEY (id);


--
-- Name: languages languages_short_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.languages
    ADD CONSTRAINT languages_short_name_key UNIQUE (short_name);


--
-- Name: mails mails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mails
    ADD CONSTRAINT mails_pkey PRIMARY KEY (id);


--
-- Name: menu_translation menu_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_translation
    ADD CONSTRAINT menu_translation_pkey PRIMARY KEY (id);


--
-- Name: phone_numbers phone_numbers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.phone_numbers
    ADD CONSTRAINT phone_numbers_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: products_translation products_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_translation
    ADD CONSTRAINT products_translation_pkey PRIMARY KEY (id);


--
-- Name: sliders sliders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sliders
    ADD CONSTRAINT sliders_pkey PRIMARY KEY (id);


--
-- Name: statistics statistics_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.statistics
    ADD CONSTRAINT statistics_pkey PRIMARY KEY (id);


--
-- Name: statistics_translations statistics_translations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.statistics_translations
    ADD CONSTRAINT statistics_translations_pkey PRIMARY KEY (id);


--
-- Name: topics topics_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.topics
    ADD CONSTRAINT topics_pkey PRIMARY KEY (id);


--
-- Name: topics_translations topics_translations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.topics_translations
    ADD CONSTRAINT topics_translations_pkey PRIMARY KEY (id);


--
-- Name: about_translation about_translation_lang_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.about_translation
    ADD CONSTRAINT about_translation_lang_id_fk FOREIGN KEY (lang_id) REFERENCES public.languages(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: address_translations address_translations_address_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address_translations
    ADD CONSTRAINT address_translations_address_id_fk FOREIGN KEY (address_id) REFERENCES public.address(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: address_translations address_translations_lang_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address_translations
    ADD CONSTRAINT address_translations_lang_id_fk FOREIGN KEY (lang_id) REFERENCES public.languages(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: contact_translation contact_translation_lang_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contact_translation
    ADD CONSTRAINT contact_translation_lang_id_fk FOREIGN KEY (lang_id) REFERENCES public.languages(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: footer footer_lang_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footer
    ADD CONSTRAINT footer_lang_id_fk FOREIGN KEY (lang_id) REFERENCES public.languages(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: header_text_translation header_text_translation_header_image_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.header_text_translation
    ADD CONSTRAINT header_text_translation_header_image_id_fk FOREIGN KEY (header_image_id) REFERENCES public.header_image(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: header_text_translation header_text_translation_lang_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.header_text_translation
    ADD CONSTRAINT header_text_translation_lang_id_fk FOREIGN KEY (lang_id) REFERENCES public.languages(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: home_translation home_translation_lang_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.home_translation
    ADD CONSTRAINT home_translation_lang_id_fk FOREIGN KEY (lang_id) REFERENCES public.languages(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: menu_translation menu_translation_lang_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_translation
    ADD CONSTRAINT menu_translation_lang_id_fk FOREIGN KEY (lang_id) REFERENCES public.languages(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: products_translation products_translation_lang_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_translation
    ADD CONSTRAINT products_translation_lang_id_fk FOREIGN KEY (lang_id) REFERENCES public.languages(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: products_translation products_translation_product_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_translation
    ADD CONSTRAINT products_translation_product_id_fk FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: statistics_translations statistics_translations_lang_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.statistics_translations
    ADD CONSTRAINT statistics_translations_lang_id_fk FOREIGN KEY (lang_id) REFERENCES public.languages(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: statistics_translations statistics_translations_statistics_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.statistics_translations
    ADD CONSTRAINT statistics_translations_statistics_id_fk FOREIGN KEY (statistics_id) REFERENCES public.statistics(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: topics_translations topics_translations_lang_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.topics_translations
    ADD CONSTRAINT topics_translations_lang_id_fk FOREIGN KEY (lang_id) REFERENCES public.languages(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: topics_translations topics_translations_topic_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.topics_translations
    ADD CONSTRAINT topics_translations_topic_id_fk FOREIGN KEY (topic_id) REFERENCES public.topics(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

