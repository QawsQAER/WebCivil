<?php
	#This is a file to reinitilze the whole application
	/*
	It will
	1. Drop all the table
	2. Generate all the tables (Accroding to the db_design)
	*/
	require_once("../lib/db.php");
	mysql_select_db("project",)
	$SQL_DROP_User = "DROP TABLE User";
	$SQL_DROP_Cookie = "DROP TABLE Cookie";
	$SQL_DROP_Game = "DROP TABEL Game";
	$SQL_CREATE_User = "";
	$SQL_CREATE_Cookie = "";
	$SQL_CREATE_Game = "";
?>
