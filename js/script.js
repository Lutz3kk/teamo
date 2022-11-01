const btnSi = document.getElementById('si'),
    btnNo = document.getElementById('no');

document.addEventListener('click', e => {
    if (e.target === btnSi) {
        Swal.fire({
            title: 'AMORCITO TE AMOOO MUCHISIMOOOOOOO😍😍😍😍',
            confirmButtonText: 'Ven aqui amorcito😊',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: 'rgba(207, 208, 218, 1)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/img/cat.gif")
              left top
              no-repeat
            `
        }).then((result) => {
            if (result.isConfirmed) {
                let url = "https://chat.whatsapp.com/HDu5LNoBNZrHXetJpYG3AE" Ingresa amor " + "%0A";
                window.open(url, "Enviar");
            }
        })
    }
})
document.addEventListener('mouseover', e => {
    if (e.target == btnNo) {
        btnNo.style.left = `${numeroRandon(left1, left2, 'left')}%`;
        btnNo.style.top = `${numeroRandon(top1, top2, 'top')}%`;
    }
})

let left1 = 0, left2 = 0, top1 = 0, top2 = 0;

let numeroRandon = (x1, x2, direccion) => {
    let nRamdom = Math.floor(Math.random() * (+92 + 1 - +0)) + +0;
    x1 = nRamdom;

    if ((x1 - x2) <= 10 && (x1 - x2) >= 0) {
        if ((x1 + 10) > 92) {
            x1 -= 8;
        } else {
            x1 += 8;
        }
    }
    if ((x1 - x2) >= -10 && (x1 - x2) <= 0) {
        if ((x1 + 20) > 92) {
            x1 -= 20;
        } else {
            x1 += 20;
        }
    }
    if (direccion === "left") {
        left1 = x1;
        left2 = x1;
        console.log('l: ', left1, left2)
        return left1;
    }
    if (direccion === "top") {
        top1 = x1;
        top2 = x1;
        console.log('t: ', top1, top2)
        return top1;
    }
}
