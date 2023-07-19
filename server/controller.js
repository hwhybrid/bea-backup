const goals = [];

module.exports = {
    getCompliment: (req, res) => {
        const compliments = [
            "Gee, you're a smart cookie!",
            "Cool shirt!",
            "Your Javascript skills are stellar.",
        ];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = [
            "Practice makes perfect.",
            "Protective measures will prevent costly disasters",
            "Put your mind into planning today. Look into the future.",
            "Rest has a peaceful effect on your physical and emotional health.",
            "Resting well is as important as working hard.",
            "Savor your freedom – it is precious.",
            "Self-knowledge is a life long process.",
            "The only people who never fail are those who never try.",
            "The person who will not stand for something will fall for anything.",
            "The philosophy of one century is the common sense of the next.",
        ];

        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    getJoke: (req, res) => {
        const jokes = [
            "A SQL query goes to the bar, walks up to two tables \n 'Can I join you?'",
            " Another Joke about APIs? Give it a REST.",
            "I'd POST a joke about APIs, but you couldn't GET it.",
            "How many developers does it take to screw in a lightbulb? None. It’s a hardware problem.",
            "Why did the Java developer teach his young kids about single quotes? Because they build character.",
            "What’s the first step in understanding recursion? To understand recursion, you must first understand recursion.",
            "Why did the developer become so poor?... Because he cleared his cache.",
            "What shoes do computers love the most?... Re-boots!",
            "Why do most programmers use a dark theme while coding? Because light attracts bugs.",
            "Why did the functions stop calling each other? Because they had constant arguments.",
        ];

        // choose random joke
        let randomIndex = Math.floor(Math.random() * jokes.length);
        let randomJoke = jokes[randomIndex];

        res.status(200).send(randomJoke);
    },
    getQuote: (req, res) => {
        const quotes = [
            "Nothing is impossible. The word itself says 'I'm possible!' — Audrey Hepburn",
            "The bad news is time flies. The good news is you're the pilot. — Michael Altshuler",
            "You define your own life. Don't let other people write your script. — Oprah Winfrey",
            "Success is not final, failure is not fatal: It is the courage to continue that counts.-Winston Churchill",
            "You are never too old to set another goal or to dream a new dream. — Malala Yousafzai",
        ];

        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        res.status(200).send(randomQuote);
    },

    setGoal: (req, res) => {
        const { goal } = req.body;

        goals.push(goal);

        res.status(201).json({ message: "Goal set successfully!" });
    },

    deleteGoal: (req, res) => {
        const { goalId } = req.params;

        const goalIndex = goals.findIndex((goal) => goal.id === goalId);

        if (goalIndex !== -1) {
            goals.splice(goalIndex, 1);
            res.status(200).json({ message: "Goal deleted successfully!" });
        } else {
            res.status(404).json({ message: "Goal not found!" });
        }
    },
};
