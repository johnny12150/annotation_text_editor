$(document).ready(function () {
    var container = $('<div class="ui container"></div>');
    var textarea = $('<textarea id="text01" class="tinymce"></textarea>');
    var div_show = $('<div id="show"></div>');
    var input_getdata = $('<input type="submit" value="get data" class="ui primary button">');
    var form_editor = $('<form id="data" method="post"></form>');
    var changeLine = $('<br>');
    
    $("body").append(container);
    $(".ui.container").append(form_editor,div_show);
    $("#data").append(textarea,changeLine,input_getdata);
    
    tinymce.init({
        selector: 'textarea#text01',
        height: 50,
        menubar: false,
        plugins: [
            'advlist autolink lists link image charmap print preview anchor textcolor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table contextmenu paste code help wordcount'
        ],
        toolbar: 'insert | undo redo |  formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
        content_css: [
            '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
            '//www.tinymce.com/css/codepen.min.css'
        ]
    });
    
    $("#data").submit(function (e) {
        var context = tinymce.get("text01").getContent();
        $("#show").html(context);
        return false;
    })
});
