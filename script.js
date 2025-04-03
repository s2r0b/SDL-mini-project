document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("search-btn").addEventListener("click", function() {
        let query = document.getElementById("search-input").value;
        fetch(`search.php?q=${query}`)
            .then(response => response.json())
            .then(data => {
                let results = document.getElementById("results");
                results.innerHTML = "";
                data.forEach(item => {
                    results.innerHTML += `
                        <div class='card col-md-3'>
                            <img src='uploads/${item.image}' alt='${item.item_name}'>
                            <h5>${item.item_name}</h5>
                            <p>${item.description}</p>
                            <p>Reward: $${item.reward}</p>
                        </div>`;
                });
            });
    });
});
