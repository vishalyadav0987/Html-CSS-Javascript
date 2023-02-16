function abc() {
    try {// This function is not exsist
        document.write(sayhello());
        document.write("This code/line is not exicuted because of run time error");
    }
    //When an exceptation occurs, the control is transferred to th catch block catch(e)
    catch (e) {// ALSO USE "finally block"
        document.write("Description=" + e.description + "<br/>");
        document.write("Message=" + e.message + "<br/>");
        document.write("Stack=" + e.stack + "<br/><br/>");
    }
    finally {
        document.write("This code/line is not exicuted because of run time error");
    }

}
function divide() {
    var numerator = Number(prompt("ENTER YOUR NO : "))
    var denominator = Number(prompt("ENTER YOUR NO : "))
    try {
        if (denominator == 0) {
            throw {
                error: "Divide by 0 is error",
                message: "Denominator cannot zero"
            };
        }
        else {
            alert("Result=" + (numerator / denominator))
        }
    }

        catch (e) 
        {
        document.write(e.error + "<br/>");
        document.write(e.message + "<br/><br/>");
    }
}



