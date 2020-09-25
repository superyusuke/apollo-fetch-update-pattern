INSERT INTO public."user" (id, profile) VALUES (1, 'this is profle');
SELECT pg_catalog.setval('public.user_id_seq', 1, true);
