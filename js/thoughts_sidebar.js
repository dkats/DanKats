function thoughts_sidebar(level = 0) {
	if(level == 0) {
		dir = '';
	} else {
		dir = 'thoughts/';
	}

	document.write('<ul>');
	document.write('	<li class="category">Medicine</li>');
	document.write('	<ul>');
	document.write('		<li onclick="window.open(\'' + dir + 'Dream-Hospital.html\',\'_self\');">My Dream Hospital</li>');
	document.write('		<li class="category">Patient Stories</li>');
	document.write('			<ul>');
	document.write('			<li onclick="window.open(\'' + dir + 'Insuring-Poverty.html\',\'_self\');">Insuring Poverty</li>');
	document.write('			<li onclick="window.open(\'' + dir + 'Electronic-Health-Wreck.html\',\'_self\');">Electronic Health Wreck</li>');
	document.write('			<li onclick="window.open(\'' + dir + 'The-Executioner.html\',\'_self\');">The Executioner</li>');
	document.write('			<li onclick="window.open(\'' + dir + 'Irreversible-Psychosis.html\',\'_self\');">Irreversible Psychosis</li>');
	document.write('			</ul>');
	// document.write('		<li class="category">General Thoughts</li>');
	// document.write('			<ul>');
	// document.write('			<li onclick="window.open(\'' + dir + 'test.html\',\'_self\');">Test</li>');
	// document.write('			</ul>');
	document.write('	</ul>');
	document.write('</ul>');
}