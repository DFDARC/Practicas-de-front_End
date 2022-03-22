const pokeStats=document.querySelector('data-poke-stats')

const searchPokemon=event=>
{
    event.preventDefault();
    const{value}=event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then(data=>data.json())
    .then(response=>renderPokemonData(response));
    
}
const renderPokemonData= data =>
{
    const{stats}=data;
    renderPokemonStats(stats);
}
const renderPokemonStats=stats=>
{
    pokeStats.innerHTML='';
    stats.forEach(stat=>{
        const stateElement=document.createElement("div");
        const stateElementName=document.createElement("div");
        const stateElementAmmount=document.createElement("div");
        stateElementName.textContent=stat.stat.name;
        stateElementAmmount.textContent=stat.base_stat;
        stateElement.appendChild(stateElementName);
        stateElement.appendChild(stateElementAmmount);
        pokeStats.appendChild(stateElement);
    })
}