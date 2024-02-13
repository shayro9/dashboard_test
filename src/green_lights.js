const LIGHTS = 5;
const checks = []; //TODO: make it labels
const input = [false, true, true, false, false]

function updateChecks(newInput) {
    for (let i = 0; i < LIGHTS; ++i) {
        const elem = document.getElementById("check" + i.toString());
        if(newInput[i])
            elem.style.backgroundColor = "#2dfa00";
        else
            elem.style.backgroundColor = "#ea0303";
    }
}
