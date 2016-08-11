
        var lista = [
        ["Felipe", "https://www.facebook.com/felipe.matos.56?fref=ts"],
        ["Josivaldo", "https://www.facebook.com/castor.zinho.3?fref=ts"],
        ["Jefferson", "https://www.facebook.com/jefferson.oas?fref=ts"]
        ]; // Simulação do Banco de Dados

    ult = 0; //TODO: PEGAR ULTIMA PESSOA QUE RECEBEU MENSAGEM DO BANCO

function pegarUltimo(){
        document.getElementById("number").innerText = ult;
        document.getElementById("name").innerText =  lista[ult][0];
    };


function nextPerson(){
    if(ult < lista.length-1){
        ult ++;
        document.getElementById("number").innerText = ult;
        document.getElementById("name").innerText = lista[ult][0];
    } else {
        ult = 0;
        document.getElementById("number").innerText = ult;
        document.getElementById("name").innerText = lista[ult][0];
    }

}

function previousPerson(){

    if(ult > 0){
        ult --;
        document.getElementById("number").innerText = ult;
        document.getElementById("name").innerText = lista[ult][0];
    } else {
        ult = lista.length-1;
        document.getElementById("number").innerText = ult;
        document.getElementById("name").innerText = lista[ult][0];
    }

}

function sendMessage(){
     
    var name = lista[ult][0];
    var fullUrl = lista[ult][1];
    var linkToMessage = "messages/";
    var slice = fullUrl.split("/");
    var facebookAddress = slice[0] +"//" + slice[2] + "/";
    var profileUrl = slice[3];
    var profile = facebookAddress + linkToMessage + profileUrl;
    var msg = "Olá " + name + ", tudo bem? Neste fim de semana teremos a festa de dia dos pais! Traga sua família e venha comemorar com a gente :D";

    document.getElementById("toClipboard").innerText = msg;
                                                                                                                 
    CopyToClipboard();
    window.open(profile,'_blank');
}

        function CopyToClipboard () {
            var input = document.getElementById ("toClipboard");
            var textToClipboard = input.value;
            
            var success = true;
            if (window.clipboardData) { 
                window.clipboardData.setData ("Text", textToClipboard);
            }
            else {
                    
                var forExecElement = CreateElementForExecCommand (textToClipboard);

                    SelectContent (forExecElement);

                var supported = true;

                    
                try {
                    if (window.netscape && netscape.security) {
                        netscape.security.PrivilegeManager.enablePrivilege ("UniversalXPConnect");
                    }

                        success = document.execCommand ("copy", false, null);
                }
                catch (e) {
                    success = false;
                }
                
                   
                document.body.removeChild (forExecElement);
            }

            if (!success) {
                alert ("Seu navegador não permite acesso à Área de Transferência! \n Utilize o Google Chrome.");
            }
        }

        function CreateElementForExecCommand (textToClipboard) {
            var forExecElement = document.createElement ("div");
            forExecElement.style.position = "absolute";
            forExecElement.style.left = "-10000px";
            forExecElement.style.top = "-10000px";
            forExecElement.textContent = textToClipboard;
            document.body.appendChild (forExecElement);
            forExecElement.contentEditable = true;

            return forExecElement;
        }

        function SelectContent (element) {
            var rangeToSelect = document.createRange ();
            rangeToSelect.selectNodeContents (element);
            var selection = window.getSelection ();
            selection.removeAllRanges ();
            selection.addRange (rangeToSelect);
        }