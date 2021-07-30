create database project_work;
use project_work;


-- STUDENT TABLE
create table student(
	student_id int auto_increment,
	FirstName varchar(30),
	LastName varchar(30),
	DOB date,
	Gender varchar(7),
	mobile_no bigint,
	Email varchar(45),
	Nationality varchar(40),
	blood_group varchar(4),
	Relegion varchar(16),
	Category varchar(15),
	Adhar_no bigint,
	primary key(student_id)
);
desc student;

-- admi table

create table admin(
	Email varchar(45),
	Password_ varchar(30),
	primary key(Email)
);
desc admin;
insert into admin values('hod.cse@bmsce.ac.in','12345');
select * from admin;


-- Academic details table
create table Academic_Details(
	student_id int,
	MOA varchar(15),
	branch varchar(150),
	c10_BoardName varchar(200),
	c10_YOP int,
	c10_perecentage float4,
	c12_BoardName varchar(200),
	c12_YOP int,
	c12_perecentage float4,
	foreign key(student_id) references student(student_id) on delete cascade
);
desc Academic_Details;


-- Address table
create table Address(
	student_id int,
	pres_lane text,
	pres_pincode int,
	pres_district varchar(60),
	pres_state varchar(40),
	per_lane text,
	per_pincode int,
	per_district varchar(60),
	per_state varchar(40),
	foreign key(student_id) references student(student_id) on delete cascade
);
desc Address;



-- Family table
create table Family(
	student_id int,
    Relationship varchar(10),
	Name_ varchar(50),
	DOB date,
	mobile_no bigint,
	Qualification varchar(30),
	Occupation varchar(30),
	Email varchar(45),
	foreign key(student_id) references student(student_id) on delete cascade
);
desc Family;
show tables;

--  drop database project_work;
-- select * from signup; 
--  select * from student;
--  select * from academic_details;
--  select * from family;
--  select * from address;
 
 create table signup(
 Email varchar(70) primary key,
 FirstName varchar(30),
 LastName varchar(30),
 password_ varchar(36),
 student_id int,
 foreign key (student_id) references student(student_id) on delete cascade
 );
 select * from student;
 desc family;

  
 insert into student(FirstName,LastName,DOB,Gender,mobile_no,Email,Nationality,blood_group,Relegion,Category,Adhar_no)
 values('nikhil','s','2001-01-03' ,'male' ,6051660636,'nikhils.cs19@bmsce.ac.in','indian','AB+','Hinduism','OBC',662223509284),
('kiran ','b','1999-11-11','male',9973718199,'kiranb.me17@bmsce.ac.in','indian','O+','Hinduism','OBC',216167293627),
('arun','kumar k','2001-12-11','male',8918288962,'arunk.is19@bmsce.ac.in','indian','O+','Hinduism','OBC',838427959970),
('anil','M','2002-12-02','male',6127995667,'anil.ec20@bmsce.ac.in','indian','AB+','Hinduism','OBC',621336314249),
('shashikant','singh M','2002-07-03','male',6127961380,'shashikantm.cv19@bmsce.ac.in' ,'indian','B+','Sikhism','Other',166797505883),
('Prema','G','1999-09-15','female',7219908472,'premag.bt19@bmsce.ac.in','indian','AB+','Hinduism','OBC',024932851294),
('prajwal','V S','1999-09-23','male',9382425819,'prajwals.mt19@bmsce.ac.in','indian','B+','Hinduism','OBC',858030382541),
('nithesh','kumar m','2002-11-03' ,'male',7887271037,'nitishm.is19@bmsce.ac.in','indian','O+','Hinduism','OBC',314955440800),
('prem','p sai','2002-01-19 ','male',8917034178,'premsai.me19@bmsce.ac.in','indian','O+','Hinduism','GENERAL',207585156125),
('Harsha','V N', ' 2002-08-03','male',7887951559,'harsha.cs20@bmsce.ac.in','indian','A+','Hinduism','OBC',262523317140),
('Gagana','D K','2001-04-06 ','female',8847837128,'gagana.cv18@bmsce.ac.in','indian','AB+','Hinduism','OBC',962165115606),
('Aishwaraya','s','2001-03-30' ,'female',8917520804,'aishwarya.ec19@bmsce.ac.in','indian','B+','Hinduism','OBC',999941057058),
('Nithin','Duloi','2001-01-06 ','male',6127941204,'nitin.bt17@bmsce.ac.in','indian','O+','Hinduism','OBC',999971658847),
 ('Mallika', 'prasad','1999-06-08','female',7470512321,'mallikaprasad.mt18@bmsce.ac.in','indian','O+','Hinduism','GENERAL',999933119405),
 ('Darshan' ,'M S','2002-03-12 ' ,'male',8207328317,'darshanm.cs19@bmsce.ac.in','indian','B +','Hinduism','OBC',999955183433);

