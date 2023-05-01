### Checklist - Manual testing Arkadium

Sections verification

[] Home

  - Verify if search bar loads correctly
  - Verify if main game presenter loads correctly and runs by itself
  - Verify if there are fan favorites games displayed
  - Verify if there are new game releases displayed
  - Verify if there are daily games displayed
  - Verify if footer loads all sections, language and social medias
  - Verify if changing language reloads the page

[] Search

  - Verify if after clicking in Search bar from homepage, a page dropdown will display popular games and trending games
  - Verify if clicking on Search in the menu has the same behavior for clicking in the search bar
  - Verify if searching for 'Solitaire' will display category and games based on search
  - Verify if searching for 'Jewel Shuffle' will display two games: Jewel Shuffle and Sweet Shuffle

[] Support

  - Verify if clicking on Support in the menu will display two options: provide feedback and player support
  - Verify if clicking on Support in the menu will display a chat on Whatsapp button
  - Verify if clicking on Support in the menu will display a chat on Whatsapp button that when clicked redirects to Whatsapp

[] Profile

  - Verify if clicking on Profile in the menu will display a sign in form
  - Verify if clicking on Profile in the menu will display a forgot your password? option
  - Verify if clicking on Profile in the menu will display a sign in with facebook option
  - Verify if clicking on Profile in the menu will display a sign in with google option

[] Advantage/Shop

  - Verify if clicking on Advantage in the menu will display two options Gems and Arkadium Advantage
  - Verify if clicking on Advantage in the menu will display Arkadium Advantage with Annual and Monthly subscription
  - Verify if clicking on Advantage in the menu will display Gems and sign in option (sign in should look like profile page)
  - Verify if clicking on Shop in the menu will display Gem shopping, with sign in option (sign in should look like profile page)
  - Verify if clicking on Shop in the menu will display Arkadium Advantage with Annual and Monthly subscription

[] Basic flow
  
  - Search for Jewel Shuffle or any other game
  - Click on Jewel Shuffle card
  - Click on Play Now
  - Wait fo add to load
  - Click on Skip Ad
  - Wait for game to load/display

### How testing should be worked on

- Verification of each session in menu
- Focus on search/elastic searching as it is important to focus for client to always get expected game
- Focus on Profile/Advantage/Shop as it is the most important part for business value

### Bugs

- Very minor bug. When in 700x1000 screensize or other with menu as footer, in Profile, image for Google sign in has a weird format, like a circle that is cropped incorrectly
- Very minor bug. In the homepage when using a screensize like 700x1000, I can't see an option like 'See all' for Arkadium Fan favorites, but I see that there are more options besides 5 cards displayed (have of another one is shown)
