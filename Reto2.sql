
CREATE Table CLIENT(
    ID NUMBER NOT Null,
    NAME VARCHAR2(4000),
    EMAIL VARCHAR2(20),
    AGE NUMBER
);

CREATE Table message(
    ID NUMBER NOT Null,
    messageText VARCHAR2(4000)
);

Create Table cabin(
    ID NUMBER(10) Not Null,
    BRAND VARCHAR2(20),
    ROOMS NUMBER,
    CATEGORY_ID NUMBER,
    NAME VARCHAR2(400),
    PRIMARY KEY (ID)
);


/*Methods*/

/*Tabla Client*/

/*GET*/
SELECT * from CLIENT

/*POST*/
BEGIN
    INSERT INTO CLIENT(ID,NAME,EMAIL,AGE) VALUES(:id,:name,:email,:age);
    :status_code:=201;
END;

/*PUT*/
BEGIN
    UPDATE CLIENT SET NAME=:name, EMAIL=:email,AGE=:age WHERE ID=:id;
    :status_code:=201;
END;

/*PDELETE*/
BEGIN
    DELETE FROM CLIENT WHERE ID=:id;
    :status_code:=204;
END;


/*GET  CLIENT/:id*/
SELECT * FROM CLIENT WHERE ID=:ID


/*Tabla Messge*/
/*GET*/
	SELECT * FROM MESSAGE

/*POST*/
BEGIN
    INSERT INTO MESSAGE(ID,MESSAGETEXT) VALUES(:id,:messagetext);
    :status_code:=201;
END;

/*PUT*/
BEGIN
    UPDATE MESSAGE SET MESSAGETEXT=:messagetext WHERE ID=:id;
    :status_code:=201;
END;

/*PDELETE*/
BEGIN
    DELETE FROM MESSAGE WHERE ID=:id;
    :status_code:=204;
END;

/*GET  MESSAGE/:id*/
	SELECT * FROM MESSAGE WHERE ID=:id



https://g07051d100cd950-reto1.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client
