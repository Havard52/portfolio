const rainydaysScreen = document.getElementById ("screenshotRainydays");
const museumScreen = document.getElementById ("screenshotMuseum");
const MealScreen = document.getElementById ("screenshotMealPreppers");
const popUpRainy = document.getElementById("RainyDaysScreen");
const popUpMuseum = document.getElementById("museumScreen");
const popUpMeal = document.getElementById("mealScreen");



rainydaysScreen.onclick = function() {
    popUpRainy.style.display = "block";

    const closeImageModule = document.querySelector ("#closeImageModuleRainy");

    closeImageModule.onclick = function () {
        popUpRainy.style.display = "none";
    };
};

museumScreen.onclick = function() {
    popUpMuseum.style.display = "block";

    const closeImageModule = document.querySelector ("#closeImageModuleMuseum");

    closeImageModule.onclick = function () {
        popUpMuseum.style.display = "none";
    };
};

MealScreen.onclick = function() {
    popUpMeal.style.display = "block";

    const closeImageModule = document.querySelector ("#closeImageModuleMeal");

    closeImageModule.onclick = function () {
        popUpMeal.style.display = "none";
    };
};





