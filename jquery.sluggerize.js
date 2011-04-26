jQuery.fn.sluggerize = function(field_name)
{
	if(field_name == undefined) { field_name = 'slug'; }
	function slug(str)
	{
		str = str.replace(/^\s+|\s+$/g, ''); // trim
		str = str.toLowerCase();

		// remove accents, swap ñ for n, etc
		var from = "ãàáäâèéëêìíïîòóöôùúüûñç·/_,:;";
		var to   = "aaaaaeeeeiiiioooouuuunc------";
		
		for (var i=0; i < from.length ; i++)
		{
		console.log(from[i]);
			str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
		}

		str = str.replace(/[^a-z0-9 -]/g, '-')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-|-$/g, '');

		return str;
	}
	
	$(this).after('<p class="sluggerize"><small><b>Slug:</b> <span></span></small></p>');
	$(this).after('<class="sluggerize" input type="hidden" name="'+ field_name +'"');
	
	$(this).keyup(function()
	{
		slugged = slug($(this).val());
		$('p.sluggerize span').html(slugged);
		$('input.sluggerize').val(slugged);
	}).trigger('keyup');
};
