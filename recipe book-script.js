class Recipe {
  constructor(name, ingredients, instructions, cookingTime) {
    this.name = name
    this.ingredients = ingredients
    this.instructions = instructions
    this.cookingTime = cookingTime
  }

  isValid() {
    return (
      this.name &&
      this.ingredients.length > 0 &&
      this.instructions &&
      this.cookingTime
    )
  }
}


class RecipeBook {
  constructor() {
    this.recipes = []
  }

  addRecipe(recipe) {
    if (recipe.isValid()) {
      this.recipes.push(recipe)
    }
  }

  findRecipesByTime(cookingTime) {
    return this.recipes.filter((recipe) => recipe.cookingTime <= cookingTime)
  }

  findRecipesByIngredients(ingredients) {
    return this.recipes.filter((recipe) =>
      ingredients.every((ingredient) => recipe.ingredients.includes(ingredient))
    )
  }
}

const recipe1 = new Recipe("Рецепт 1", ["Картопля", "Гриби"], "Інструкція 1", 30)
const recipe2 = new Recipe("Рецепт 2", ["Гриби"], "Інструкція 2", 60)
const recipe3 = new Recipe("Рецепт 3", ["Карпотля", "Морква"], "Інструкція 3", 120)
const recipe4 = new Recipe("Рецепт 4", ["Цибуля"], "Інструкція 4", 90)
const recipe5 = new Recipe("Рецепт 5", ["Картопля", "Гриби"], "Інструкція 5", 45)
const recipe6 = new Recipe("Invalid Recipe", [], "", null)

const recipeBook = new RecipeBook()

recipeBook.addRecipe(recipe1)
recipeBook.addRecipe(recipe2)
recipeBook.addRecipe(recipe3)
recipeBook.addRecipe(recipe4)
recipeBook.addRecipe(recipe5)
recipeBook.addRecipe(recipe6)

const recipesByTime = recipeBook.findRecipesByTime(60)
console.log("Recipes with cooking time <= 60 minutes:")
recipesByTime.forEach(recipe => console.log(recipe.name))

const recipesByIngredients = recipeBook.findRecipesByIngredients(['картопля', 'морква'])
const recipeNames = recipesByIngredients.map(recipe => recipe.name)
const message = `Recipes with ingredients 'картопля' and 'морква': ${recipeNames.join(', ')}`

console.log(message)


const recipesContainer = document.getElementById("recipesContainer")

recipeBook.recipes.forEach(recipe => {
  const recipeCard = document.createElement("div")
  recipeCard.className = "recipeCard"

  const recipeTitle = document.createElement("h2")
  recipeTitle.textContent = recipe.name

  const recipeIngredients = document.createElement("ul")
  recipe.ingredients.forEach(ingredient => {
      const li = document.createElement("li")
      li.textContent = ingredient
      recipeIngredients.appendChild(li)
  });

  const recipeInstructions = document.createElement("p")
  recipeInstructions.textContent = recipe.instructions

  recipeCard.appendChild(recipeTitle)
  recipeCard.appendChild(recipeIngredients)
  recipeCard.appendChild(recipeInstructions)

  recipesContainer.appendChild(recipeCard)
})