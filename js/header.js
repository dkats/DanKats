function header(level = 0) {
	if(level == 0) {
		dir = '';
	} else if(level == -1) {
		dir = '../';
	}

	document.write('<header>');
	document.write('<ul class="menu">');
	document.write('	<li class="noclick">Dan Kats</li>');
	document.write('	<li onclick="window.open(\'' + dir + 'files/CV.pdf\')" id="header_cv">CV</li>');
	// document.write('	<li onclick="window.open(\'' + dir + 'education.html\',\'_self\')" id="header_edu">Education</li>');
	document.write('	<li onclick="window.open(\'' + dir + 'projects.html\',\'_self\')" id="header_proj">Projects</li>');
	document.write('	<li onclick="window.open(\'' + dir + 'research.html\',\'_self\')" id="header_res">Research</li>');
	document.write('	<li onclick="window.open(\'' + dir + 'hobbies.html\',\'_self\')" id="header_extracurr">Hobbies</li>');
	document.write('	<li onclick="window.open(\'' + dir + 'thoughts.html\',\'_self\')" id="header_thoughts">My Thoughts</li>');
	document.write('</ul>');
	document.write('</header>');
}