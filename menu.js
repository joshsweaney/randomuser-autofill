chrome.tabs.executeScript(null, {file: "jquery.js"});
chrome.tabs.executeScript(null, {file: "main.js"});

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

});