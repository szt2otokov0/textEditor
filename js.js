function $(id){
    return document.querySelector('#' + id)
}


window.onload = () => {
    $('openwindowbutton').addEventListener('click',() => {
        $('openwindow').showModal();
        $("openwindow").classList.add("window-open")
        $("textfield").disabled = true;
    })
    $('openbutton').addEventListener("click",() => {
        $("textfield").disabled = false;
        let filePath = $("filepicker").files[0];
        if(!filePath) {
            alert("Nincs fájl kiválasztva!")
            return;
        }
        $("openwindow").close()
        $("openwindow").classList.remove("window-open")
        let reader = new FileReader();
        reader.onloadend = () => {
            $("textfield").value = reader.result;
        }
        reader.readAsText(filePath);
    })
    $("closebutton").addEventListener("click",() => {
        $("textfield").value = "";
    })
    $('savewindowbutton').addEventListener("click",() => {
        $("savewindow").showModal()
        $("savewindow").classList.add("window-open")
        $("textfield").disabled = true;
    })
    $("savebutton").addEventListener("click",() => {
        let fileUrl = URL.createObjectURL(new Blob([$("textfield").value],{type:"text/plain"}))
        let a = document.createElement('a');
        a.href = fileUrl;
        let fileName = $('filepicker').value.toString();
        let saveFileName = fileName.split('\\')[2];
        a.download = !saveFileName ? "text.txt" : saveFileName
        a.click();
        $("savewindow").close()
        $("savewindow").classList.remove("window-open")
        $('textfield').disabled = false;
    })
}