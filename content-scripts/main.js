chrome.runtime.onMessage.addListener(

    function(request, sender, sendResponse) {        

        if (request.autodetect == false) {

            titleID = request.titleID;
            firstNameID = request.firstNameID;
            lastNameID = request.lastNameID;
            streetID = request.streetID;
            cityID = request.cityID;
            stateID = request.stateID;
            zipID = request.zipID;
            emailID = request.emailID;
            userID = request.userID;
            pass1ID = request.pass1ID;
            pass2ID = request.pass2ID;
            phoneID = request.phoneID;
            cellID = request.cellID;
            ssnID = request.ssnID;

            $("#" + titleID).val(request.randomUserData.results[0].user.name.title);
            $("#" + firstNameID).val(request.randomUserData.results[0].user.name.first);
            $("#" + lastNameID).val(request.randomUserData.results[0].user.name.last);

            $("#" + streetID).val(request.randomUserData.results[0].user.location.street);
            $("#" + cityID).val(request.randomUserData.results[0].user.location.city);
            $("#" + stateID).val(request.randomUserData.results[0].user.location.state);
            $("#" + zipID).val(request.randomUserData.results[0].user.location.zip);

            $("#" + emailID).val(request.randomUserData.results[0].user.email);
            $("#" + userID).val(request.randomUserData.results[0].user.username);
            $("#" + pass1ID).val(request.randomUserData.results[0].user.password);
            $("#" + pass2ID).val(request.randomUserData.results[0].user.password);
            $("#" + phoneID).val(request.randomUserData.results[0].user.phone);
            $("#" + cellID).val(request.randomUserData.results[0].user.cell);
            $("#" + ssnID).val(request.randomUserData.results[0].user.SSN);

        }

    }
)