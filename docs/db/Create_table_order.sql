
CREATE TABLE public.orders (
	id SERIAL, 
	orderid varchar NOT NULL,
	status int4 NOT NULL,
	store int4 NOT NULL,
	"date" date NOT NULL,
	CONSTRAINT orders_pk PRIMARY KEY (id)
);

CREATE table "store" (
	id integer not null,
	name text not null,
	CONSTRAINT store_pk PRIMARY KEY (id)
);

CREATE table "status" (
	id integer not null,
	name text not null,
	CONSTRAINT status_pk PRIMARY KEY (id)
)