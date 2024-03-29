function addCard(pokemonName,imgSrc,hp,att,def,spcAtt,spcDef,speed,games,sprites){

    //Capitalize first letter of pokemon name cuz it was annoying me that it wasnt the same as your photo.

    function capitalizeFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1);
    }
    let name = capitalizeFirstLetter(pokemonName)

    //Main li
    function createMainLi(){
        const cardLiEl = document.createElement('li')
        cardLiEl.setAttribute('class','card')
        document.querySelector('ul.cards').append(cardLiEl)
        return cardLiEl
    }
    const cardLiEl = createMainLi()
    //H2
    function createH2El(name){
    const h2El = document.createElement('h2')
    h2El.setAttribute('class','card--title')
    h2El.textContent= name
    cardLiEl.append(h2El)
    }
    createH2El(name)
    //Img
    const imgEl = document.createElement('img')
    imgEl.setAttribute('width',256)
    imgEl.setAttribute('class','card--img')
    imgEl.setAttribute('src',imgSrc)
    cardLiEl.append(imgEl)
    let imgNr = 0
    setInterval(() => {
        switch (imgNr) {
            case 0:
                imgEl.setAttribute('src', sprites.back_default)
                imgNr++
                break;
            case 1:
                imgEl.setAttribute('src', sprites.back_shiny)
                imgNr++
                break;
            case 2:
                imgEl.setAttribute('src', sprites.front_default)
                imgNr++
                break;
            case 3:
                imgEl.setAttribute('src', sprites.front_shiny)
                imgNr++
                break;
            case 4:
                imgEl.setAttribute('src', imgSrc)
                imgNr=0
                break;
            default:
                break;
        }
    }, 2000);
    //ul
    const ulEl = document.createElement('ul')
    ulEl.setAttribute('class','card--text')
    cardLiEl.append(ulEl)
    //Multiple li
    const liHp = document.createElement('li')
    liHp.textContent= `HP: ${hp}`
    ulEl.append(liHp)
    const liAtt = document.createElement('li')
    liAtt.textContent= `ATTACK: ${att}`
    ulEl.append(liAtt)
    const liDef = document.createElement('li')
    liDef.textContent= `DEFENSE: ${def}`
    ulEl.append(liDef)
    const liSpcAtt = document.createElement('li')
    liSpcAtt.textContent= `SPECIAL ATTACK: ${spcAtt}`
    ulEl.append(liSpcAtt)
    const liSpcDef = document.createElement('li')
    liSpcDef.textContent=`SPECIAL DEFENSE: ${spcDef}`
    ulEl.append(liSpcDef)
    const liSpeed = document.createElement('li')
    liSpeed.textContent=`SPEED: ${speed}`
    ulEl.append(liSpeed)
    const liGames = document.createElement('li')
    liGames.textContent=`Games: ${games}`
    ulEl.append(liGames)

}

for(let element of data){
    let gamesText = ''
    for(let game of element.game_indices){
        gamesText += game.version.name + ", "
    }
    addCard(element.name,element.sprites.other['official-artwork'].front_default,element.stats[0].base_stat,element.stats[1].base_stat,element.stats[2].base_stat,element.stats[3].base_stat,element.stats[4].base_stat,element.stats[5].base_stat,gamesText,element.sprites)
}