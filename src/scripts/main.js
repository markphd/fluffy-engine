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

    var picker = new Pikaday({ field: $('#datepicker')[0], showDaysInNextAndPreviousMonths: true, enableSelectionDaysInNextAndPreviousMonths: true });

    $.mask.definitions['H'] = "[0-1]";
    $.mask.definitions['h'] = "[0-9]";
    $.mask.definitions['M'] = "[0-5]";
    $.mask.definitions['m'] = "[0-9]";
    $.mask.definitions['P'] = "[AaPp]";
    $.mask.definitions['p'] = "[Mm]";

    $(".edit--time").mask("Hh:Mm Pp");
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