select * from student;
insert into academic_details values(1,'CET-SNQ','Computer Science and Engineering','Indian School Certificate Examination',2017,97.6,'Karnataka secondary education examination Board',2019,96.8);
insert into academic_details values(2,'CET','Mechanical Engineering','Indian school certificate Examination','2017',98.4,'Karnataka Secondary Education Examination Board',2019,97.4);
insert into academic_details values(3,'COMEDK','Information Science','Indian school certficate Examination',2017,95.4,'Karnataka Secondary Education Examination Board',2019,93.8);
insert into academic_details values(4,'CET','Electronics and communication Enginnering','Indian school certificate Examination',2017,91,'Karnataka Secondary Education Examination Board',2019,94.6);
insert into academic_details values(5,'CET','Civil Engineering','Indian school certificate Examination',2017,93.78,'Karnataka Secondary Education Examination Board',2019,93.7);
insert into academic_details values(6,'CET','Biotechnology','Indian school certificate Examination',2017,93.78,'Karnataka Secondary Education Examination Board',2019,94.8);
insert into academic_details values(7,'CET','Metalurgical Engineering','Indian school certificate Examination',2017,94.7,'Karnataka Secondary Education Examination Board',2019,93.4);
insert into academic_details values(8,'CET-SNQ','Information Science','Indian school certificate Examination',2017,91.3,'Karnataka Secondary Education Examination Board',2019,98.9);
insert into academic_details values(9,'CET-SNQ','Mechanical Engineering','Indian school certificate Examination',2017,97.8,'Karnataka Secondary Education Examination Board',2019,97.8);
insert into academic_details values(10,'CET','Computer Science and Engineering','Indian school certificate Examination',2017,98,'Karnataka Secondary Education Examination Board',2019,88.9);
insert into academic_details values(11,'CET','Civil Engineering','Indian school certificate Examination',2017,92.48,'Karnataka Secondary Education Examination Board',2019,86);
insert into academic_details values(12,'CET','Electronics and communication Enginnering','Indian school certificate Examination',2017,91.38,'Karnataka Secondary Education Examination Board',2019,93);
insert into academic_details values(13,'CET','Biotechnology','Indian school certificate Examination',2017,93.48,'Karnataka Secondary Education Examination Board',2019,92);
insert into academic_details values(14,'CET','Metalurgical Engineering','Indian school certificate Examination',2017,94.5,'Karnataka Secondary Education Examination Board',2019,93);
insert into academic_details values(15,'MANAGEMENT','Computer Science and Engineering','Indian school certificate Examination',2017,88.4,'Karnataka Secondary Education Examination Board',2019,82.3);

select *from academic_details;


insert into signup values("nikhils.cs19@bmsce.ac.in","Nikhil","S","0123456789",1);
insert into signup values("kiranb.me17@bmsce.ac.in","Kiran","B","0123456789",2);
insert into signup values("arunk.is19@bmsce.ac.in","Arun","kumar K","0123456789",3);
insert into signup values("anil.ec20@bmsce.ac.in","Anil","M","",4);
insert into signup values("shashikantm.cv19@bmsce.ac.in","Shashikant","singh M","0123456789",5);
insert into signup values("premag.bt19@bmsce.ac.in","Prema","G","0123456789",6);
insert into signup values("prajwals.mt19@bmsce.ac.in","Prajwal","V S","0123456789",7);
insert into signup values("nitishm.is19@bmsce.ac.in","Nitish","kumar M","0123456789",8);
insert into signup values("premsai.me19@bmsce.ac.in","Prem","p sai","0123456789",9);
insert into signup values("harsha.cs20@bmsce.ac.in","Harsha","V N","0123456789",10);
insert into signup values("gagana.cv18@bmsce.ac.in","Gagana","D K","0123456789",11);
insert into signup values("aishwarya.ec19@bmsce.ac.in","Aishwarya","nagraj","0123456789",12);
insert into signup values("nitin.bt17@bmsce.ac.in","nitin","Dulloli","0123456789",13);
insert into signup values("mallikaprasad.mt18@bmsce.ac.in","Mallika","prasad","0123456789",14);
insert into signup values("darshanm.cs19@bmsce.ac.in","Darshan","M S","0123456789",15);

