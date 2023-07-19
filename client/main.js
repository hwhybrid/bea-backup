const complimentBtn = document.getElementById("complimentButton");
const fortuneButton = document.getElementById("fortuneButton");
const jokeButton = document.getElementById("jokeButton");
const quoteButton = document.getElementById("quoteButton");
const goalInput = document.getElementById("goalInput");
const goalBtn = document.getElementById("goalButton");
const deleteGoalInput = document.getElementById("deleteGoalInput");
const deleteGoalBtn = document.getElementById("deleteGoalButton");

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/").then((res) => {
        const data = res.data;
        alert(data);
    });
};

complimentBtn.addEventListener("click", getCompliment);

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/").then((res) => {
        const data = res.data;
        alert(data);
    });
};

fortuneButton.addEventListener("click", getFortune);

const getJoke = () => {
    axios.get("http://localhost:4000/api/joke/").then((res) => {
        const data = res.data;
        alert(data);
    });
};

jokeButton.addEventListener("click", getJoke);

const getQuote = () => {
    axios.get("http://localhost:4000/api/quote/").then((res) => {
        const data = res.data;
        alert(data);
    });
};
quoteButton.addEventListener("click", getQuote);

const setGoal = () => {
    const goal = goalInput.value;

    if (goal.trim() !== "") {
        axios
            .post("http://localhost:4000/api/goal/", { goal })
            .then((res) => {
                alert(res.data.message);
                goalInput.value = "";
            })
            .catch((err) => {
                console.error(err);
            });
    }
};

goalBtn.addEventListener("click", setGoal);

const deleteGoal = () => {
    const goalId = deleteGoalInput.value;

    if (goalId.trim() !== "") {
        axios
            .delete(`http://localhost:4000/api/goal/${goalId}`)
            .then((res) => {
                alert(res.data.message);
                deleteGoalInput.value = "";
            })
            .catch((err) => {
                console.error(err);
            });
    }
};

deleteGoalBtn.addEventListener("click", deleteGoal);
