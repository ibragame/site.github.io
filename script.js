function showIngredients(cake) {
    var ingredients = '';

    switch (cake) {
        case 'chocolate':
            ingredients = 'Шоколадный бисквит, шоколадный крем, шоколадные стружки';
            break;
        case 'vanilla':
            ingredients = 'Ванильный бисквит, ванильный крем, клубника';
            break;
        case 'fruit':
            ingredients = 'Бисквит, сливки, ассорти фруктов';
            break;
        case 'blackforest':
            ingredients = 'Шоколадный бисквит, вишневый компот, сливки, шоколадные стружки';
            break;
        default:
            ingredients = 'Ингредиенты неизвестны';
            break;
    }

    document.getElementById('ingredients').innerHTML = `<h3>Ингредиенты:</h3><p>${ingredients}</p>`;
}
