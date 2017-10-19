$( document ).ready(function() {
    $(".button-collapse").sideNav({
        onOpen: function(el) {
          $('.main--content').removeClass("close--menu").addClass("open--menu");
        },
        onClose: function(el) {
          $('.main--content').removeClass("open--menu").addClass("close--menu");
        }
    });

    $('select').material_select();
});

$( document ).on('focus.autoExpand', 'textarea.autoExpand', function(){
    var savedValue = this.value;
    this.value = '';
    this.baseScrollHeight = this.scrollHeight;
    this.value = savedValue;
}).on('input.autoExpand', 'textarea.autoExpand', function(){
    var minRows = this.getAttribute('data-min-rows')|0, rows;
    this.rows = minRows;
    console.log(this.scrollHeight, "scroll height");
    console.log(this.baseScrollHeight, "base scroll height");
    rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 22);
    this.rows = minRows + rows;
});