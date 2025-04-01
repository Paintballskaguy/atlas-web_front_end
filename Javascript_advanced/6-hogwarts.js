class studentHogwarts {
    #privateScore = 0;
    #name = null;

    #changeScoreBy(points) {
        this.#privateScore += points;
    }

    setName(newName) {
        this.#name = newName;
    }

    rewardStudent() {
        this.#changeScoreBy(1);
    }
    penalizeStudent() {
        this.#changeScoreBy(-1);
    }

    getScore() {
        return `${this.#name} ${this.#privateScore}`;
    }
}

// 10 points for gryfindor //
const harry = new studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore()); // Harry: 4 //
 

// 10 points for slyerine //
const draco = new studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore()); // Draco: -2 //
