$(document).ready( function() {

    // $.getScript('js/jquery-cookie/jquery.cookie.js', function(data, textStatus, jqXHR) {
    //     console.log(data); //data returned
    //     console.log(textStatus); //success
    //     console.log(jqXHR); //200
    //     console.log('Load was performed.');
    // });
    //validates max-length in real time
    $("input").keyup(function() {
    switch (this.id) {
        case 'A_Zip':
            $(this).attr('maxlength', '5')
            if (this.value.length >= 5) {
                $(this).next().focus()
                this.max
            }
            break       
        case 'C_WorkPhone':
        case 'C_HomePhone':
            $(this).attr('maxlength', '10')
            if (this.value.length >= 10) {
                $(this).next().focus()
                this.max
            }
            break                
        case 'C_WorkPhone1':
        case 'C_HomePhone1':
            $(this).attr('maxlength', '3')
            if (this.value.length >= 3) {
                $(this).next().focus()
                this.max
            }
            break                
        case 'C_WorkPhone2':
        case 'C_HomePhone2':
            $(this).attr('maxlength', '3')
            if (this.value.length >= 3) {
                $(this).next().focus()
                this.max
            }
            break                
        case 'C_WorkPhone3':
        case 'C_HomePhone3':
            $(this).attr('maxlength', '4')
            if (this.value.length >= 4) {
                $(this).next().focus()
                this.max
            }
            break                
        }
    });

            

    //fills out forms based on cookies
    $.each($.cookie(), function (index, item) {
         $('input').each(function() {
            if ($(this).attr('name') == index)
               // $('input').value = item
                $('input[name=' + index + ']').val(item)
        });
    });
    $("input").keyup(function() {
        $.cookie($(this).attr('name'), this.value, { path: '/' })   
    });


    // any fields you wish to ignore, just stick a 'class=ignore' in the input type HTML
    $.validator.setDefaults({ignore: ".ignore"});
    // $('#submit').click(function () {
    //     $("#LeadForm").validate(opt)
    // });
    // $('#next').click(function () {
    //     //console.log('next was clicked')
    //     $("#LeadForm").validate(opt);  //validate whole form
    //     var fsID = $(this).closest('fieldset').attr('id');        
    //     $('#' + fsID + ' :input').each(function (index, element) {
    //         //iterate through elments in fieldset
    //         var eleid = $(element).attr('id');
    //         if (eleid !== 'next' && eleid !== 'submit') {
    //             var valid = $("#LeadForm").validate().element( "#"+eleid );
    //         }
    //     });
    //     return false;
    // });
});    