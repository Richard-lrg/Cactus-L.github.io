function initPhoto() {
    $.ajax({
        url: "http://www.liruigao.top/cactus_photo/json/summary.json",
        async: false,
        dataType: "json",
        success:function (data) {
            loadPhoto(data, "http://www.liruigao.top/cactus_photo/", "cactus_photo");
        },
        error: function (err) {
            console.log("get summary json fail, check cactus_blog themes!", err);
        }
    })
}

function loadPhoto(content, content_url, content_id) {
    var content_html = '';
    for (var i = 0; i < content.length; i++) {
        var content_path = content_url + content[i].path;
        var image_path = content_url + content[i].image;
        content_html +=
            '<div class="col-md-4 text-center animate-box">'
                + '<a href="' + content_path + '" class="work" style="background-image: url(' + image_path + ');">'
                    + '<div class="desc">'
                        + '<h3>' + content[i].title + '</h3>'
                        + '<span>' + content[i].content + '</span>'
                    + '</div>'
                + '</a>'
            +'</div>'
    }
    document.getElementById(content_id).innerHTML = content_html
}

$(function(){
    initPhoto()
});
