(function() {

	// This method is used to color alternating rows in a table when the
	// class "alternate-rows" is applied.
	function altRows(className) {
		var table = document.getElementsByClassName(className);

		for (i = 0; i < table.length; i++) {
			var rows = table[i].getElementsByTagName("tr");
			for (r = 0; r < rows.length; r++) {
				if (r % 2 == 0) {
					rows[r].className = "evenrowcolor";
				} else {
					rows[r].className = "oddrowcolor";
				}
			}
		}
	}

	window.onload=function() {
		altRows("alternate-rows")
    prettyPrint()
    var title = $('#page-title')
    if (title.length)
      title.html(document.title)

    var header = $('header[role=course-title]')
    if (header.length)
      header.html(document.title)
	}

   ////////////////////////////////////////
    // Setup the IDE selection, look for <ide> tags
    // and add our buttons to the UI when we find any.
    ////////////////////////////////////////
    var ideSelection = {
        init: function() {
            var hasIde = $("ide").length;
            if (hasIde > 0) {
                var $currentIDE = "vs";

                var $ideSelector = $("<div class=\"ide-selector\">");
                $ideSelector.append($("<a href=\"#\" data-name=\"vs\">Windows</a>"));
                $ideSelector.append($("<a href=\"#\" data-name=\"xs\">macOS</a>"));
                $ideSelector.insertBefore($("#main"));

                $ideSelector.bind('recalc', function(e, newValue) {
                    var value;
                    if (newValue == undefined) {
                        value = $currentIDE;
                    } else {
                        value = newValue;
                    }

                    $("div.ide-selector").find('a').removeClass('active');
                    $("div.ide-selector").find('a[data-name="' + value + '"]').addClass('active');

                    $('ide').hide();
                    $("ide[name='" + value + "']").show();
                });

                $ideSelector.trigger('recalc');
                $ideSelector.show();

                $ideSelector.on('click', 'a', function(e) {
                    e.preventDefault();
                    $ideSelector.trigger('recalc', $(this).attr('data-name'));
                });
            }
        }
    };

    ideSelection.init();

})();

// This is used to show/hide code blocks
function toggleCode(btn, id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block') {
      e.style.display = 'none';
      btn.innerHTML = "Show Code";
   }
   else {
      e.style.display = 'block';
      btn.innerHTML = "Hide Code";
   }
}

// This is used to show/hide text blocks
function toggleBlock(btn, id, showText, hideText) {
   var e = document.getElementById(id);
   if(e.style.display == 'block') {
      e.style.display = 'none';
      btn.innerHTML = showText;
   }
   else {
      e.style.display = 'block';
      btn.innerHTML = hideText;
   }
}

