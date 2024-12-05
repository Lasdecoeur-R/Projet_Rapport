async function loadComponent(componentId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        document.getElementById(componentId).innerHTML = data;
    } catch (error) {
        console.error("Erreur lors du chargement du composant : ", error);
    }
}

loadComponent('navbar', 'components/navbar.html');
loadComponent('footer', 'components/footer.html');
