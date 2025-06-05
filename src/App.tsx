import React, { useState } from "react";

/**
 * The Idea:
 *
 * - User lands on this page, there is an input box that allows the user to enter their favourite animal(s)
 * - These are strings stored in an array, that will be stored in the localStorage.
 * - If there are already stored animals in localStorage, then retrieve that and show the user what they have already favourited.
 * - If there are none, show a message saying there are none.
 * - With the list of favourites shown under favourites, the user is able to "rate" the animal out of 5 stars. This rating should also persist in localStorage.
 * - For each favourited animal, allow the user to click through into the animal details (which uses the API ninja's endpoint).
 * - The animal detail page will show more in depth info retrieved from API ninja's enpoint.
 * - The characterists will be presented as a list for the user to check(like) which should also be persisted in local storage.
 *
 * - WishList:
 * - Allow user removal of favourited animal
 * - Navigation of some sorts to navigate back to the landing page after having visited the details page. Maybe a "back" button or breadcrumbs.
 * - Some sort of validation to ensure that the user is entering an animal and not random things
 * - If the user is adding random things, the API returns an empty array as it can't match anything so it would be helpful to provide the user with feedback that their animal does not exist or can't be found.
 *
 */

const App: React.FC = () => {

  // Get favoriteAnimals from localStorage if there are already stored or initialize an empty array.
  const [favoriteAnimals, setFavoriteAnimals] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem("favoriteAnimals");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [currentAnimal, setCurrentAnimal] = useState<string>("");

  const addAnimal = () => {
    // Prevent user from adding empty strings
    if (currentAnimal.trim() === "") return;

    const updatedList = [...favoriteAnimals, currentAnimal.trim()];

    setFavoriteAnimals(updatedList);

    localStorage.setItem("favoriteAnimals", JSON.stringify(updatedList));

    setCurrentAnimal("");
  };

  return (
    <div className="h-[80vh] py-10">
      <div className="flex items-center flex-col max-w-[800px] mx-auto">
        <div className="w-full p-8 mb-6">
          <h1 className="text-3xl font-bold text-center text-black mb-6">
            Animals that I love
          </h1>

          <div className="mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="animal-input"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Add an animal that you love!
                </label>
                <input
                  id="animal-input"
                  type="text"
                  value={currentAnimal}
                  onChange={(e) => setCurrentAnimal(e.target.value)}
                  placeholder="e.g., Lion, Elephant, Cheetah..."
                  className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={addAnimal}
                  className="px-6 py-2 bg-black text-white hover:bg-black focus:ring-2 focus:ring-offset-2 transition-all font-semibold"
                >
                  Add Animal
                </button>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold mt-10">My favourite animals:</p>
            {favoriteAnimals.length > 0 ? (
              <ul className="list-disc pl-5">
                {favoriteAnimals.map((animal, idx) => (
                  <li key={idx} className="py-1">
                    {animal}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">You haven’t added any animals yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
