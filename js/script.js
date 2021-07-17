$("#btn-agregar").on("click", function(e){
    e.preventDefault();

    console.log("agregar!")

    var div = document.createElement("div");
    var p = document.createElement("p");
    var btn1 = document.createElement("button");
    btn1.classList.add("checar");
    var btn2 = document.createElement("button");
    btn2.classList.add("del");

    div.classList.add("lis");


    p.innerText = $('#newText').val();
    btn1.innerText = "check";
    btn2.innerText = "delete";

    div.append(p);
    div.append(btn1);
    div.append(" ");
    div.append(btn2);
    $("#lista").append(div)
})

$("#lista").on("click", ".checar", function(){
    $(this).parent().toggleClass("chec");
    console.log("owo");
})

$("#lista").on("click", ".del", function(){
    $(this).parent().remove();
})