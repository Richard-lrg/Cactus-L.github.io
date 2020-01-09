function initArticle() {
    $.ajax({
        url: "http://www.liruigao.top/cactus_blog/json/summary.json",
        async: false,
        dataType: "json",
        success:function (data) {
            loadData(data.articles, "http://www.liruigao.top/cactus_article/", "cactus-articles");
        },
        error: function (err) {
            console.log("get summary json fail, check cactus_blog themes!", err);
        }
    })
}

$(function(){
    initArticle()
});
