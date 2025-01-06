"use strict";

$(function() {
    function voir() {
        $('#info').addClass('info--visible');
        $('#voile').addClass('voile--visible');
    };
    $('[name="clique"]').on('click', function() {
        Voir();
    });
    $('[name="survol"]').on('mouseenter', function() {
        Voir();
    });

    $('#voile').on('click', function() {
        $('#info,#voile').removeClass('info--visible voile--visible')
    });

});