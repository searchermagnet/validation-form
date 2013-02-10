/* Created by jankoatwarpspeed.com */

(function($) {
    $.fn.formToWizard = function(options) {
        options = $.extend({  
            submitButton: "submit" 
        }, options); 
        
        var element = this;

        var steps = $(element).find("fieldset");
        var count = steps.size();
        var submitButtonName = "#" + options.submitButton;
        $(submitButtonName).hide();

        // 2
        $(element).before("<ul id='steps'></ul>");

        steps.each(function(i) {
            $(this).wrap("<div id='step" + i + "'></div>");
            $(this).append("<p id='step" + i + "commands'></p>");

            // 2
            var name = $(this).find("legend").html();
            $("#steps").append("<li id='stepDesc" + i + "'>Step " + (i + 1) + "<span>" + name + "</span></li>");

            if (i == 0) {
                createNextButton(i);
            }
            else if (i == count - 1) {
                $("#step" + i).hide();
                createPrevButton(i);
            }
            else {
                $("#step" + i).hide();
                createPrevButton(i);
                createNextButton(i);
            }
        });

        function createPrevButton(i) {
            var stepName = "step" + i;
            $("#" + stepName + "commands").append("<a href='#' id='" + stepName + "Prev' class='prev'>< Back</a>");

            $("#" + stepName + "Prev").bind("click", function(e) {
                $("#" + stepName).hide();
                $("#step" + (i - 1)).show();
                $(submitButtonName).hide();
                selectStep(i - 1);
            });
        }

        function createNextButton(i) {
            var stepName = "step" + i;
            // consol
            $("#" + stepName + "commands").append("<a href='#' id='" + stepName + "Next' class='next'>Calculate Payment &raquo</a>");
            $('#submit').click(function () {
                $("#LeadForm").validate(opt);
            });
            $("#" + stepName + "Next").bind("click", function(e) {
                console.log('next was clicked')
                $("#SignupForm").validate(opt);  //validate whole form
                var fsID = $(this).closest('fieldset').attr('id');        
                $('#' + fsID + ' :input').each(function (index, element) {
                    //iterate through elments in fieldset
                    var eleid = $(element).attr('id');
                    console.log(eleid)
                    if (eleid !== 'next' && eleid !== 'submit') {
                        var valid = $("#SignupForm").validate().element( "#"+eleid );
                        if (valid) {
                            $("#" + stepName).hide();
                            // console.log(i)
                            // console.log(count)
                            $("#step" + (i + 1)).show();
                            if (i + 2 == count)
                                $(submitButtonName).show();
                            selectStep(i + 1);
                        }
                    }
                });

            });
    
            return false;
        }
            //     console.log('clicked')
            //     $("#" + stepName).hide();
            //     $("#step" + (i + 1)).show();
            //     if (i + 2 == count)
            //         $(submmitButtonName).show();
            //     selectStep(i + 1);
            // });
        

        function selectStep(i) {
            $("#steps li").removeClass("current");
            $("#stepDesc" + i).addClass("current");
        }

    }
})(jQuery); 