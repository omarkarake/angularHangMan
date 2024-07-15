## the hosted link for the project: https://gentle-narwhal-8ccac9.netlify.app/

## 1. Navigation Header Component (NavigatioHeaderComponent)
This component handles the display and interactions at the top of the game interface.

Template (navigatio-header.component.html):

Before Game (how-to-play or pick-category page):

Back button: Clicking it triggers goBack().
Title Image: Shows different images based on the pageType.
In Game (any other pageType):

Menu button: Clicking it toggles the pause modal.
Category title: Displays the selected category.
Progress bar: Visual representation of game progress.
Health icon: Displays the remaining lives.
Unified Modal (Pause or Game Result):

Displays win/lose image or "Paused" text.
Contains buttons for "Continue", "New Category", and "Quit Game".
Component (navigatio-header.component.ts):

Manages state and interactions for navigation and modals.
Listens to game state updates from GameStateService.

## 2. Home Component (HomeComponent)
This component represents the home screen with options to start the game or view how to play.

Template (home.component.html):

Contains buttons for "Play" and "How to Play", emitting events to parent component.
Component (home.component.ts):

Emits events to navigate to the respective screens when buttons are clicked.

## 3. How to Play Component (HowToPlayComponent)
This component explains how to play the game.

Template (how-to-play.component.html):

Provides step-by-step instructions on playing the game.
Component (how-to-play.component.ts):

Emits event to navigate back to home screen when the back button is clicked.

## 4. In-Game Component (InGameComponent)
This component handles the actual gameplay.

Template (in-game.component.html):

Displays the word to be guessed with placeholders.
Provides the alphabet for user guesses.
Updates visual elements based on user interactions.
Component (in-game.component.ts):

Manages gameplay logic and user interactions.
Updates game state based on user guesses and checks win/lose conditions.

## 5. Pick Category Component (PickCategoryComponent)
This component allows the user to select a category before starting the game.

Template (pick-category.component.html):

Lists available categories for selection.
Component (pick-category.component.ts):

Emits events when a category is selected or when navigating back to the home screen.

## 6. Custom Transform Pipe (CustomTransformPipe)
A pipe to format the category titles by adding spaces before each uppercase letter and converting the entire string to uppercase.

## Pipe (custom-transform.pipe.ts):

Formats the input string for display.
7. Game State Service (GameStateService)
A service to manage and share the game state across components.

## Service (game-state.service.ts):

Provides observables for losing letter length and game result.
Allows updating and resetting of the game state.

## General Usage
Component Communication: Uses @Input and @Output decorators to pass data and events between components.
Game State Management: Uses GameStateService to handle and distribute game state changes.
Responsive Design: Uses Tailwind CSS classes and Angular directives for responsive layout and styling.