let currentBreed = "";
let currentSubBreed = "";

const breedSelect = document.getElementById('breedSelect');
const subBreedContainer = document.getElementById('subBreedContainer');
const subBreedSelect = document.getElementById('subBreedSelect');
const resultDiv = document.getElementById('result');
const detailsDiv = document.getElementById('details');
const detailsBtn = document.getElementById('detailsBtn');
const anotherBtn = document.getElementById('anotherBtn');
const searchBtn = document.getElementById('searchBtn');

// Optional static breed info
const breedInfo = {
    labrador: { origin: "Canada", size: "Medium to Large", temperament: "Friendly, Active, Outgoing" },
    german: { origin: "Germany", size: "Large", temperament: "Intelligent, Loyal, Courageous" },
    bulldog: { origin: "England", size: "Medium", temperament: "Docile, Willful, Friendly" },
    beagle: { origin: "England", size: "Small to Medium", temperament: "Curious, Friendly, Merry" },
    pug: { origin: "China", size: "Small", temperament: "Charming, Mischievous, Loving" }
};

// Populate breed select from EJS variable
function populateBreeds() {
    const breeds = Object.keys(allBreeds);
    breedSelect.innerHTML = "";
    breeds.forEach(breed => {
        const option = document.createElement("option");
        option.value = breed;
        option.textContent = breed.charAt(0).toUpperCase() + breed.slice(1);
        breedSelect.appendChild(option);
    });

    breedSelect.addEventListener("change", () => {
        const subBreeds = allBreeds[breedSelect.value];
        subBreedSelect.innerHTML = "";
        if (subBreeds && subBreeds.length > 0) {
            subBreeds.forEach(sub => {
                const opt = document.createElement("option");
                opt.value = sub;
                opt.textContent = sub.charAt(0).toUpperCase() + sub.slice(1);
                subBreedSelect.appendChild(opt);
            });
            subBreedContainer.style.display = "block";
        } else {
            subBreedContainer.style.display = "none";
        }
    });
}

// Fetch dog image
async function fetchDogImage(breed, sub) {
    const url = sub ? `https://dog.ceo/api/breed/${breed}/${sub}/images/random`
                    : `https://dog.ceo/api/breed/${breed}/images/random`;
    const res = await fetch(url);
    const data = await res.json();
    return data.message;
}

// Search button
searchBtn.addEventListener('click', async () => {
    const breed = breedSelect.value;
    const sub = subBreedSelect.style.display !== "none" ? subBreedSelect.value : "";
    currentBreed = breed;
    currentSubBreed = sub;

    resultDiv.innerHTML = '<div class="spinner"></div>';
    detailsDiv.style.display = "none";
    detailsDiv.innerHTML = "";
    detailsBtn.style.display = "none";
    anotherBtn.style.display = "none";

    try {
        const imageUrl = await fetchDogImage(breed, sub);
        resultDiv.innerHTML = `<h2>${breed.charAt(0).toUpperCase() + breed.slice(1)} ${sub ? "- " + sub : ""}</h2>
                               <img src="${imageUrl}" id="dogImage"/>`;
        detailsBtn.style.display = "inline-block";
        anotherBtn.style.display = "inline-block";
    } catch (err) {
        resultDiv.innerHTML = '<p style="color:red;">Failed to load image.</p>';
    }
});

// Load another image
anotherBtn.addEventListener('click', async () => {
    if (!currentBreed) return;
    const imgEl = document.getElementById('dogImage');
    if (!imgEl) return;

    imgEl.src = "";
    try {
        const imageUrl = await fetchDogImage(currentBreed, currentSubBreed);
        imgEl.src = imageUrl;
    } catch (err) {
        alert("Failed to load another image");
    }
});

// Show details
detailsBtn.addEventListener('click', () => {
    const info = breedInfo[currentBreed.toLowerCase()];
    if (info) {
        detailsDiv.innerHTML = `<strong>Origin:</strong> ${info.origin}<br>
                                <strong>Size:</strong> ${info.size}<br>
                                <strong>Temperament:</strong> ${info.temperament}`;
    } else {
        detailsDiv.innerHTML = "<em>Information not available for this breed.</em>";
    }
    detailsDiv.style.display = "block";
});

window.onload = populateBreeds;