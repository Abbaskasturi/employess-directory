<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Employee Directory (FTL)</title>
  <link rel="stylesheet" href="/static/css/styles.css">
</head>
<body>

  <div id="employee-list-container">
    <#list employees as emp>
      <div class="employee-card">
        <h3 class='person-information'>${emp.firstName} ${emp.lastName}</h3>
        <p class='person-information'>ID: ${emp.id}</p>
        <p class='person-information'>Email: ${emp.email}</p>
        <p class='person-information'>Department: ${emp.department}</p>
        <p class='person-information'>Role: ${emp.role}</p>
      </div>
    </#list>
  </div>

  <script src="/static/js/data.js"></script>
  <script src="/static/js/app.js"></script>

</body>
</html>
