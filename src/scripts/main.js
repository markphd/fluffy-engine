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

    $('#timepicker').timepicker({ 'scrollDefault': 'now' });

    $('.edit--assignee').material_chip({
        autocompleteOptions: {
          data: {
            'Kyle Robinson': 'dist/images/user-01.jpg',
            'Rebecca Smith': 'dist/images/user-02.jpg',
            'Aaron Lloyd': 'dist/images/user-03.jpg'
          },
          limit: Infinity,
          minLength: 1
        }
    });

    $('.chips').on('chip.add', function(e, chip){
        var data = {
            'Kyle Robinson': 'dist/images/user-01.jpg',
            'Rebecca Smith': 'dist/images/user-02.jpg',
            'Aaron Lloyd': 'dist/images/user-03.jpg'
          }
        var key = chip.tag;
        // $(this).children('.chip').last().text(key.split(' ')[0]); // uncomment if first name only
        $(this).children('.chip').last().append('<img src="' + data[key] + '">');
    });

    $('#label--group-select').on('change', function(e) {
        var team = e.target.value;

        switch(team) {
            case 'Apple Design':
                $('.label--group').css({ backgroundImage: "url(dist/images/team-01.jpg)"})
                break;
            case 'Project Hackers':
                $('.label--group').css({ backgroundImage: "url(dist/images/team-02.png)"})
                break;
            case 'Evron':
                $('.label--group').css({ backgroundImage: "url(dist/images/team-03.png)"})
                break;
            case 'Google Dev Team':
                $('.label--group').css({ backgroundImage: "url(dist/images/team-04.png)"})
                break;
            default:
                console.log('Good!')
        }
    })
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