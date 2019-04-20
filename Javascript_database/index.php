<table>
  <tr>
      <th>First name</th>
      <th>Last name</th>
      <th>Job Title</th>
  </tr>
  <tbody id="data">

  </tbody>
</table>

<script type="text/javascript">
    //call ajax
    var ajax = new XMLHttpRequest();
    var method = "GET";
    var url = "data.php";
    var asynchronous = true;

    ajax.open(method, url, asynchronous);
    //sending ajax request
    ajax.send();

    ajax.onreadystatechange = function()
    {
      if (this.readyState == 4 && this.status == 200)
      {
          altert(this.responsteText);
      }
    }

 </script>
