create table usuario(
                        idusu int not null unique,
                        alias varchar(150) not null unique,
                        nombre varchar(30) not null,
                        ap varchar(30),
                        am varchar(30),
                        telefono int,
                        email varchar(50),
                        clave varchar(150) not null unique,
                        PRIMARY KEY(idusu)
                     );

create table rol(
                    idrol int not null unique,
                    descripcion varchar(90),
                    nombrerol varchar(30) not null,
                    PRIMARY KEY(idrol)
               );

create table usuariorol(
                          idusu int not null,
                          idrol int not null,
                          FOREIGN KEY(idusu) REFERENCES usuario(idusu),
                          FOREIGN KEY(idrol) REFERENCES rol(idrol)
                        );

create table partida(
                          idpartida int not null unique,
                          titulo varchar(30) not null unique,
                          fecha date not null,
                          PRIMARY KEY(idpartida)
                     );

create table materia(
                          idmat int not null unique,
                          nombremat varchar(30) not null unique,
                          PRIMARY KEY(idmat)
                     );

create table tema(
                                idtema int not null unique,
                                idmat int not null,
                                nombretema varchar(50) not null unique,
                                PRIMARY KEY(idtema),
                                FOREIGN KEY(idmat) REFERENCES materia(idmat)
                           );

create table pregunta(
                                idpreg int not null unique,
                                idtema int not null,
                                pregunta varchar(200) not null unique,
                                PRIMARY KEY(idpreg),
                                FOREIGN KEY(idtema) REFERENCES tema(idtema)
                           );

create table respuesta(
                                idres int not null unique,
                                idpreg int not null,
                                respuesta varchar(100) not null,
                                estado boolean not null,
                                PRIMARY KEY(idres),
                                FOREIGN KEY(idpreg) REFERENCES pregunta(idpreg)
                           );

create table usuariopartida(
      idusu int not null,
      idpartida int not null,
      FOREIGN KEY(idusu) REFERENCES usuario(idusu),
      FOREIGN KEY(idpartida) REFERENCES partida(idpartida)
);

create table preguntapartida(
      idpartida int not null,
      idpreg int not null,
      FOREIGN KEY(idpreg) REFERENCES pregunta(idpreg),
      FOREIGN KEY(idpartida) REFERENCES partida(idpartida)
);

insert into rol values(1,'El administrador, encargado de crear partidas, agregar temar, preguntas y respuestas','Administrador');
insert into rol values(2,'El usuario, encargado de administrar su cuenta y ser participe de una partida','Usuario');                                                      
insert into usuario values(1,'00112e8c7e','admin','admin','admin',0,'admin@admin','00112e8c7e');
insert into usuariorol values(1,1);



insert into materia values(1,'Software I');


#insert into usuario values(1,'91f185914c1ea502fb174d473b516a9a5707ce66','admin','admin','admin',0,'admin','91f185914c1ea502fb174d473b516a9a5707ce66');
