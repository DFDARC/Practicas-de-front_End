const fetchPokemon=()=>
{
    
    let pokeInput=pokeName.value.toLowerCase();
    const pokeId=document.getElementById("pokeID");
    const pokeTipo=document.getElementById("Tipo"); 
    const url=`https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    
    fetch(url).then((res)=>{
        //console.log(res);
        if(res.status !=200)
        {
            pokeImage("./rocket.jpg")
        }
        else
        {
            return res.json();
        }
       

        
    }).then((data)=>{
        console.log(data);
      
        let pokeImg=data.sprites.front_default;
        pokeImage(pokeImg);
       
        let pokeTipo=data.types[0].type.name;
        console.log(pokeTipo);
        dataPokemon(pokeTipo);
        let pokeAtack=data.stats[0].stat.name;
        console.log(pokeAtack);
        let pokeAtackN=data.stats[0].base_stat;
        pokeAtaque(pokeAtackN);
        console.log(pokeAtackN);
        let pokeDefense=data.stats[2].stat.name;
        console.log(pokeDefense);
        let pokeDefenseNumber=data.stats[2].base_stat;
        console.log(pokeDefenseNumber);
        dataDefense(pokeDefenseNumber);
        let pokeSpecialAtack=data.stats[3].stat.name;
        console.log(pokeSpecialAtack);
        let pokeSpecialAtackNumber=data.stats[3].base_stat;
        console.log(pokeSpecialAtackNumber);
        specialAta(pokeSpecialAtackNumber);
        let pokeSpecialDefense=data.stats[4].stat.name;
        console.log(pokeSpecialDefense);
        let pokeSpecialDefenseNumber=data.stats[4].base_stat;
        specialDef(pokeDefenseNumber);
        console.log(pokeSpecialDefenseNumber);
        let pokeSpeed=data.stats[5].stat.name;
        let pokeSpeedNumber=data.stats[5].base_stat;
        pokeVelocidad(pokeSpeedNumber);
        console.log(pokeSpeed + pokeSpecialDefenseNumber);
        let pokeMoves=data.moves[0].move.name;
        console.log(pokeMoves);
        let pokemonIDN=data.id;
        getID(pokemonIDN);
        console.log(pokemonIDN); 
    })
}
fetchPokemon();
const pokeImage=(url)=>
{
    const pokeImg=document.getElementById("pokeImg");
    pokeImg.src=url;
}
const dataPokemon=(url)=>
{
    const{estados}=url;
    const pokeId=document.getElementById("pokeID");
    pokeId.textContent= `Tipo: ${url}`;
   
}
const dataDefense=(url)=>
{
    const{stats}=url;
    const pokeDefenseNumber=document.getElementById("defense");
    pokeDefenseNumber.textContent=`Defensa: ${url}`;
}
const pokeAtaque=(url)=>
{
    const{stat}=url;
    const pokeAtackN=document.getElementById("ataque");
    pokeAtackN.textContent=`Ataque: ${url}`;
}
const pokeVelocidad=(url)=>
{
    const{static}=url;
    const pokeSpeedNumber=document.getElementById("veolocidad");
    pokeSpeedNumber.textContent=`Velocidad: ${url}`;
}
const getID=(url)=>
{
    const{static}=url;
    const pokemonIDN=document.getElementById("pokemonID");
    pokemonIDN.textContent=`ID: ${url}`;
}
const specialAta=(url)=>
{
    const{sta}=url;
    const pokeSpecialAtackNumber=document.getElementById("EspeciaAta");
    pokeSpecialAtackNumber.textContent=`Ataque especial: ${url}`;
}
const specialDef=(url)=>
{
    const{st}=url;
    const pokeSpecialDefenseNumber=document.getElementById("EspecialDef");
    pokeSpecialDefenseNumber.textContent=`Defensa especial: ${url}`;
}
//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png")