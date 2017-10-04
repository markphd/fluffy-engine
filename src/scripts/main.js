$( document ).ready(function() {
    $("#menu--sidebar").sideNav();
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