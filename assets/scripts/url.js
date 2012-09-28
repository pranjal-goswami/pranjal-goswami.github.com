// JavaScript Document
function processURL()
{
	var current_url = String(document.URL);
	if(!current_url) current_url = String(document.location);
	//alert(current_url.indexOf('#!/'))
	var x = current_url.indexOf('#!');
	if(x>0)
	{
			var hash_tag = current_url.substring(x+3);
			//alert(hash_tag);
			return hash_tag;
	}
	else return "";
}

function loadFileToElement(filename,elementId,level)
{
	
    var xmlHTTP = new XMLHttpRequest();
    try
    {
    xmlHTTP.open("GET", filename, false);
    xmlHTTP.send(null);
    }
    catch (e) {
        window.alert("Unable to load the requested file.");
        return;
    }
	
	var out = xmlHTTP.responseText;
	var output= "";
	
	
	$(out).find('post').each(function(){
		var title = $(this).find('title').text();
		var snap = $(this).find('snap').text();
		var date = $(this).find('date').text();
		var link_url = $(this).find('link_url').text();
		var pretty_url = $(this).find('pretty_url').text();

		title = '<h3 class="blog-heading"><a href="'+((level==0)?'post/':'')+'#!/'+pretty_url+'" '+((level!=0)?'onclick="changeContent(\''+link_url+'\')':'')+'">'+title+'</a></h3>';
		date = '<small>'+date+'</small><br /><br />';
		
        snap = '<p class="blog-quote">'+snap+'</p>';
			
		output = output + title + date + snap;
		output = ' <div class="blog-quickview">'+output+ ' </div><br/>';
		
		
	});
	
	$('#'+elementId).html(output);
	
}
function changeContent(url)
{
	$('#page-spinner').fadeIn();
	ajaxpage(url,'post');
	$('#page-spinner').fadeOut();
}