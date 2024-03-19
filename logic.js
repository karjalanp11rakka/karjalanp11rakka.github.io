footer = document.getElementById("Footer");
footer.innerHTML = '<footer><a href="https://www.youtube.com/@karjalanp11rakka" class="Link">Youtube</a><a href="https://karjalanp11rakka.itch.io/" class="Link">Itch.io</a></footer>';

let languag = localStorage.getItem("language");
if (languag === null) {
   languag = 'english';
   localStorage.setItem("language", 'english');
}
updateContentBasedOnLanguage(getLanguageAsNumber(languag));
console.log(languag);

const bar = document.getElementById("bar");
bar.innerHTML = `
  <div class="container">
    <li><a class="menuLink" href="https://karjalanp11rakka.github.io/">Home</a></li>
    <li><a class="menuLink" href="https://karjalanp11rakka.github.io/games/">Games</a></li>
    <li><a class="menuLink" href="https://karjalanp11rakka.github.io/gallery/">Gallery</a></li>
  </div>  
`;

const holder = document.getElementById("Holder");
const languageSelectorContainer = document.createElement("div");

languageSelectorContainer.innerHTML = `
  <label for="languages"></label>
  <select onchange="updateLanguage()" name="languages" id="languages">
    <option lang="en" value="english" ${languag === 'english' ? 'selected' : ''}>English</option>
    <option lang="fi" value="finnish" ${languag === 'finnish' ? 'selected' : ''}>Suomi</option>
  </select><br>
`;

holder.insertBefore(languageSelectorContainer, holder.firstChild);

function updateLanguage() {
  var selectElement = document.getElementById("languages");
  var selectedOptionValue = selectElement.options[selectElement.selectedIndex].value;

  localStorage.setItem("language", selectedOptionValue);
  console.log('Language changed to ' + selectedOptionValue);
  updateContentBasedOnLanguage(selectedOptionValue === 'english' ? 'en' : (selectedOptionValue === 'finnish' ? 'fi' : 0));
}

function getLanguageAsNumber(lang) {
  return lang === 'english' ? 'en' : (lang === 'finnish' ? 'fi' : '');
}

function updateContentBasedOnLanguage(language) {
  const elements = document.querySelectorAll('[data-lang]');
  elements.forEach((element) => {
    const langKey = element.getAttribute('data-lang');
    const content = languageData[language][langKey];
    element.innerHTML = content;
  });
}
