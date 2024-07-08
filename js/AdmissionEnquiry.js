$(document).ready(function (e) {
    $("#frmContactUs").on('submit', (function (e) {
        e.preventDefault();
        $.ajax({
            url: "../controller/frmSendMailAdmissionEnq.php",
            type: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            beforeSend: function (msg) {
                return chk1();
            },
            success: function (data) {
                if (data == "OK") {
                    alert("Thank you for admission enquiry. We will contact soon.");
                    $('#frmContactUs')[0].reset();
                }
                else {
                    $("#errMsgBox").html(data);
                }

            },
            error: function () {

            }
        });
    }));


});

function chk1() {
    //alert("cdcdfdfd");
    if (document.frmContactUs.txtName.value == "") {
        document.getElementById("errMsgBox").innerHTML = "Enter your name.";
        document.frmContactUs.txtName.focus();
        return false;
    }
    if (document.frmContactUs.txtContact.value == "") {
        document.getElementById("errMsgBox").innerHTML = "Enter contact number.";
        document.frmContactUs.txtContact.focus();
        return false;
    }
    if (document.frmContactUs.txtMail.value == "") {
        document.getElementById("errMsgBox").innerHTML = "Enter mail Id.";
        document.frmContactUs.txtMail.focus();
        return false;
    }
    if (document.frmContactUs.txtCourse.value == "") {
        document.getElementById("errMsgBox").innerHTML = "Select a course.";
        document.frmContactUs.txtCourse.focus();
        return false;
    }
    if (document.frmContactUs.txtSchool.value == "") {
        document.getElementById("errMsgBox").innerHTML = "Enter previous school/college name and branch.";
        document.frmContactUs.txtSchool.focus();
        return false;
    }
    return true;
}	