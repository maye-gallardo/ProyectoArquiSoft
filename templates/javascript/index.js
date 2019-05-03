
//show contrasenia
$(document).ready(function(){
    $("#pw").focus(function(){
        this.type = "text";
    }).blur(function(){
        this.type = "contrasenia";
    })   
});

//Placeholder fixed for Internet Explorer
$(function() {
    var input = document.createElement("input");
    if(('placeholder' in input)==false) { 
        $('[placeholder]').focus(function() {
            var i = $(this);
            if(i.val() == i.attr('placeholder')) {
                i.val('').removeClass('placeholder');
                if(i.hasClass('contrasenia')) {
                    i.removeClass('contrasenia');
                    this.type='contrasenia';
                }           
            }
        }).blur(function() {
            var i = $(this);    
            if(i.val() == '' || i.val() == i.attr('placeholder')) {
                if(this.type=='contrasenia') {
                    i.addClass('contrasenia');
                    this.type='text';
                }
                i.addClass('placeholder').val(i.attr('placeholder'));
            }
        }).blur().parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                var i = $(this);
                if(i.val() == i.attr('placeholder'))
                    i.val('');
            })
        });
    }
});

