let activities = [];

document.getElementById('fitnessForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const exercise = document.getElementById('exercise').value;
    const duration = parseInt(document.getElementById('duration').value);
    const calories = parseInt(document.getElementById('calories').value);

    const activity = { exercise, duration, calories };
    activities.push(activity);

    saveToLocalStorage();
    renderActivities();
    updateSummary();

    this.reset();
});

function renderActivities() {
    const list = document.getElementById('activityList');
    list.innerHTML = '';

    activities.forEach((activity) => {
        const li = document.createElement('li');
        li.textContent = `${activity.exercise} - ${activity.duration} min - ${activity.calories} cal`;
        list.appendChild(li);
    });
}

function updateSummary() {
    let totalDuration = 0;
    let totalCalories = 0;

    activities.forEach(a => {
        totalDuration += a.duration;
        totalCalories += a.calories;
    });

    document.getElementById('totalDuration').textContent = totalDuration;
    document.getElementById('totalCalories').textContent = totalCalories;
}

function saveToLocalStorage() {
    localStorage.setItem('fitnessData', JSON.stringify(activities));
}

function loadFromLocalStorage() {
    const data = localStorage.getItem('fitnessData');
    if (data) {
        activities = JSON.parse(data);
        renderActivities();
        updateSummary();
    }
}

window.onload = loadFromLocalStorage;

// RESET BUTTON
document.getElementById('resetButton').addEventListener('click', function () {
    if (confirm("Are you sure you want to reset all activities?")) {
        activities = [];
        saveToLocalStorage();
        renderActivities();
        updateSummary();
    }
});

// CHATBOT


function getAIResponse(input) {
    if (!input) {
        return "Hi! How can I help you with your fitness goals today?";
    }
    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
        return "Hello! 👋 Ready for a workout or need some tips?";
    }
    if (input.includes("thank")) {
        return "You're welcome! Let me know if you need more fitness advice.";
    }
    if (input.includes("bye") || input.includes("goodbye")) {
        return "Goodbye! Stay active and healthy!";
    }
    if (input.includes("cardio")) {
        return "Try 30 minutes of running or cycling! Want a warm-up routine too?";
    }
    if (input.includes("strength")) {
        return "How about 4 sets of push-ups and squats? Need more strength exercises?";
    }
    if (input.includes("abs")) {
        return "Do 3 sets of crunches, leg raises, and planks (1 min each)! Want tips for lower abs?";
    }
    if (input.includes("suggest") || input.includes("workout")) {
        return "You can do: 20 min cardio + 10 min strength + 5 min stretching. Want a detailed plan?";
    }
    if (input.includes("fat")) {
        return "Fat-burning workout: Jumping jacks, burpees, and mountain climbers (3 rounds). Want a diet tip too?";
    }
    if (input.includes("diet") || input.includes("food")) {
        return "Eat balanced meals with protein, veggies, and healthy fats. Need a sample meal plan?";
    }
    if (input.includes("motivat")) {
        return "Remember: Progress, not perfection! 💪 Keep going!";
    }
    if (input.includes("help")) {
        return "Ask me about workouts, diet, or motivation! For example: 'Suggest a workout' or 'How to burn fat?'";
    }
    return "I'm here to help with workouts, diet, and motivation! Try asking about cardio, strength, or abs. 😊";
}

function handleChat() {
    const inputElem = document.getElementById('userInput');
    const input = inputElem.value.toLowerCase().trim();
    const chatbox = document.getElementById('chatbox');

    chatbox.innerHTML += `<div class="user-msg">👤 ${input || '[no input]'}</div>`;

    // Simulate typing delay
    setTimeout(() => {
        const response = getAIResponse(input);
        chatbox.innerHTML += `<div class="bot-msg">🤖 ${response}</div>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 500);

    inputElem.value = '';
}

document.getElementById('userInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleChat();
    }
});

/* Duplicate renderActivities removed */

document.getElementById('resetButton').addEventListener('click', function () {
    if (confirm("Are you sure you want to reset all activities?")) {
        activities = [];
        saveToLocalStorage();
        renderActivities();
        updateSummary();
    }
});


function updateSummary() {
    let totalDuration = 0;
    let totalCalories = 0;

    activities.forEach(a => {
        totalDuration += a.duration;
        totalCalories += a.calories;
    });

    document.getElementById('totalDuration').textContent = totalDuration;
    document.getElementById('totalCalories').textContent = totalCalories;
}

function saveToLocalStorage() {
    localStorage.setItem('fitnessData', JSON.stringify(activities));
}

function loadFromLocalStorage() {
    const data = localStorage.getItem('fitnessData');
    if (data) {
        activities = JSON.parse(data);
        renderActivities();
        updateSummary();
    }
}

window.onload = loadFromLocalStorage;
