<!DOCTYPE html>
<html>
<head><title>Login</title></head>
<body style="font-family:verdana, sans-serif;">
<h2>Login</h2>


<form method=post action="login/auth.php">
<table cellspacing=5pt cellpadding=10pt style="border:1pt solid #7777ff;">
	<tr>
	<td>User</td>
	<td><input type=text size=20 name=username></td>
	</tr>

	<tr>
	<td>Password</td>
	<td><input type=password size=20 name=password></td>
	</tr>

	<tr>
	<td><input type=submit value=Login></td>
	<!--<td><input type=submit value=Register></td>-->
	</tr>
</table>
<a href="register.html">click to register</a>
</body>
</html>