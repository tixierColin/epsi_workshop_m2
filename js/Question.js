class Question {
    constructor(json) {
        this.racism = json.score.racism;
        this.misoginy = json.score.mysignism;
        this.stupid = json.score.stupidity;
        this.content = json.sentence;
    }

    answer(ok) {
        if (ok) {
            score.misoginy += this.misoginy;
            score.racism += this.racism;
            score.stupid += this.stupid;

            return;
        }

        score.misoginy -= this.misoginy;
        score.racism -= this.racism;
        score.stupid -= this.stupid;

        score = {
            misoginy: score.misoginy < 0 ? 0 : score.misoginy,
            racism: score.racism < 0 ? 0 : score.racism,
            stupid: score.stupid < 0 ? 0 : score.stupid,
        }
    }
}