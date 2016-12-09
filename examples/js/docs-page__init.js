/* Docs page Javascript file */
$(document).ready(function() {
    $('#example').click(function(e) {
        e.preventDefault();
        $('.docs-page__code-markup').hide();
        $('.docs-page__code-example').show();        
        $(this).addClass('active');        
        $(this).parent().find('#markup').removeClass('active');
    });
    $('#markup').click(function(e) {
        e.preventDefault();
        $('.docs-page__code-markup').show();
        $('.docs-page__code-example').hide();
        $(this).addClass('active');
        $(this).parent().find('#example').removeClass('active');
    });
}); /*end doc ready */    