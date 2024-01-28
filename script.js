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

//klavye olaylarını dinleyerek kullanıcının arama çubuğu üzerinde gezinmesini ve seçim yapmasını sağlar.
function handleKeyDown(event) {
  const suggestions = document.querySelectorAll('.suggestion');
  const selectedSuggestion = document.querySelector('.suggestion.selected');

  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    let index = Array.from(suggestions).indexOf(selectedSuggestion);

    if (event.key === 'ArrowDown') {
      index = (index + 1) % suggestions.length;
    } else {
      index = (index - 1 + suggestions.length) % suggestions.length;
    }

    suggestions.forEach((suggestion, i) => {
      if (i === index) {
        suggestion.classList.add('selected');
        setSearchValue(suggestion.innerText);
      } else {
        suggestion.classList.remove('selected');
      }
    });
  } else if (event.key === 'Enter') {
    suggestionsContainer.style.display = 'none';
    if (selectedSuggestion) {
      setSearchValue(selectedSuggestion.innerText);
    }
    search();
  } else {
    setSearchValue(searchInput.value);
    showSuggestions();
  }
}
//Arama önerileri arasında seçim yaparken veya bir öneriye tıklandığında kullanılır
function setSearchValue(value) {
  searchInput.value = value;
}

function search() {
  const searchTerm = searchInput.value;
  alert(`Arama yapılan şehir: ${searchTerm}`);
}

//önerilenler datalarına tıklama işlevini ekler
function addSuggestionClickListener(suggestion) {
  suggestion.addEventListener('click', () => {
    setSearchValue(suggestion.innerText);
    search();
  });
}

//arama çubuğuna girilen değere göre şehir isimleri arasından filtrelenen önerileri gösterir.
function showSuggestions() {
  const searchTerm = searchInput.value.toLowerCase();
  if (!searchTerm.trim()) {
    suggestionsContainer.style.display = 'none';
    return;
  }
  const filteredCities = cityNames.filter((city) => city.toLowerCase().startsWith(searchTerm));

  suggestionsContainer.innerHTML = '';

  filteredCities.forEach((city) => {
    const suggestion = document.createElement('div');
    suggestion.classList.add('suggestion');
    suggestion.innerText = city;
    addSuggestionClickListener(suggestion);
    suggestionsContainer.appendChild(suggestion);
  });

  suggestionsContainer.style.display = filteredCities.length > 0 ? 'block' : 'none';
}

function requestButton() {
  alert('İstek Bildir butonuna tıklandı!');
}

function issueButton() {
  alert('Sorun Bildir butonuna tıklandı!');
}

function allRecords() {
  alert('Tüm Kayıtlarım butonuna tıklandı!');
}

function serviceButton() {
  alert('Hizmet kataloğu butonuna tıklandı!');
}
function profileButton() {
  alert('Profil butonuna tıklandı!');
}
searchInput.addEventListener('input', showSuggestions); // Arama çubuğuna herhangi bir giriş yapıldığında önerileri güncellemek için
searchInput.addEventListener('keydown', handleKeyDown);
