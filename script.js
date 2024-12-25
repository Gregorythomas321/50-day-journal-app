// Select the button and entries container
const newEntryButton = document.getElementById("new-entry");
const entriesContainer = document.getElementById("entries");

// Function to add a new journal entry
function addNewEntry() {
    // Prompt the user for input
    const entryText = prompt("Write your journal entry:");

    // If the user cancels or enters nothing, exit
    if (!entryText) return;

    // Create a new entry element
    const entryDiv = document.createElement("div");
    entryDiv.classList.add("entry");
    entryDiv.textContent = entryText;

    // Add the new entry to the entries container
    entriesContainer.appendChild(entryDiv);
}

// Add an event listener to the button
newEntryButton.addEventListener("click", addNewEntry);

THE END
