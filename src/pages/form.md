---
title: Form Ipsum
slug: form-ipsum
date: 2019-01-01T00:00:00-5
---

<header class="container">
	<h1 class="post-title">Form</h1>
</header><!-- .container -->

<div class="container">
	<ul class="list_bulleted">
		<li><a href="#inputs">Inputs</a></li>
		<li><a href="#checkboxes">Checkboxes, Toggles</a></li>
		<li><a href="#radio-buttons">Radio Buttons</a></li>
		<li><a href="#classic-form-elements">Classic Form Elements</a></li>
		<li><a href="#new-form-elements">New Form Elements</a></li>
	</ul>
</div><!-- .container -->

<form method="get" action="/" class="container">
	<fieldset id="inputs">
		<legend>Input Element Types (All)</legend>
		<div>
			<label for="a-button">Input Button</label>
			<input type="button" value="Button" placeholder="button" name="a-button" id="a-button" />
		</div>
		<div>
			<label for="a-color">Color</label>
			<input type="color" value="#ffffff" placeholder="color picker" name="a-color" id="a-color" />
		</div>
		<div>
			<label for="a-date">Date</label>
			<input type="date" value="1979-03-12" placeholder="enter a date in the YYYY-MM-DD format" name="a-date" id="a-date" />
		</div>
		<div>
			<label for="a-datetime">Datetime</label>
			<input type="datetime" value="2014-04-20 15:45" placeholder="enter a date and time in the YYYY-MM-DD HH:MM format" name="a-datetime" id="a-datetime" />
		</div>
		<div>
			<label for="a-datetime-local">Datetime-local</label>
			<input type="datetime-local" value="1999-12-31 23:59" placeholder="enter a date and time in the YYYY-MM-DD HH:MM format" name="a-datetime-local" id="a-datetime-local" />
		</div>
		<div>
			<label for="an-email-address">Email</label>
			<input type="email" value="you@youremail.com" placeholder="you@youremail.com" name="an-email-address" id="an-email-address" />
		</div>
		<div>
			<label for="a-file-upload">File</label>
			<input type="file" value="Select a file" name="a-file-upload" id="a-file-upload" />
		</div>
		<div>
			<label for="a-hidden">Hidden</label>
			<input type="hidden" value="i am hidden" name="a-hidden" id="a-hidden" />
		</div>
		<div>
			<label for="an-image">Image</label>
			<input type="image" src="http://clicknathan.com/wp-content/uploads/2014/05/red-button.png" width="50" height="50" name="an-image" id="an-image" />
		</div>
		<div>
			<label for="a-month">Month</label>
			<input type="month" value="2014-05" placeholder="enter a year and month in the YYYY-MM format" name="a-month" id="a-month" />
		</div>
		<div>
			<label for="a-week">Week</label>
			<input type="week" value="2014-w52" placeholder="enter a year and week in the YYYY-wWW format where the 'w' is just a w, and the 'WW' represents the week number" name="a-week" id="a-week" />
		</div>
		<div>
			<label for="a-number">Number</label>
			<input type="number" value="13" placeholder="number" name="a-number" id="a-number" />
		</div>
		<div>
			<label for="a-password">Password</label>
			<input type="password" value="" placeholder="enter a password" name="a-password" id="a-password" />
		</div>
		<div>
			<label for="a-range">Range</label>
			<input type="range" value="" placeholder="enter a range" name="a-range" id="a-range" min="1" max="10" step="1" />
		</div>
		<div>
			<label for="a-search">Search</label>
			<input type="search" value="" placeholder="Search..." name="a-search" id="a-search" />
		</div>
		<div>
			<label for="a-tel">Tel</label>
			<input type="tel" value="1-800-847-4872" placeholder="Enter your phone number" name="a-tel" id="a-tel" />
		</div>
		<div>
			<label for="a-text">Text</label>
			<input type="text" value="" placeholder="type something here" name="a-text" id="a-text" />
		</div>
		<div>
			<label for="a-disabled-text">Text, Disabled</label>
			<input type="text" disabled value="" placeholder="i am disabled" name="a-disabled-text" id="a-disabled-text" />
		</div>
		<div>
			<label for="a-time">Time</label>
			<input type="time" value="12:34" placeholder="enter a time in 24 hour format, such as 15:59" name="a-time" id="a-time" />
		</div>
		<div>
			<label for="a-url">URL</label>
			<input type="url" value="" placeholder="http://" name="a-url" id="a-url" />
		</div>
		<div>
			<label for="a-submit">Submit</label>
			<input type="submit" value="Submit" name="a-submit" id="a-submit" />
		</div>
		<div>
			<label for="a-reset">Reset</label>
			<input type="reset" value="Reset" name="a-reset" id="a-reset" />
		</div>
	</fieldset>
	<fieldset id="checkboxes">
		<legend>Checkboxes, Toggles</legend>
		<div>
			<label for="check-1">
				<input type="checkbox" value="check-1" name="check-1" id="check-1" />
				Check 1
			</label>
		</div>
		<div>
			<label for="check-2">
				<input type="checkbox" value="check-2" name="check-2" id="check-2" />
				Check 2
			</label>
		</div>
		<div>
			<label for="check-3">
				<input type="checkbox" value="check-3" name="check-3" id="check-3" />
				Check the microphone
			</label>
		</div>
		<div>
			<label class="toggle" for="check-a">
				<input type="checkbox" value="check-a" name="check-a" id="check-a" />
				<span class="toggle__switch"></span>
				Check A
			</label>
		</div>
		<div>
			<label class="toggle" for="check-b">
				<input type="checkbox" value="check-b" name="check-b" id="check-b" />
				<span class="toggle__switch"></span>
				Check B
			</label>
		</div>
		<div>
			<label class="toggle" for="check-c">
				<input type="checkbox" value="check-c" name="check-c" id="check-c" />
				<span class="toggle__switch"></span>
				Toggle the microphone
			</label>
		</div>
	</fieldset>
	<fieldset id="radio-buttons">
		<legend>Radio Buttons</legend>
		<div>
			<input type="radio" value="radio-1" name="radio-1" id="radio-1" />
			<label for="a-button">AM</label>
		</div>
		<div>
			<input type="radio" value="radio-2" name="radio-2" id="radio-2" />
			<label for="a-button">FM</label>
		</div>
		<div>
			<input type="radio" value="radio-3" name="radio-3" id="radio-3" />
			<label for="a-button">XM</label>
		</div>
	</fieldset>
	<fieldset id="classic-form-elements">
		<legend>Other Classic Form Elements</legend>
		<div>
			<label for="a-textarea">Textarea</label>
			<textarea name="a-textarea" id="a-textarea">My new stuff is nothin' like my old stuff was.</textarea>
		</div>
		<div>
			<label for="a-select">Select</label>
			<select name="a-select" id="a-select">
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
		</div>
		<div>
			<label for="a-select-with-option-groups">Select with Option Groups</label>
			<select name="a-select-with-option-groups" id="a-select-with-option-groups">
				<optgroup label="Mario Brothers">
					<option value="mario">Mario</option>
					<option value="luigi">Luigi</option>
				</optgroup>
				<optgroup label="Princesses">
					<option value="peach">Peach</option>
					<option value="toadstool">Toadstool</option>
					<option value="daisy">Daisy</option>
				</optgroup>
			</select>
		</div>
		<div>
			<label for="a-multi-select">Select</label>
			<select multiple name="a-multi-select" id="a-multi-select">
				<option value="douglas-fir">Douglas-fir</option>
				<option value="hemlock">Hemlock</option>
				<option value="joshua">Joshua Tree</option>
				<option value="ponderosa">Ponderosa Pine</option>
				<option value="juniper">Juniper</option>
				<option value="redcedar">Redcedar</option>
				<option value="redwood">Redwood</option>
				<option value="sequoia">Sequoia</option>
				<option value="sitka spruce">Sitka Spruce</option>
			</select>
		</div>
		<div>
			<label for="a-button-element">Button</label>
			<button type="submit" name="a-button-element" id="a-button-element">Button</button>
		</div>
	</fieldset>
	<fieldset id="new-form-elements">
		<legend>New Form Elements since HTML5</legend>
		<div>
			<label for="the-datalist">Datalist</label>
			<input type="text" list="a-datalist" placeholder="Enter the name of any one of the Beatles" />
			<datalist id="a-datalist">
				<option value="Paul McCartney">
				<option value="Ringo Starr">
				<option value="George Harrison">
				<option value="John Lennon">
			</datalist>
		</div>
		<div>
			<label for="a-keygen">Keygen</label>
			<keygen name="a-keygen" id="a-keygen" />
		</div>
	</fieldset>
</form>