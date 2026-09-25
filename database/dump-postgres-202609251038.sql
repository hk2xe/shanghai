--
-- PostgreSQL database dump
--

\restrict UMkq5swbFr6oyQV1p0k3iQsRkeERDib7RfrCghBR10w2OO4WdPBVaEKv4BLjGYN

-- Dumped from database version 18.4
-- Dumped by pg_dump version 18.4

-- Started on 2026-09-25 10:38:07 +05

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 223 (class 1259 OID 16500)
-- Name: comments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comments (
    id integer NOT NULL,
    content character varying NOT NULL,
    id_author integer NOT NULL,
    id_post integer NOT NULL,
    creation_date date DEFAULT CURRENT_DATE NOT NULL
);


ALTER TABLE public.comments OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16506)
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.comments_id_seq OWNER TO postgres;

--
-- TOC entry 4107 (class 0 OID 0)
-- Dependencies: 225
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;


--
-- TOC entry 224 (class 1259 OID 16503)
-- Name: like; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."like" (
    id integer NOT NULL,
    id_author integer NOT NULL,
    id_post integer NOT NULL
);


ALTER TABLE public."like" OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16520)
-- Name: like_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.like_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.like_id_seq OWNER TO postgres;

--
-- TOC entry 4108 (class 0 OID 0)
-- Dependencies: 226
-- Name: like_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.like_id_seq OWNED BY public."like".id;


--
-- TOC entry 222 (class 1259 OID 16487)
-- Name: op_post; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.op_post (
    id integer CONSTRAINT op_user_id_not_null NOT NULL,
    title character varying CONSTRAINT op_user_title_not_null NOT NULL,
    content character varying CONSTRAINT op_user_content_not_null NOT NULL,
    id_author integer CONSTRAINT op_user_id_author_not_null NOT NULL,
    creation_date date DEFAULT CURRENT_DATE CONSTRAINT op_user_creation_date_not_null NOT NULL
);


ALTER TABLE public.op_post OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16470)
-- Name: op_user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.op_user (
    id integer CONSTRAINT op_post_id_not_null NOT NULL,
    first_name character varying CONSTRAINT op_post_fist_name_not_null NOT NULL,
    middle_name character varying CONSTRAINT op_post_middle_name_not_null NOT NULL,
    birthday date CONSTRAINT op_post_birthday_not_null NOT NULL
);


ALTER TABLE public.op_user OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16473)
-- Name: op_post_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.op_post_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.op_post_id_seq OWNER TO postgres;

--
-- TOC entry 4109 (class 0 OID 0)
-- Dependencies: 220
-- Name: op_post_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.op_post_id_seq OWNED BY public.op_user.id;


--
-- TOC entry 221 (class 1259 OID 16486)
-- Name: op_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.op_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.op_user_id_seq OWNER TO postgres;

--
-- TOC entry 4110 (class 0 OID 0)
-- Dependencies: 221
-- Name: op_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.op_user_id_seq OWNED BY public.op_post.id;


--
-- TOC entry 3931 (class 2604 OID 16507)
-- Name: comments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);


--
-- TOC entry 3933 (class 2604 OID 16521)
-- Name: like id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."like" ALTER COLUMN id SET DEFAULT nextval('public.like_id_seq'::regclass);


--
-- TOC entry 3929 (class 2604 OID 16490)
-- Name: op_post id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.op_post ALTER COLUMN id SET DEFAULT nextval('public.op_user_id_seq'::regclass);


--
-- TOC entry 3928 (class 2604 OID 16474)
-- Name: op_user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.op_user ALTER COLUMN id SET DEFAULT nextval('public.op_post_id_seq'::regclass);


--
-- TOC entry 4098 (class 0 OID 16500)
-- Dependencies: 223
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comments (id, content, id_author, id_post, creation_date) FROM stdin;
1	loool	2	7	2001-01-20
2	sdf	1	7	2026-09-25
5	sdfsdfds	2	9	2026-09-25
\.


--
-- TOC entry 4099 (class 0 OID 16503)
-- Dependencies: 224
-- Data for Name: like; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."like" (id, id_author, id_post) FROM stdin;
1	2	7
\.


--
-- TOC entry 4097 (class 0 OID 16487)
-- Dependencies: 222
-- Data for Name: op_post; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.op_post (id, title, content, id_author, creation_date) FROM stdin;
7	asda	asda	1	2000-12-12
8	dfgdfg	dfgdfg	2	2026-09-25
9	ertert	ertert	1	2026-09-25
\.


--
-- TOC entry 4094 (class 0 OID 16470)
-- Dependencies: 219
-- Data for Name: op_user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.op_user (id, first_name, middle_name, birthday) FROM stdin;
1	Vasya	Dotov	1999-01-01
2	Nrik	Ssaasd	1990-02-19
\.


--
-- TOC entry 4111 (class 0 OID 0)
-- Dependencies: 225
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comments_id_seq', 5, true);


--
-- TOC entry 4112 (class 0 OID 0)
-- Dependencies: 226
-- Name: like_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.like_id_seq', 1, true);


--
-- TOC entry 4113 (class 0 OID 0)
-- Dependencies: 220
-- Name: op_post_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.op_post_id_seq', 2, true);


--
-- TOC entry 4114 (class 0 OID 0)
-- Dependencies: 221
-- Name: op_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.op_user_id_seq', 9, true);


--
-- TOC entry 3939 (class 2606 OID 16519)
-- Name: comments comments_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pk PRIMARY KEY (id);


--
-- TOC entry 3941 (class 2606 OID 16529)
-- Name: like like_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."like"
    ADD CONSTRAINT like_pk PRIMARY KEY (id);


--
-- TOC entry 3935 (class 2606 OID 16485)
-- Name: op_user op_post_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.op_user
    ADD CONSTRAINT op_post_pk PRIMARY KEY (id);


--
-- TOC entry 3937 (class 2606 OID 16499)
-- Name: op_post op_user_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.op_post
    ADD CONSTRAINT op_user_pk PRIMARY KEY (id);


--
-- TOC entry 3943 (class 2606 OID 16540)
-- Name: comments comments_op_post_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_op_post_fk FOREIGN KEY (id_post) REFERENCES public.op_post(id);


--
-- TOC entry 3944 (class 2606 OID 16535)
-- Name: comments comments_op_user_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_op_user_fk FOREIGN KEY (id_author) REFERENCES public.op_user(id);


--
-- TOC entry 3945 (class 2606 OID 16550)
-- Name: like like_op_post_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."like"
    ADD CONSTRAINT like_op_post_fk FOREIGN KEY (id_post) REFERENCES public.op_post(id);


--
-- TOC entry 3946 (class 2606 OID 16545)
-- Name: like like_op_user_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."like"
    ADD CONSTRAINT like_op_user_fk FOREIGN KEY (id_author) REFERENCES public.op_user(id);


--
-- TOC entry 3942 (class 2606 OID 16530)
-- Name: op_post op_post_op_user_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.op_post
    ADD CONSTRAINT op_post_op_user_fk FOREIGN KEY (id_author) REFERENCES public.op_user(id);


-- Completed on 2026-09-25 10:38:07 +05

--
-- PostgreSQL database dump complete
--

\unrestrict UMkq5swbFr6oyQV1p0k3iQsRkeERDib7RfrCghBR10w2OO4WdPBVaEKv4BLjGYN

