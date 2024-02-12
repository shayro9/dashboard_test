const LIGHTS = 5;
const checks = [];
const input = [false, true, true, false, false]
for (let i = 0; i < LIGHTS; ++i) {
    const elem = document.getElementById("check" + i.toString());
    if(input[i])
        elem.style.backgroundColor = "#2dfa00";
    else
        elem.style.backgroundColor = "#ea0303";
}
