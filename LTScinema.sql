create database LTScinema;

use LTScinema;

create table  users (idu int auto_increment,
					name varchar(30),
					password varchar(30),
					isAdmin int default 0,
					isBlocked int default 0,
					primary key (idu) 
					);
					

create table movies (idm int auto_increment,
					name varchar(30),
					show_ datetime,
					primary key(idm)
					);

create table seats (num int not null,
					isReseved int default 0,
					movie int not null,
					usr int default null,
					foreign key(movie) references movies(idm)
					on update restrict
					on delete cascade,
					foreign key(usr) references users(idu)
					on update restrict
					on delete set null
					);
					
create table token (idt int auto_increment,
					idu int,
					value_ varchar(256),
					time_of_create datetime,
					primary key (idt),
					foreign key(idu) references users(idu)on update restrict
					on delete set null
					);
