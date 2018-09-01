function thoughts_sidebar(level = 0) {
	if(level == 0) {
		dir = '';
	} else {
		dir = 'thoughts/';
	}

	document.write('<ul>');
	document.write('	<li class="category">Medicine</li>');
	document.write('	<ul>');
	document.write('		<li class="category">Patient Stories</li>');
	document.write('			<ul>');
	document.write('			<li onclick="window.open(\'' + dir + 'The-Executioner.html\',\'_self\');">The Executioner</li>');
	document.write('			</ul>');
	// document.write('		<li class="category">General Thoughts</li>');
	// document.write('			<ul>');
	// document.write('			<li onclick="window.open(\'' + dir + 'test.html\',\'_self\');">Test</li>');
	// document.write('			</ul>');
	document.write('	</ul>');
	document.write('</ul>');
}