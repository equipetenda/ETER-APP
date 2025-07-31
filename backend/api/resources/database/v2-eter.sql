create table genero(
	id int unsigned not null auto_increment primary key,
	nome varchar(255) not null unique,

	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp
);

create table usuario(
	id int unsigned not null auto_increment primary key,
	email varchar(255) not null unique,
	nome varchar(255) not null,
	data_nasc datetime,
	ativo tinyint(1) default 1,

	genero_id int unsigned not null,
	foreign key (genero_id) references genero(id),

	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp

);

create table amizade(
	id int unsigned not null auto_increment primary key,

	user_id_amigo1 int unsigned not null ,
	foreign key (user_id_amigo1) references usuario(id),

	user_id_amigo2 int unsigned not null ,
	foreign key (user_id_amigo2) references usuario(id),

	constraint check_amigo check(user_id_amigo1 < user_id_amigo2),
	constraint unique_amigo unique(user_id_amigo1, user_id_amigo2),

	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp

);



-- INSERT INTO amizades (usuario_id_1, usuario_id_2) VALUES (LEAST(1, 2), GREATEST(2, 1));


create table sobre(
	id int unsigned not null auto_increment primary key,

	data_parar_fumar datetime not null,
	quando_deseja_parar_fumar enum('Agora', 'Em breve', 'Eu ja parei', 'Não sei') default 'Não sei' ,
	motivo_parar_fumar varchar(150) not null,
	medo_preocupacao_fumar varchar(150) not null,
	quando_comecou_fumar varchar(150) not null,
	tentativas_parar_fumar varchar(150) not null,
	motivos_desistencias varchar(150) not null,
	data_inicio_fumar datetime not null,
	quant_cigarros_por_dias decimal(10,2) not null,
	quant_cigarros_por_maco int not null,
	valor_maco decimal(15,2),


	user_id int unsigned not null ,
	foreign key (user_id) references usuario(id) ON DELETE CASCADE,

	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp

);


create table conquista(
	id int unsigned not null auto_increment primary key,

	nome varchar(255) not null unique,
	img varchar(255),

	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp
);

create table usuario_conquista(
	id int unsigned not null auto_increment primary key,

	conquista_id int unsigned not null ,
	foreign key (conquista_id) references conquista(id),

	 usuario_id int unsigned not null ,
	foreign key (usuario_id) references  usuario(id),

	constraint unique_usuario_conquista unique(conquista_id, usuario_id),

	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp
);



create table diario(
	id int unsigned not null auto_increment primary key,

    -- Coluna que identifica o tipo de diário
    tipo enum('INICIO', 'VONTADE_FUMAR', 'FUMEI') not null,

    usuario_id int unsigned not null,
    foreign key (usuario_id) references usuario(id) ON DELETE CASCADE,

	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp
);

-- INICIO É UM DIARIO
create table inicio(
	id int unsigned not null auto_increment primary key,

    diario_id int unsigned not null ,
	foreign key (diario_id) references diario(id),

	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp
);


create table sintoma(
	id int unsigned not null auto_increment primary key,

	nome varchar(255) not null unique,
	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp
);

create table inicio_sintoma(
	id int unsigned not null auto_increment primary key,

	sintoma_id int unsigned not null ,
	foreign key (sintoma_id) references sintoma(id),

	inicio_id int unsigned not null ,
	foreign key (inicio_id) references inicio(id),

	constraint unique_inicio_sintoma unique(sintoma_id, inicio_id),

	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp
);

create table emocao(
	id int unsigned not null auto_increment primary key,

	nome varchar(255) not null unique,

	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp
);

create table inicio_emocao(
	id int unsigned not null auto_increment primary key,

	emocao_id int unsigned not null ,
	foreign key (emocao_id) references emocao(id),

	inicio_id int unsigned not null ,
	foreign key (inicio_id) references inicio(id),

	constraint unique_inicio_emocao unique(emocao_id, inicio_id),

	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp
);

create table sentimento(
	id int unsigned not null auto_increment primary key,

	nome varchar(255) not null unique,


	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp
);

create table diario_sentimento(
	id int unsigned not null auto_increment primary key,

	sentimento_id int unsigned not null ,
	foreign key (sentimento_id) references sentimento(id),

	diario_id int unsigned not null ,
	foreign key (diario_id) references diario(id),

	constraint unique_diario_sentimento unique(sentimento_id, diario_id),

	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp
);


create table texto(
	id int unsigned not null auto_increment primary key,

	conteudo text not null,

	diario_id int unsigned not null ,
	foreign key (diario_id) references diario(id),

	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp
);

