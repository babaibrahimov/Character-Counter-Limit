var myText = document.getElementById('mytext');
var result = document.querySelector('.result');
var textArea = document.querySelector('.text-area');
var copy = document.getElementById('copy');
var limit = 150;
result.textContent = 0 + "/" + limit


myText.addEventListener('input', function() {
    var textlength = myText.value.length;
    result.textContent  = textlength + "/" + limit

    if(textlength > limit) {
        textArea.style.borderColor = "red"
        result.style.color = "red"
    } else {
        textArea.style.borderColor = "#333"
        result.style.color = "gray"
    }
})


copy.addEventListener('click', () => {
    var copyText = myText;
    var text1 = myText.value
    if(text1 != ""){
        copyText.select()
        copyText.setSelectionRange(0, 9999)
        document.execCommand('copy')
        copy.classList.remove("ri-file-copy-line")
        copy.classList.add("ri-file-copy-fill")
        // rgbInp.value = "Copied!"
        setTimeout(() => copy.classList.remove("ri-file-copy-fill"), 1000)
        setTimeout(() => copy.classList.add("ri-file-copy-line"), 1000)
    } else {
        alert("It is empty broo. There are not anything for copy!")
    }
})