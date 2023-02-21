const character = document.getElementById('character');

async function search() {
    const response = await
fetch(`https://rickandmortyapi.com/api/character/${character.value}`)
    const data = await response.json()
    console.log(data)

    document.getElementById('name').innerHTML = data?.name;
    document.getElementById('photo').innerHTML = `<img id='characterPhoto' src=${data?.image}>`
    document.getElementById('status').innerHTML = `<strong>Status:</strong> ${data?.status}`;
    document.getElementById('species').innerHTML = `<strong>Species:</strong> ${data?.species}`;
    document.getElementById('gender').innerHTML = `<strong>Gender:</strong> ${data?.gender}`;
    document.getElementById('origin').innerHTML = `<strong>Origin:</strong> ${data?.origin.name}`;
    document.getElementById('location').innerHTML = `<strong>Location:</strong> ${data?.location.name}`;
}
