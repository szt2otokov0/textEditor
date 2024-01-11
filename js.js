function $(id){
    return document.querySelector('#' + id)
}


window.onload = () => {
    $('openbutton').addEventListener("click",() => {
        let filePath = $("filepicker").files[0];
        if(!filePath) {
            alert("Nincs fájl kiválasztva!")
            return;
        }
        $("openwindow").style = "visibility: none;"
        let reader = new FileReader();
        reader.onloadend = () => {
            $("textfield").textContent = reader.result;
        }
        reader.readAsText(filePath);
    })
    $("savebutton").addEventListener("click",() => {
        let fileUrl = URL.createObjectURL(new Blob([$("textfield").textContent],{type:"text/plain"}))
        let a = document.createElement('a');
        a.href = fileUrl;
        let fileName = $('filepicker').value.toString();
        a.download = fileName.split('\\')[2]
        a.click();
    })
}