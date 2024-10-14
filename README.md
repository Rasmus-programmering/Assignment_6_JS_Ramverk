# Min Filmlista

Detta är en React-applikation som låter användare lägga till, sortera och ta bort filmer från en lista. Applikationen använder Bootstrap för styling.

## Innehåll

- [Installation](#installation)
- [Användning](#användning)
- [Funktioner](#funktioner)
- [Komponenter](#komponenter)
- [Förbättringar](#förbättringar)
- [Licens](#licens)

## Installation

För att installera och köra projektet, följ dessa steg:

1. Klona detta repository:
   ```bash
   git clone <repository-url>
Navigera till projektmappen:
bash
cd min-filmlista
Installera beroenden:
bash
npm install
Starta applikationen:
bash
npm start
Öppna webbläsaren och gå till http://localhost:3000 för att se applikationen.

Användning
Använd formuläret för att lägga till en film med en titel och betyg.
Filmerna kan sorteras alfabetiskt eller efter betyg.
Du kan ta bort filmer från listan genom att klicka på den röda knappen bredvid filmen.

Funktioner
Lägga till filmer
Ta bort filmer
Sortera filmer alfabetiskt eller efter betyg

Komponenter
App.js: Huvudkomponenten som hanterar tillstånd och rendering av andra komponenter.
AddMovieForm.js: Formulär för att lägga till nya filmer.
Movies.js: Visar listan över filmer.
Movie.js: Komponent som representerar en enskild film.
SortButtons.js: Komponent för att sortera filmer.

Förbättringar
Lägg till validering i formuläret för att säkerställa att användaren skriver in giltiga data.
Implementera en sökfunktion för att enkelt hitta filmer.
Spara filmer i lokal lagring så att de kvarstår efter att sidan har laddats om.
Licens
Detta projekt är licensierat under MIT-licensen. Se LICENSE för detaljer.

### Anpassningar
- Ersätt `<repository-url>` med URL:en till ditt Git-repository.
- Lägg till eller ta bort avsnitt beroende på vad du vill inkludera.

