<html>
<body>
<script>
var today = new Date();
var dd = (today.getDate()).padStart(2, '0');
var mm = (today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);
</script>
</body>
</html>