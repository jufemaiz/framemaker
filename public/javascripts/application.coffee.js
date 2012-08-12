updateFrame = () ->
	# MAXDIM
	MAXDIM = 600
	if $("header").innerHeight() > $('#canvas').innerWidth()
		MAXDIM = $('#canvas').innerWidth() - 100
	else
		MAXDIM = $("header").innerHeight() - 100
	
	width_ratio		= 1
	height_ratio	= 1
	leFrame			= $("#canvas")
	frame_width 	= $("form input#frameWidth").attr('value')*1
	frame_colour 	= $("form input#frameColour").attr('value')
	matt_width		= $("form input#matt0Width").attr('value')*1
	matt_colour		= $("form input#matt0Colour").attr('value')
	picture_height	= $("form input#imageHeight").attr('value')*1
	picture_width	= $("form input#imageWidth").attr('value')*1
	picture_source	= $("form input#imageSource").attr('value')

	full_frame_width	= picture_width + 2  * ( frame_width + matt_width )
	full_frame_height	= picture_height + 2  * ( frame_width + matt_width )
	frame_wood_length 	= 2 * ( full_frame_height + full_frame_width )
	
	$('#top_bottom_length').attr('value',full_frame_width)
	$('#side_length').attr('value',full_frame_height)
	$('#frame_wood_length').attr('value',frame_wood_length)
	
	if(full_frame_width > full_frame_height)
		height_ratio	= full_frame_height / full_frame_width
	else
		width_ratio		= full_frame_width / full_frame_height
	
	$('.picture',	leFrame).css({ 'height' : (MAXDIM / full_frame_height) * (picture_height * height_ratio), 'width' : (MAXDIM / full_frame_width) * (picture_width * width_ratio) })
	$('.matt0',		leFrame).css({ 'background' : matt_colour, 'height' : (MAXDIM / full_frame_height) * ((picture_height + 2 * matt_width) * height_ratio), 'width' : (MAXDIM / full_frame_width) * ((picture_width + 2 * matt_width) * width_ratio) })
	$('.frame',		leFrame).css({ 'background' : frame_colour,'height' : (MAXDIM / full_frame_height) * ((picture_height + 2 * (matt_width + frame_width)) * height_ratio), 'width' : (MAXDIM / full_frame_width) * ((picture_width + 2 * (matt_width + frame_width)) * width_ratio) })

	$('.matt0',		leFrame).css({ 'top' : (MAXDIM / full_frame_height) * (frame_width * height_ratio), 'left' : (MAXDIM / full_frame_width) * (frame_width * width_ratio) })
	$('.picture',	leFrame).css({ 'top' : (MAXDIM / full_frame_height) * ( matt_width * height_ratio), 'left' : (MAXDIM / full_frame_width) * ( matt_width * width_ratio) })
	
	$('.picture img',leFrame).remove()
	if !(picture_source.nil? || picture_source == "") 
		img = $("<img src='#{picture_source}' alt='Custom image' style='display: block;'>")
		$('.picture',leFrame).append(img)
	
	return true

$(document).ready () ->
	$('form input').change () ->
		updateFrame()
		true
	updateFrame()
	true
	