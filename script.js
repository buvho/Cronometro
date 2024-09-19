let cronometro = document.getElementById("tempo");
let started = false
let milisegundos = 0
let segundos = 0
let minutos = 0
let horas = 0

function start()
{
tick();
tack = setInterval(tick,10);
}

function stop()
{
clearInterval(tack);
}

function reset()
{
    milisegundos = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    display()
} 

function tick()
{
milisegundos += 1;
if (milisegundos > 99){
    segundos++;
    milisegundos = 0;
}
if (segundos > 59)
{
    minutos++;
    segundos = 0;
}
if (minutos > 59)
{
    minutos = 0;
    horas++;
}
display()
}

function display()
{
cronometro.textContent = `${String(horas).padStart(2,"0")}:${String(minutos).padStart(2,"0")}:${String(segundos).padStart(2,"0")}:${String(milisegundos).padStart(2,"0")}`;
}