chrome.runtime.onMessage.addListener(

    function(request, sender, sendResponse) {        

        if (request.autodetect == false) {

            var fill_by = request.fill_by;

            var titleID = request.titleID;
            var firstNameID = request.firstNameID;
            var lastNameID = request.lastNameID;
            var streetID = request.streetID;
            var cityID = request.cityID;
            var stateID = request.stateID;
            var zipID = request.zipID;
            var emailID = request.emailID;
            var userID = request.userID;
            var pass1ID = request.pass1ID;
            var pass2ID = request.pass2ID;
            var phoneID = request.phoneID;
            var cellID = request.cellID;
            var ssnID = request.ssnID;

            if (fill_by == "id") {

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

            if (fill_by == "name") {

                $("[name='" + titleID + "']").val(request.randomUserData.results[0].user.name.title);
                $("[name='" + firstNameID + "']").val(request.randomUserData.results[0].user.name.first);
                $("[name='" + lastNameID + "']").val(request.randomUserData.results[0].user.name.last);

                $("[name='" + streetID + "']").val(request.randomUserData.results[0].user.location.street);
                $("[name='" + cityID + "']").val(request.randomUserData.results[0].user.location.city);
                $("[name='" + stateID + "']").val(request.randomUserData.results[0].user.location.state);
                $("[name='" + zipID + "']").val(request.randomUserData.results[0].user.location.zip);

                $("[name='" + emailID + "']").val(request.randomUserData.results[0].user.email);
                $("[name='" + userID + "']").val(request.randomUserData.results[0].user.username);
                $("[name='" + pass1ID + "']").val(request.randomUserData.results[0].user.password);
                $("[name='" + pass2ID + "']").val(request.randomUserData.results[0].user.password);
                $("[name='" + phoneID + "']").val(request.randomUserData.results[0].user.phone);
                $("[name='" + cellID + "']").val(request.randomUserData.results[0].user.cell);
                $("[name='" + ssnID + "']").val(request.randomUserData.results[0].user.SSN);

            }

        }

    }
)