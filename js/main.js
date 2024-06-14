let checkBtn = document.querySelector("#check-btn");
let textAbove = document.querySelector("#text-above");
let palindrome;

checkBtn.addEventListener("click", function() {
    if (document.querySelector("#input").value == "") {
        alert("Please input a value");
    }
    else {
        palindrome = document.querySelector("#input").value;

        palindrome = palindrome.replace(/\s/g, '');
        palindrome = palindrome.replace(/[^\w\s]/gi, ''); //Removeing all punctuation, spaces and symbols
        palindrome = palindrome.toLowerCase();

        let reversedPalindrome = "";
        for (let i = palindrome.length - 1; i >= 0; i--) {
            reversedPalindrome += palindrome[i]; 
        }

        let checkPal = true;
        for (let i = 0; i < palindrome.length; i++) {
            if (palindrome[i] != reversedPalindrome[i]) {
                checkPal = false;
                break;
            }
        }

        if (checkPal == true) {
            textAbove.innerHTML =  "\"" + document.querySelector("#input").value + "\"" + " is a palindrome.";
        }
        else {
            textAbove.innerHTML = "\"" + document.querySelector("#input").value + "\"" + " is not a palindrome.";
        }
    }

});




    