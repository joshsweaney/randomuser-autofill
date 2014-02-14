chrome.runtime.onMessage.addListener(

    function(request, sender, sendResponse) {

        if (request.autodetect == true) {

            var titleID = "";
            var firstNameID = "";
            var lastNameID = "";
            var streetID = "";
            var cityID = "";
            var stateID = "";
            var zipID = "";
            var emailID = "";
            var userID = "";
            var pass1ID = "";
            var pass2ID = "";
            var phoneID = "";
            var cellID = "";
            var ssnID = "";

            $(":input").each(function() {

                if (!$(this).attr('id')) {

                    return true;

                }

                if ( $(this).attr('id').match(/title/i)) {

                    titleID = $(this).attr('id');

                }

                if ( $(this).attr('id').match(/first/i)) {

                    firstNameID = $(this).attr('id');

                }

                if ( $(this).attr('id').match(/last/i)) {

                    lastNameID = $(this).attr('id');

                }

                if ( $(this).attr('id').match(/street/i)) {

                    streetID = $(this).attr('id');

                }

                if ( $(this).attr('id').match(/city/i)) {

                    cityID = $(this).attr('id');

                }

                if ( $(this).attr('id').match(/state/i)) {

                    stateID = $(this).attr('id');

                }

                if ( $(this).attr('id').match(/zip/i)) {

                    zipID = $(this).attr('id');

                }

                if ( $(this).attr('id').match(/email/i)) {

                    emailID = $(this).attr('id');

                }

                if ( $(this).attr('id').match(/user/i)) {

                    userID = $(this).attr('id');

                }

                if ( $(this).attr('id').match(/pass/i)) {

                    pass1ID = $(this).attr('id');
                    pass2ID = $(this).attr('id');

                }

                if ( $(this).attr('id').match(/phone/i)) {

                    phoneID = $(this).attr('id');

                }

                if ( $(this).attr('id').match(/cell/i)) {

                    cellID = $(this).attr('id');

                }

                if ( $(this).attr('id').match(/ssn/i)) {

                    ssnID = $(this).attr('id');

                }

            });

            sendResponse({

                "titleID": titleID,
                "firstNameID": firstNameID,
                "lastNameID": lastNameID,
                "streetID": streetID,
                "cityID": cityID,
                "stateID": stateID,
                "zipID": zipID,
                "emailID": emailID,
                "userID": userID,
                "pass1ID": pass1ID,
                "pass2ID": pass2ID,
                "phoneID": phoneID,
                "cellID": cellID,
                "ssnID": ssnID

            });

        }

});
