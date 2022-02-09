//issues

$(function () {
    $('#birthday').pickadate({ format: 'mmmm, d' });

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
    $('.form-check-label').on('mouseover', function () {
        $('#happy').css('color', $(this).data('color'));
        console.log($(this).data('color'));
    });
});

//make toast when no boxes are checked
$(function () {
    $('#submit').on('click', function (e) {

        var $boxes = $('input[name=balloon]:checked');

        if ($boxes.length < 1) {
            e.preventDefault();
            $('#clickBalloon').html("Please select at least 1 balloon");
            $('.toast-header').html("Error");
            $('#toast').toast({ autohide: false }).toast('show');
        }


    });

});


//check all boxes
$(function () {
    $('#checker').on('click', function (e) {
        $('.form-check-input').each(function () {
            $(this).prop('checked', true);
            $('#' + this.id + 'Img').css('visibility', 'visible')
            $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
            $('#' + this.id + 'Img').addClass('animated bounceOutUp');
        });

        

    });

    //uncheck all boxes
    $('#unchecker').on('click', function (e) {

        $('.form-check-input').each(function () {
            $(this).prop('checked', false);
            $('#' + this.id + 'Img').css('visibility', 'visible')
            $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
            $('#' + this.id + 'Img').addClass('animated bounceOutUp');
        });

    });
});

//animate "Happy Birthday" randomly
$(document).ready(
    $(function () {
        let attentionSeekers = ['bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat'];

        let num = Math.floor(Math.random() * attentionSeekers.length);

        $('#happy').addClass("animated " + attentionSeekers[num]);

    })
)