select *from signup;


insert into Family values(1,'Father','Lankesh Sashti','1980-01-08',8317083413,'Higher secondary','Teacher','lankesh@gmail.com');
insert into Family values(1,'Mother','Ruchira Shamshaard','1984-04-12',6748025241,'Higher secondary','Housewife','ruchira@gmail.com');
insert into Family values(2,'Father','Surya Tirumalesa','1978-05-12',8849029188,'Higher secondary','Teacher','surya1@gmail.com');
insert into Family values(2,'Mother','Kankana Dhurvasula','1984-05-30',7887044584,'','Housewife','kankana@gmail.com');
insert into Family values(3,'Father','Hriday Tandekar','1976-06-24',6127988050,'Illiterate','Agriculture','hriday9@gmail.com');
insert into Family values(3,'Mother','Vasudha Murugappa','1984-07-16',6127986355,'Higher secondary','Teacher','vasudha@gmail.com');
insert into Family values(4,'Father','Nishit','1976-06-06',6510970447,'matriculation','Business','nishit3@gmail.com');
insert into Family values(4,'Mother','Mandira Minakshi','1984-11-14',6519911311,'Higher secondary','Housewife','mandira@gmail.com');
insert into Family values(5,'Father','Arvind','1977-10-13',8160984985,'Higher secondary','Teacher','arvind7@gmail.com');
insert into Family values(5,'Mother','Kamalika Madhuri Banerjee','1983-05-11',6319689697,'Illiterate','Housewife','madhuri@gmail.com');
insert into Family values(6,'Father','Dharma Vilok','1976-11-27',7441364076,'Post Graduation','Doctor','dharma7@gmail.com');
insert into Family values(6,'Mother','Jyotsna','1980-01-08',8754324534,'Higher secondary','Housewife','jyotsna@gmail.com');
insert into Family values(7,'Mother','Lakshmi Sibabrata','1983-03-12',8700046260,'Higher secondary','Teacher','lakshmi@gmail.com');
insert into Family values(7,'Father','Ninad Huggahilli','1977-08-24',6121222851,'Below Matriculation','Agriculture','ninad6@gmail.com');
insert into Family values(8,'Mother','Sukeshi Dhruba','1984-01-05',7240242914,'Higher secondary','Housewife','sukeshi@gmail.com');
insert into Family values(8,'Father','Gangeya Utpat','1977-12-13',6618043091,'Higher secondary','Teacher','utpat5@gmail.com');
insert into Family values(9,'Mother','Sita Ashima','1983-04-18',9819245182,'Higher secondary','Housewife','sita@gmail.com');
insert into Family values(9,'Father','Ranjit Nirupa','1979-07-21',7198854180,'Professional','Business','ranjit6@gmail.com');
insert into Family values(10,'Mother','Preeti Niradhara','1983-07-13',6127951126,'Higher secondary','Housewife','preeti@gmail.com');
insert into Family values(10,'Father','Meghdutt Nagappa','1976-11-16',6127994361,'Matriculation','Business','meghdutt5@gmail.com');
insert into Family values(11,'Mother','Rashmi Kasturirangan','1983-09-06',6127917798,'Higher secondary','Housewife','Rashmi@gmail.com');
insert into Family values(11,'Father','Mohin Shachi','1977-02-07',6127968567,'Higher secondary','Teacher','mohin3@gmail.com');
insert into Family values(12,'Mother','Madhulata','1983-10-02',8847490431,'Higher secondary','Housewife','Madhulata@gmail.com');
insert into Family values(12,'Father','Sukant Muppala','1978-08-12',7979907027,'Higher secondary','Teacher','muppala2@gmail.com');
insert into Family values(13,'Mother','Supriya','1983-12-19',8079537901,'Higher secondary','Teacher','supriya@gmail.com');
insert into Family values(13,'Father','Yajnesh Palanisamy','1978-03-05',7310845607,'Post graduate','Doctor','yajnesh6@gmail.com');
insert into Family values(14,'Mother',' Roshni','1984-05-04',6127921580,'Higher secondary','Teacher','Roshni@gmail.com');
insert into Family values(14,'Father','Sanjog  Preetinder','1979-03-23',6127926632,'Higher secondary','Teacher','sanjog3@gmail.com');
insert into Family values(15,'Mother','Chandrika','1984-11-01',9437627687,'Higher secondary','Housewife','chandrika@gmail.com');
insert into Family values(15,'Father','Krishnakumar','1979-11-28',6127961183,'Higher secondary','Teacher','krishna@gmail.com');

