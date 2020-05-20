const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "ONboarding",
				weight: 12.3
			}, {
				text: "guidance",
				weight: 8
			}, {
				text: "coaching",
				weight: 14
			}, {
				text: "assesment",
				weight: 3
			}, {
				text: "programming",
				weight: 7
			}, {
				text: "database",
				weight: 10
			}, {
				text: "",
				weight: 9
			}, {
				text: "KPI",
				weight: 15
			}, {
				text: "SQL",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}


	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am an HR generalist.", "l enjoy the area of managing staff", "also I’ve always loved explaining things and helping people.", "solve complex problems.", "Strategic & operational effectiviness"
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
