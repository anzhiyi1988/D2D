------------------------------------------------
-- 模型-组
------------------------------------------------
CREATE TABLE d2d.t_model_group (
	c_id CHAR (32),
	c_name VARCHAR (300),
	c_pid CHAR (32),
	c_type VARCHAR (10)
);

------------------------------------------------
-- 模型-代码 
------------------------------------------------
DROP TABLE d2d.t_model_code;

CREATE TABLE d2d.t_model_code (
	c_group_id CHAR (32),
	c_id CHAR (32),
	c_name VARCHAR (300),
	c_tablename VARCHAR (300),
	dt_cjsj TIMESTAMP
);

COMMENT ON COLUMN d2d.t_model_code.c_name IS '代码业务名称';

COMMENT ON COLUMN d2d.t_model_code.c_tablename IS '代码数据库表名称';

COMMENT ON COLUMN d2d.t_model_code.dt_cjsj IS '创建时间';

SELECT
	*
FROM
	d2d.t_model_code SELECT
		c_group_id AS groupId,
		c_id AS ID,
		c_name AS NAME,
		c_tablename AS tableName
	FROM
		d2d.t_model_code ------------------------------------------------
		-- 模型-模型
		------------------------------------------------
		CREATE TABLE d2d.t_model_model (
			c_id CHAR (32),
			c_name VARCHAR (300),
			c_pid CHAR (32),
			c_type VARCHAR (10)
		);

------------------------------------------------
-- 
------------------------------------------------
SELECT
	c_id AS ID,
	c_name AS NAME,
	c_pid AS pid
FROM
	d2d.t_modelgroup
WHERE
	c_pid = ?;

------------------------------------------------
-- 
------------------------------------------------
SELECT
	*
FROM
	d2d.t_modelgroup;

------------------------------------------------
-- 
------------------------------------------------
SELECT
	VERSION () DROP TABLE d2d.t_modelgroup TRUNCATE TABLE d2d.t_modelgroup SELECT
		A .c_id AS ID,
		A .c_name AS NAME,
		A .c_pid AS pid,
		A .c_type AS TYPE,
		b.c_id AS bid,
		b.c_name AS bname,
		b.c_pid AS bpid,
		b.c_type AS btype
	FROM
		d2d.t_modelgroup A
	LEFT JOIN d2d.t_modelgroup b ON A .c_id = b.c_pid
	WHERE
		A .c_pid IS NULL