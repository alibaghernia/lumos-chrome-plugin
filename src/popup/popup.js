let btn = document.getElementById("btn");
btn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: func,
    });
});

function func() {

    let body = document.getElementsByTagName('body')[0];
    let head = document.getElementsByTagName('head')[0];
    let style = `<style> .radial-gradient{position:fixed;top:0;left:0;height:100%;width:100%;background:#9b59b6;background:radial-gradient(circle at center,#ffffff00,#000,#000 50%)}html{cursor:url('https://i.ibb.co/zXgPnCf/cursor-hand.webp'),auto} </style>`;
    let before = `<div class="radial-gradient" style="z-index: 999999;"></div>`;

    head.innerHTML = style + head.innerHTML;
    body.innerHTML = before + body.innerHTML;


    document.onmousemove = function (event) {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;

        mouseXpercentage = Math.round(event.clientX / windowWidth * 100);
        mouseYpercentage = Math.round(event.clientY / windowHeight * 100);
        document.getElementsByClassName('radial-gradient')[0].style.background = 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #ffffff00, #000, #000 50%)';
    };

    let msg = new SpeechSynthesisUtterance();
    msg.text = "lumos";
    window.speechSynthesis.speak(msg);

}