create table contexto(
	id int unsigned not null auto_increment primary key,

	nome varchar(255) not null unique,

	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp
);

create table estrategia(
	id int unsigned not null auto_increment primary key,

	nome varchar(255) not null unique,

	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp
);

-- É UM DIARIO
create table vontade_fumar(
	id int unsigned not null auto_increment primary key,

	vontade_escala tinyint unsigned not null check( vontade_escala between 1 and 5),
	estrategia_escala tinyint unsigned not null check( estrategia_escala between 1 and 5),

	diario_id int unsigned not null ,
	foreign key (diario_id) references diario(id),

	contexto_id int unsigned not null ,
	foreign key (contexto_id) references contexto(id),

	estrategia_id int unsigned not null ,
	foreign key (estrategia_id) references estrategia(id),

	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp
);


create table amigo_avisado(
	id int unsigned not null auto_increment primary key,

	amizade_id int unsigned not null ,
	foreign key (amizade_id) references amizade(id),

	vontade_fumar_id int unsigned not null ,
	foreign key (vontade_fumar_id) references vontade_fumar(id),


	constraint unique_amizade_vontade_fumar unique(amizade_id, vontade_fumar_id),

	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp
);

-- É UM DIARIO
create table fumei(
	id int unsigned not null auto_increment primary key,

	data datetime not null,

	impulso_escala tinyint unsigned not null check( impulso_escala between 1 and 5),


	diario_id int unsigned not null ,
	foreign key (diario_id) references diario(id),

	contexto_id int unsigned not null ,
	foreign key (contexto_id) references contexto(id),

	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp
);


create table postagem(
	id int unsigned not null auto_increment primary key,

	texto text not null,

	usuario_id int unsigned not null ,
	foreign key (usuario_id) references usuario(id),

	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp
);

create table comentario(
	id int unsigned not null auto_increment primary key,

	texto text not null,

	postagem_id int unsigned, -- agora pode ser NULL se for comentário de comentário
	foreign key (postagem_id) references postagem(id),

	parent_id int unsigned, -- novo campo
	foreign key (parent_id) references comentario(id),

	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp
);


-- INSERÇÕES

INSERT INTO `eter`.`genero` (`nome`) VALUES
('Masculino'),
('Feminino'),
('Não-binário'),
('Prefiro não responder'),
('Outro');


INSERT INTO `eter`.`sintoma` (`nome`) VALUES
  ('Ansiedade intensa'),
  ('Dificuldade de concentração'),
  ('Tontura ou vertigem'),
  ('Fadiga extrema'),
  ('Dores de cabeça'),
  ('Suor excessivo');


INSERT INTO `eter`.`sentimento` (`nome`) VALUES
  ('Feliz'),
  ('Animado'),
  ('Nervoso'),
  ('Ansioso'),
  ('Deprimido'),
  ('Entediado'),
  ('Zangado'),
  ('Enjoado');


INSERT INTO `eter`.`emocao` (`nome`) VALUES
('Satisfação'),
('Gratidão'),
('Paz'),
('Bem-estar'),
('Entusiasmo'),
('Realização'),
('Energia'),
('Motivação'),
('Otimismo'),
('Esperança'),
('Alegria'),
('Euforia'),
('Insegurança'),
('Estresse'),
('Tensão'),
('Frustração'),
('Desconforto'),
('Impaciência'),
('Preocupação'),
('Inquietação'),
('Alerta'),
('Incerteza'),
('Medo'),
('Tristeza'),
('Vazio'),
('Culpa'),
('Desamparo'),
('Desânimo'),
('Solidão'),
('Cansaço'),
('Falta de estímulo'),
('Desinteresse'),
('Letargia'),
('Monotonia'),
('Irritação'),
('Raiva'),
('Resentimento'),
('Fúria'),
('Náusea'),
('Mal-estar'),
('Fadiga'),
('Sensibilidade'),
('Exaustão');

INSERT INTO `eter`.`estrategia` (`nome`) VALUES
  ('Avisar um amigo'),
  ('Eu me motivo'),
  ('Deixo passar'),
  ('Respiro'),
  ('Fumo');

INSERT INTO `eter`.`contexto` (`nome`) VALUES
('Estou bebendo um pouco de álcool'),
('Estou indo pra cama'),
('Estou fazendo uma pausa'),
('Estou com fumantes'),
('Estou num carro'),
('Estou bebendo um café'),
('Acabei de comer'),
('Estou no telefone'),
('Tive relações sexuais'),
('Bebi uma xícara de chá');


INSERT INTO `eter`.`conquista` (`nome`) VALUES
  ('Tempo'),
  ('Smile'),
  ('Fumo');



