var randomUserData;

$(document).ready(function() {

    $("#mainForm").submit(function(event) {

        $.ajax({
            url: 'http://api.randomuser.me/0.3/',
            dataType: 'json',
            async: false,
            success: function(data){

                randomUserData = data;
                
            }
        });
            
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

            chrome.tabs.sendMessage(tabs[0].id,
            
                {
                    "autodetect": false,

                    "fill_by": $("#radio-group input[type='radio']:checked").val(),

                    "titleID": $("#titleID").val(),
                    "firstNameID": $("#firstNameID").val(),
                    "lastNameID": $("#lastNameID").val(),
                    "streetID": $("#streetID").val(),
                    "cityID": $("#cityID").val(),
                    "stateID": $("#stateID").val(),
                    "zipID": $("#zipID").val(),
                    "emailID": $("#emailID").val(),
                    "userID": $("#userID").val(),
                    "pass1ID": $("#pass1ID").val(),
                    "pass2ID": $("#pass2ID").val(),
                    "phoneID": $("#phoneID").val(),
                    "cellID": $("#cellID").val(),
                    "ssnID": $("#ssnID").val(),
                    "randomUserData": randomUserData
                }

            );

        });

        event.preventDefault();
    
    });

    $("#autoDetect").submit(function(event) {

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

            chrome.tabs.sendMessage(tabs[0].id,

                {
                    "autodetect": true
                }, function(response) {

                    $("#titleID").val(response.titleID);
                    $("#firstNameID").val(response.firstNameID);
                    $("#lastNameID").val(response.lastNameID);
                    $("#streetID").val(response.streetID);
                    $("#cityID").val(response.cityID);
                    $("#stateID").val(response.stateID);
                    $("#zipID").val(response.zipID);
                    $("#emailID").val(response.emailID);
                    $("#userID").val(response.userID);
                    $("#pass1ID").val(response.pass1ID);
                    $("#pass2ID").val(response.pass2ID);
                    $("#phoneID").val(response.phoneID);
                    $("#cellID").val(response.cellID);
                    $("#ssnID").val(response.ssnID);

            });

        });

        event.preventDefault();
    });

});