select * from family;

insert into address values(1,'Divyashree Chambers 11 Off Ld, O Shaugnessey Road',560027,'Bangalore','KARNATAKA','Divyashree Chambers 11 Off Ld, O Shaugnessey Road',560027,'Bangalore','KARNATAKA');
insert into address values(2,'51 Rajatha Complex S petblr Chickpet',560053,'Bangalore','KARNATAKA','51 , Rajatha Complex, S;petblr-, Chickpet',560053,'Bangalore','KARNATAKA');
insert into address values(3,'143 B N R Complex bnrcplx jmrdblr J M Road',560002,'Bangalore','KARNATAKA','143 B N R Complex bnrcplx jmrdblr J M Road',560002,'Bangalore','KARNATAKA');
insert into address values(4,'342mysore Rd,blr,Mysore Road',560026,'Bangalore','KARNATAKA','342mysore Rd,blr,Mysore Road',560026,'Bangalore','KARNATAKA');
insert into address values(5,'43 st Floor, Balaji Complex, Am Lane, S P Road',560002,'Bangalore','KARNATAKA','43 st Floor, Balaji Complex, Am Lane, S P Road',560002,'Bangalore','KARNATAKA');
insert into address values(6,'549 ,thmnndcrsstblocrdstbasav, Basaveshwarnagar',560079,'Bangalore','KARNATAKA','549 ,thmnndcrsstblocrdstbasav, Basaveshwarnagar',560079,'Bangalore','KARNATAKA');
insert into address values(7,'147 ,thcrsthmnmvmblr-, Malleswaram',560003,'Bangalore','KARNATAKA','147 ,thcrsthmnmvmblr-, Malleswaram',560003,'Bangalore','KARNATAKA');
insert into address values(8,'56 ,th Crs, H Siddaiah Rd, H Siddaiah Road',560027,'Bangalore','KARNATAKA','56 ,th Crs, H Siddaiah Rd, H Siddaiah Road',560027,'Bangalore','KARNATAKA');
insert into address values(9,'66 , Gl Thimmaiah Road, Musium Road',560025,'Bangalore','KARNATAKA','66 , Gl Thimmaiah Road, Musium Road',560025,'Bangalore','KARNATAKA');
insert into address values(10,'199 , Kenchanapura Cross Doddabasti Main Ro, Bhuvaneshwarinagar',560056,'Bangalore','KARNATAKA','123/a, Irla Society Road, Opp.papilon Rest, Vile Parle (west)',400056,'MUMBAI',' Maharashtra');
insert into address values(11,'#24, Kota Complex, J C Nagar',560002,'Bangalore','KARNATAKA','#24, Kota Complex, J C Nagar',560002,'Bangalore','KARNATAKA');
insert into address values(12,'14,avnrdblr, Raja Market, Avenue Road',560002,'Bangalore','KARNATAKA','14,avnrdblr, Raja Market, Avenue Road',560002,'Bangalore','KARNATAKA');
insert into address values(13,'S-403, Manipal Centre, Dickenson Road, Dickenson Road',560042,'Bangalore','KARNATAKA','14 , Near Rupee Co Op Bank, Amarpali, Charai Naka, Charai, Thane','400601','MUMBAI','Maharashtra');
insert into address values(14,'426 /chptblr-, Chickpet',560053,'Bangalore','KARNATAKA','426 /chptblr-, Chickpet',560053,'Bangalore','KARNATAKA');
insert into address values(15,'Sai baba PG Ashokanagar,Hanumanthnagar',560053,'Bangalore','KARNATAKA','Botawala Chamber, Modi Street',400001,'MUMBAI',' Maharashtra');
select * from address;


























