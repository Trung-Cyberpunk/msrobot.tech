
// sign
const btn_signUp = document.querySelector("#btn-header_signUp");
const wapper_sign = document.querySelector(".signUp");
const sign_close  = document.querySelector("#btn_x");
const login_a  = document.querySelector("#login_a");

btn_signUp.onclick = () => {
    wapper_sign.classList.add("active");
    wapper_login.classList.remove("active");

}
sign_close.onclick = () => {
    wapper_sign.classList.remove("active");
    

}

login_a.onclick = () =>{
    wapper_sign.classList.remove("active");
    wapper_login.classList.add("active");
}




// Login
const btn_login = document.querySelector("#btn-header_login");
const wapper_login = document.querySelector(".login");
const login_close  = document.querySelector("#btn_y");


btn_login.onclick = () => {
    wapper_login.classList.add("active");
    wapper_sign.classList.remove("active");

}
login_close.onclick = () => {
    wapper_login.classList.remove("active");
}
sign_a.onclick = () =>{
    wapper_sign.classList.add("active");
    wapper_login.classList.remove("active");
}

