const feedback_icon = document.querySelector(".fb_icon")

const feedback_img = document.querySelector("#feedback-icon");

const remove_fb = document.querySelector("#btn_fb");

feedback_img.onclick = () => {
    feedback_icon.classList.add("run");    
    backgr.classList.add("opacity");
}

remove_fb.onclick = () => {
    feedback_icon.classList.remove("run");    
    backgr.classList.remove("opacity");
}