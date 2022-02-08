//issues
//1. line 77: sometimes the attention seeker is nothing
//2. can't figure out how to change placement of toast
//3. line 54,65: tried using event listener in multiple places but can't get balloons to show up/leave
//4. line 25: don't know what I'm doing wrong for title color change

$(function () {
    $('#birthday').pickadate({format: 'mmmm, d'});

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
            $('#' + this.id + 'Img').addClass('animated bounceOutUp');
    });

    // change title color when hovering over a choice
    // $('.form-check-input').onmouseover(function () {
    //     $('#happy').addClass("text-" + $(this).data('color'));
    // });
});

//make toast when no boxes are checked
$(function () {
    $('#submit').on('click', function (e) {

        var $boxes = $('input[name=balloon]:checked');

        if ($boxes.length < 1) {
            e.preventDefault();
            $('#clickBalloon').html("Please select at least 1 balloon");
            $('.toast-header').html("Error");
            $('#toast').toast({autohide: false}).toast('show');
        }

        //get rid of error if more than one is checked
        // else if($boxes.length > 1){
        //     $('#toast').toast({ autohide: false }).toast('hide');
        // }

    });

});


//check all boxes
$(function () {
    $('#checker').on('click', function (e) {

        $('.form-check-input').each(function () {
            $(this).prop('checked', true);
        });

    });
});

//uncheck all boxes
$(function () {
    $('#unchecker').on('click', function (e) {

        $('.form-check-input').each(function () {
            $(this).prop('checked', false);
        });

    });
});

//animate "Happy Birthday" randomly
$(document).ready(
    $(function () {
        let attentionSeekers = ['bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat'];

        let num = Math.floor(Math.random() * attentionSeekers.length) - 1;

        $('#happy').addClass("animated " + attentionSeekers[num]);
    })
)