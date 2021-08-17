var now = new Date().getDate();

const ele = document.getElementById('countdown');

function update(){
    const minutes = Math.floor(now / (24 *60 * 60))
    now--;
}