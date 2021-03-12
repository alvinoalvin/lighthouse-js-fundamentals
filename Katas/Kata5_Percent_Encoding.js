const urlEncode = function (text) {
    text = text.trim();
    
    let rtnString = "";
    for (char of text) {
        if (char == " ") {
            rtnString += "%20"
        }
        else {
            rtnString += char
        }
    }
    return rtnString
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
