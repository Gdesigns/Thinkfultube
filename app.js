$(document).ready(function () { 

// Get Youtube Data from API and display on page

function getResults(query) {
	$.getJSON("https://www.googleapis.com/youtube/v3/search",
		{
			"key": "AIzaSyBpEV1aJ3eZ8ztPxJJZ4vY0OTVAMTvArkQ",
			"part": "snippet",
			"q": query,
			maxResults: 25
		},
		function (data) {
			displaySearchResults(data.items);
		}
	);
}

function displaySearchResults(videos) {
	var html = "";
	$.each(videos, function (index, video) {

		// append li to ul

		html = html + "<li><img src='" +  video.snippet.thumbnails.high.url + "'><p>" + video.snippet.title +"</p></li>" ;

	});
	$("#search-results").show();
	$("#search-results ul").html(html);
}

	$("#search-form").submit(function (event) {
		event.preventDefault();
		getResults($("#query").val());
	});
});