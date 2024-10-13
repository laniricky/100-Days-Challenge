<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = htmlspecialchars($_POST['name']);
        $age = htmlspecialchars($_POST['age']);
        $email = htmlspecialchars($_POST['email']);

        echo "<h1>Personal Information Received 🎉</h1>";
        echo "Name: " . $name . "<br>";
        echo "Age: " . $age . "<br>";
        echo "Email: " . $email . "<br>";
    } else {
        echo "No data received!";
    }
?>

