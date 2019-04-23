<?php

  $conn = mysqli_connect("192.168.64.2:8080", "", "", "FindYourCar");

  $result = mysqli_query($conn, "SELECT * FROM UserInput");

  $data = array();
  while ($row = mysqli_fetch_assoc("result"))
  {
    $data[] = $row;
  }

  echo "hello world";
  echo json_encode($data);
