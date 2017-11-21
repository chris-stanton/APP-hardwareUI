
-- Step 1:
	-- create database titled (hardwareUI)

-- step 2
	CREATE TABLE users (
		id SERIAL PRIMARY KEY,
		username VARCHAR(100) NOT NULL unique,
		password VARCHAR(100) NOT NULL,
		email VARCHAR(100) NOT NULL
	);

-- step 3:
	-- note the insert code below does not work because password
	-- will be saved normall in DB without being hashed with bcrypt
	INSERT INTO users (username, password, email)
	VALUES ('chris', '1', 'test@test.com');
