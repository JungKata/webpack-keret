
import './style.css';

let quotes = [];
let sorSzam = [];
let hosszusag = [];

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('idezet').addEventListener('click', async () => {
        idezetekLista();
    })

    document.getElementById('theIdezetek').addEventListener('click', async () => {
        sorSzamLista();
    })

    document.getElementById('hossz').addEventListener('click', async () => {
        hosszusagSzamitas();
    })

    document.getElementById('darabSzam').addEventListener('click', async () => {
        let kimenno = document.getElementById('szerzo').value
        darabSzamSzerzo();
    })

})

async function idezetekLista(){
let response = await fetch('quotes.json')
let result = await response.json();

quotes.textContent = ' ';
result.quotes.sort((a, b) => a.author.localeCompare(b.author))

for(let q of result.quotes){
    let li = document.createElement('li')
    li.textContent = q.quote + " , " + q.author;
    document.getElementById('quotesLista').appendChild(li);
    }
}

async function sorSzamLista(){
    let response = await fetch('quotes.json')
    let result = await response.json();
    
    sorSzam.textContent = ' '
    
    for(let k of result.quotes){
        let kiemel = k.quote;
        kiemel = kiemel.replaceAll('The', '<b>The</b>')
        kiemel = kiemel.replaceAll('the', '<b>the</b>')
        sorSzam.push(kiemel);
    }
    let szoveg = document.getElementById('sorszamLista');

    for(let s of sorSzam){
        let li = document.createElement('li')
        li.innerHTML = s;
        szoveg.appendChild(li)
        }
}  

async function hosszusagSzamitas(){
    let response = await fetch('quotes.json')
    let result = await response.json()
    let hosszDb = []

    hosszusag.textContent = ' '
    for(let h of result.quotes){
       hosszusag.push(h.quote)
    }

    const elvalaszt = hosszusag.toString().split(' ')
    for(let d of elvalaszt){
        hosszDb.push(elvalaszt.map( e => e.length))
    }

    let tomb = []
    tomb.push(hosszDb.join(','))
    document.getElementById('idezetHossz').append(tomb)
}

async function darabSzamSzerzo(db){
    document.getElementById()
    let response = await fetch('quotes.json')
    let result = await response.json();

    let szerzoDb = result.quotes.filter((s) => s.author.toLowerCase() === db.toLowerCase())

    document.getElementById('szerzo').value = szerzoDb.length
    document.getElementById('szerzo').readOnly == true;

}