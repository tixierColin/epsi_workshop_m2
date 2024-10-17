const mainNode = document.getElementById("cards");
const NB_QUESTION = 20;


mainNode.scrollLeft = 0;

let questions = posts.sort((a, b) => 0.5 - Math.random()).map(p => new Question(p)).slice(0, NB_QUESTION);

let currentQuestionIndex = 0

let score = {
    racism: 0,
    misoginy: 0,
    stupid: 0
}

function init() {
    mainNode.innerHTML = "";
    questions.forEach((q, i) => {
        mainNode.innerHTML += `
            <div class="q-text-card">
                <div class="q-container">
                    <div class="q-title-container">
                        <h4 class="q-text q-title">Post: ${i+1}/${questions.length}</h4>
                    </div>
                    <div class="divider"></div>
                    <div class="q-text-container">
                        <h2 class="q-text q-main-text">${q.content}</h2>
                    </div>
                </div>
            </div>
        `
    });
    
    mainNode.innerHTML += `
        <div class="q-text-card">
            <div class="q-container">
            <div class="q-title-container">
                    <h4 class="q-text q-title">Review</h4>
                </div>
                <div class="divider"></div>
                <div class="q-text-container" id="review">
                    <p class="q-text">Racism:</p>
                    <div class='range'>
                        <div id="racist" style="width: 0%">0%</div>
                    </div>
                    <p class="q-text">Misogynism:</p>
                    <div class='range'>
                        <div id="miso" style="width: 0%">0%</div>
                    </div>
                    <p class="q-text">Stupid:</p>
                    <div class='range'>
                        <div id="stupid" style="width: 0%">0%</div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `



    questions = posts.sort((a, b) => 0.5 - Math.random()).map(p => new Question(p)).slice(0, NB_QUESTION);

    currentQuestionIndex = 0

    score = {
        racism: 0,
        misoginy: 0,
        stupid: 0
    }

    mainNode.scrollLeft = 0;
}
init()


document.querySelectorAll("#btn-group > button").forEach(e => {
    e.addEventListener("click", () => {
        if (mainNode.scrollLeft % 400 !== 0) return;

        questions[currentQuestionIndex].answer(e.attributes["data-answer"].value === "Y" ? true : false)
        currentQuestionIndex++;

        mainNode.scrollLeft += 400

        if (currentQuestionIndex == questions.length) {
            perScore = Object.keys(score).map(key => normalize(score[key], 0, 5) * 100);

            scrollAnim(document.getElementById("racist"), perScore[0])
            scrollAnim(document.getElementById("miso"), perScore[1])
            scrollAnim(document.getElementById("stupid"), perScore[2])

            document.getElementById("btn-group").style.display = "none"
            document.getElementById("btn-reset").style.display = "flex"
        }
    })
})


document.querySelector("#btn-reset > button").addEventListener("click", () => {
    document.getElementById("btn-group").style.display = "flex"
    document.getElementById("btn-reset").style.display = "none"
    init()
})