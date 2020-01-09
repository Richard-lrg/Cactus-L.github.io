function loadData(content, content_url, content_id) {
    var content_html = '';
    for (var i = 0; i < content.length; i++) {
        var content_path = content_url + content[i].path;
        content_html += '<div class="col-md-4">'
            + '<div class="fh5co-blog animate-box">'
            + '<a href="' + content_path + '" class="blog-bg" style="background-image: url(' + content[i].image + ');"></a>'
            + '<div class="blog-text">'
            + '<span class="posted_on">' + content[i].date + '</span>'
            + '<h3><a href="' + content_path + '">'+ content[i].title +'</a></h3>'
            + '<p>' + content[i].content + '</p>'
            + '<ul class="stuff">'
            + '<li><i class="icon-heart3"></i>249</li>'
            + '<li><i class="icon-eye2"></i>1,308</li>'
            + '<li><a href="' + content_path + '">Read More<i class="icon-arrow-right22"></i></a></li>'
            + '</ul>'
            + '</div>'
            + '</div>'
            + '</div>';
    }
    document.getElementById(content_id).innerHTML = content_html
}
