create  database dbApiCarros;

use dbApiCarros;

create table carros
(
codigo int primary key auto_increment,
modelo varchar(30),
placa varchar(7)
);

insert into carros (modelo, placa) 
value ('Toyota Corolla', 'HGS8629');

insert into carros (modelo, placa) 
value ('Honda Civic', 'YHD7812');

select * from carros;