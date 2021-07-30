var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching';
    }
  }





  /*
  <% if(typeof alert!='undefined'){%>
	<% let alert_length = Object.keys(alert).length %>
		<% for(let i = 0;i<alert_length;i++){ %>
			<div class="alert alert-warning alert-dismissible fade show" role="alert">
				<%= alert %>
				<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				  <span aria-hidden="true">&times;</span>
				</button>
			</div>
	<%	} %>
	<%}%>
  */