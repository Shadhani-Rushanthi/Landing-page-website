var dudeID =1

function changeDude(){
    dudeID < 6 ? ++dudeID : dudeID =1;

    dudeID == 1 ? document.getElementById("6").classList.add("hide") : document.getElementById(dudeID-1).classList.add("hide");
    document.getElementById(dudeID).classList.remove("hide")

    dudeID ==1 ? document.getElementById("img6").classList.add("hide") : document.getElementById("img" + (dudeID-1)).classList.add("hide")
    document.getElementById("img" + dudeID).classList.remove("hide")
}