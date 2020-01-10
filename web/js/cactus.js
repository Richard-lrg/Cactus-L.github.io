function loadData(content, content_url, content_id) {
    var content_html = '';
    for (var i = 0; i < content.length; i++) {
        var content_path = content_url + content[i].path;
        content_html +=
            '<div class="col-md-4">'
                + '<div class="fh5co-blog animate-box">'
                    + '<div href="' + content_path + '" class="blog-bg" style="border: whitesmoke 1px solid; background-image: url(' + content[i].image + '); background-position: center; background-size: contain; background-repeat: no-repeat"></div>'
                    + '<div class="blog-text"  style="display: flex; flex-flow: column; justify-content: center">'
                        + '<div class="posted_on">' + content[i].date + '</div>'
                        + '<div class="cactus_title" style="height: 50px; margin-top: 10px;"><b>'+ content[i].title +'</b></div>'
                        + '<div class="cactus_content" style="height: 60px;">' + content[i].content + '</div>'
                        + '<div style="margin-top: 5px">'
                            + '<ul class="stuff">'
                                + '<li><i class="icon-heart3"></i>249</li>'
                                + '<li><i class="icon-eye2"></i>1,308</li>'
                                + '<li><a href="' + content_path + '">Read More<i class="icon-arrow-right22"></i></a></li>'
                            + '</ul>'
                        + '</div>'
                    + '</div>'
                + '</div>'
            + '</div>';
    }
    document.getElementById(content_id).innerHTML = content_html
}
