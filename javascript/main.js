$(document).ready(function () {
    loadInsertions($("body"));
});

function loadInsertions(view) {
    view.find("insertHtml").each(function (i) {
        let url = $(this).attr("url");
        $(this).addClass("d-none");
        $(this).load(url.concat("/component.html"), function () {
            loadInsertions($(this));
            loadMarkdownInsertions($(this));
            loadAsciidocInsertions($(this));
            hideAndShowNetworkElements($(this));
            initTooltips($(this));
            initCarousels($(this));
        });
        $("<link/>", {
            rel: "stylesheet",
            type: "text/css",
            href: url.concat("/component.css")
        }).appendTo("head");
    });
}

function loadMarkdownInsertions(view) {
    var md = window.mdit;
    view.find("insertMd").each(function (i) {
        fetch($(this).attr("src"))
            .then(response => response.text())
            .then(text => $(this).empty().append(md.render(text)))
    });
}

function loadAsciidocInsertions(view) {
    var ad = window.ad;
    view.find("insertAd").each(function (i) {
        fetch($(this).attr("src"))
            .then(response => response.text())
            .then(text => $(this).empty().append(ad.convert(text)))
    });
}

function hideAndShowNetworkElements(view) {
    $.ajax({
        url: 'https://troom.capgemini.com/sites/vcc/devon/overview.aspx',
        dataType: 'jsonp',
        method: 'GET',
        timeout: 2000,
        error: function (hrx, textStatus, error) {
            if (textStatus === 'parsererror') {
                $('.only-internal').show(removeInvisibility(view));
                $('.only-external').hide(removeInvisibility(view));
            } else {
                $('.only-internal').hide(removeInvisibility(view));
                $('.only-external').show(removeInvisibility(view));
            }
        }
    });
}

function removeInvisibility(view) {
    view.removeClass("d-none");
}

function initTooltips(view) {
    view.find('[data-toggle="tooltip"]').tooltip();
}

function initCarousels(view) {
    view.find('.carousel').carousel();
}