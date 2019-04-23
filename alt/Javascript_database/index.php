<table>
  <tr>
      <th>Gender</th>
      <th>Age</th>
      <th>Relationship</th>
      <th>Kids</th>
      <th>Educ.</th>
      <th>Job</th>
      <th>Hobby</th>
      <th>Reason</th>
      <th>Jahreskm</th>
      <th>Budget</th>
  </tr>
  <tbody id="data">

  </tbody>
</table>

<script>
    //call ajax
    var ajax = new XMLHttpRequest();
    var method = "GET";
    var url = "data.php";
    var asynchronous = true;

    ajax.open(method, url, asynchronous);
    //sending ajax request
    ajax.send();
    //receiving response from data.php
    ajax.onreadystatechange = function()
    {
      if (this.readyState == 4 && this.status == 200)
      {
        var data = JSON.parse(this.responseText);
        console.log(data);

        var html = "";

        for (var a = 0; a < data.length; a++)
        {
          var gender = data[a].gender;
          var age = data[a].age;
          var relationship_status = data[a].relationship_status;
          var kids = data[a].kids;
          var educational_lvl = data[a].educational_lvl;
          var job = data[a].job;
          var hobby = data[a].hobby;
          var reason = data[a].reason;
          var km_year = data[a].km_year;
          var budget = data[a].budget;

          html += "<tr>";
            html += "<td>" + gender + "</td>";
          html += "</tr>";
        }

        document.getElementById("data").innerHTML = html;
      }
    }

 </script>
