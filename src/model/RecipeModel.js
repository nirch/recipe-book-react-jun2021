
class RecipeModel {
    constructor(plainRecipe) {
        this.id = plainRecipe.id;
        this.name = plainRecipe.name;
        this.desc = plainRecipe.desc;
        this.img = plainRecipe.img;
        this.difficulty = plainRecipe.difficulty;
        this.userId = plainRecipe.userId;
    }
}

export default RecipeModel;