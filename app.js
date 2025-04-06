async function fetchData() {
    const loadingElement = document.getElementById('loading');
    const categoryElement = document.getElementById('category');
    const answerElement = document.getElementById('answer');
    const cluesElement = document.getElementById('clues');
    try {
        const response = await fetch("https://chronic-tansy-viniciusdsouza-labs-254a6bc6.koyeb.app/get-card")

        loadingElement.style.display = 'block';

        if (!response.ok) throw new Error("Erro ao buscar dados");

        const data = await response.json();

        categoryElement.innerText = data.category;
        answerElement.innerText = data.name;
        cluesElement.innerHTML = '';

        data.clues.forEach((clue, i) => {
            const p = document.createElement('p');
            p.innerText = `${i + 1} - ${clue}`;
            cluesElement.append(p);
        });
    } catch (error) {
        console.error(error);
    } finally {
        loadingElement.style.display = 'none';
    }
}

fetchData();