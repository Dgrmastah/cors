function getPersonaje() {
    const nombredelPersonajeInput = document.getElementById('nombredelPersonaje');
    const personajeInfo = document.getElementById('personajeInfo');

    const nombredelPersonaje = nombredelPersonajeInput.value.toLocaleLowerCase();

    fetch(`http://localhost:3000/characters/${nombredelPersonaje}`)
    .then(response => response.json())
    .then(data => {
        if (data) {
            personajeInfo.innerHTML = `
                <h2>${data.name}</h2>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Status:</strong> ${data.status}</p>
                <p><strong>Species:</strong> ${data.species}</p>
                <p><strong>Gender:</strong> ${data.gender}</p>
                <p><strong>Origin:</strong> ${data.origin.name}</p>
                <img src="${data.image}" alt="${data.name}" />
            `;
        } else {
            personajeInfo.innerHTML = `<p>Personaje no encontrado.</p>`;
        }
    })
    .catch(error => {
        personajeInfo.innerHTML = '<p>Error al obtener el personaje.</p>';
        console.log(error);
    });
}
