(function() {
    const form = document.querySelector('.container');
    const out_container = document.querySelector('.out_container');
    let usernameDom = document.querySelector('#username');
    let usernumberDom = document.querySelector('#usernumber');
    let btnDom = document.querySelector('.btn');
    let file = document.querySelector('#file');

    btnDom.addEventListener('click', () => {
        console.log(usernameDom.value);
        console.log(usernumberDom.value);
        console.log(file.files[0]);

        form.style.display = 'none';

        let reads = new FileReader();
        out_container.style.visibility = 'visible';
        reads.readAsDataURL(file.files[0]);
        reads.addEventListener('load', function (e) {
            console.log(this.result);
            document.getElementById('show').src = this.result;
        })
    })
})()