window.onload = function () {
    var flag = 0;
    let info_btns = document.getElementById("btn-info-personal");   
    // let hide_text = document.getElementById("hide_text");
    info_btns.addEventListener("click", openInfoPersonal);

    function openInfoPersonal() {
        console.log(flag);
        if (flag == 0) {
            flag= 1;
            document.getElementById('info_personal').style.display = 'block';
            document.getElementById("btn-info-personal").innerHTML = 'Ocultar informacion personal';
        } else {
            flag= 0;
            document.getElementById('info_personal').style.display = 'none';
            document.getElementById("btn-info-personal").innerHTML = 'Ver info personal';

        }
    }
}