const searchInput = document.getElementById('search-bar');
const suggestionsContainer = document.getElementById('suggestions-container');
const cityNames = [
  'Adana',
  'Adıyaman',
  'Afyonkarahisar',
  'Ağrı',
  'Amasya',
  'Ankara',
  'Antalya',
  'Artvin',
  'Aydın',
  'Balıkesir',
  'Bilecik',
  'Bingöl',
  'Bitlis',
  'Bolu',
  'Burdur',
  'Bursa',
  'Çanakkale',
  'Çankırı',
  'Çorum',
  'Denizli',
  'Diyarbakır',
  'Edirne',
  'Elazığ',
  'Erzincan',
  'Erzurum',
  'Eskişehir',
  'Gaziantep',
  'Giresun',
  'Gümüşhane',
  'Hakkâri',
  'Hatay',
  'Isparta',
  'İçel (Mersin)',
  'İstanbul',
  'İzmir',
  'Kars',
  'Kastamonu',
  'Kayseri',
  'Kırklareli',
  'Kırşehir',
  'Kocaeli',
  'Konya',
  'Kütahya',
  'Malatya',
  'Manisa',
  'Kahramanmaraş',
  'Mardin',
  'Muğla',
  'Muş',
  'Nevşehir',
  'Niğde',
  'Ordu',
  'Rize',
  'Sakarya',
  'Samsun',
  'Siirt',
  'Sinop',
  'Sivas',
  'Tekirdağ',
  'Tokat',
  'Trabzon',
  'Tunceli',
  'Şanlıurfa',
  'Uşak',
  'Van',
  'Yozgat',
  'Zonguldak',
  'Aksaray',
  'Bayburt',
  'Karaman',
  'Kırıkkale',
  'Batman',
  'Şırnak',
  'Bartın',
  'Ardahan',
  'Iğdır',
  'Yalova',
  'Karabük',
  'Kilis',
  'Osmaniye',
  'Düzce',
];

function handleKeyDown(event) {
  const suggestions = document.querySelectorAll('.suggestion');
  const selectedSuggestion = document.querySelector('.suggestion.selected');

  if (event.key === 'ArrowDown') {
    if (!selectedSuggestion) {
      suggestions[0].classList.add('selected');
    } else {
      const nextSuggestion = selectedSuggestion.nextElementSibling;
      if (nextSuggestion) {
        selectedSuggestion.classList.remove('selected');
        nextSuggestion.classList.add('selected');
      }
    }
  } else if (event.key === 'ArrowUp') {
    if (selectedSuggestion) {
      const prevSuggestion = selectedSuggestion.previousElementSibling;
      if (prevSuggestion) {
        selectedSuggestion.classList.remove('selected');
        prevSuggestion.classList.add('selected');
      }
    }
  } else if (event.key === 'Enter') {
    if (selectedSuggestion) {
      setSearchValue(selectedSuggestion.innerText);
    }
    search();
  }
}

function setSearchValue(value) {
  searchInput.value = value;
  suggestionsContainer.style.display = 'none';
}

function search() {
  const searchTerm = searchInput.value;
  alert(`Arama yapılan şehir: ${searchTerm}`);
}

function showSuggestions() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredCities = cityNames.filter((city) => city.toLowerCase().startsWith(searchTerm));

  suggestionsContainer.innerHTML = '';

  filteredCities.forEach((city) => {
    const suggestion = document.createElement('div');
    suggestion.classList.add('suggestion');
    suggestion.innerText = city;
    suggestion.addEventListener('click', () => setSearchValue(city));
    suggestionsContainer.appendChild(suggestion);
  });

  suggestionsContainer.style.display = filteredCities.length > 0 ? 'block' : 'none';
}

function istekBildir() {
  alert('İstek Bildir butonuna tıklandı!');
}

function sorunBildir() {
  alert('Sorun Bildir butonuna tıklandı!');
}

function tumKayitlar() {
  alert('Tüm Kayıtlarım butonuna tıklandı!');
}

searchInput.addEventListener('input', showSuggestions);
searchInput.addEventListener('keydown', handleKeyDown);
