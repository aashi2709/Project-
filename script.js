// Sample workshops with more detailed information
const workshops = [
    { 
        id: 1, 
        name: "Mindfulness Meditation", 
        date: "March 1, 2025", 
        desc: "A guided meditation session for stress relief.", 
        type: "offline",
        fullDesc: "Join us for a transformative experience where you'll learn how to center yourself through mindfulness. Our experienced instructor will guide you through techniques that you can practice daily to reduce stress and find your inner calm. Perfect for beginners and experienced meditators alike!",
        instructor: "Dr. Sarah Johnson",
        duration: "2 hours",
        benefits: ["Reduced stress", "Better focus", "Improved sleep", "Enhanced self-awareness"]
    },
    { 
        id: 2, 
        name: "Coping with Anxiety", 
        date: "March 5, 2025", 
        desc: "Techniques to manage and overcome anxiety.", 
        type: "online",
        fullDesc: "In this interactive online workshop, you'll discover practical tools to identify anxiety triggers and develop healthy coping mechanisms. Learn to transform anxious thoughts into positive actions through proven cognitive behavioral techniques.",
        instructor: "Prof. Michael Chen",
        duration: "90 minutes",
        benefits: ["Anxiety management tools", "Panic attack prevention", "Worry reduction strategies", "Building confidence"]
    },
    { 
        id: 3, 
        name: "Building Resilience", 
        date: "March 10, 2025", 
        desc: "Strategies to stay strong through life's challenges.", 
        type: "offline",
        fullDesc: "Life throws curveballs, but resilience helps us bounce back stronger. This workshop focuses on developing your mental fortitude through interactive exercises, group discussions, and personalized resilience-building plans.",
        instructor: "Dr. Lisa Martinez",
        duration: "3 hours",
        benefits: ["Adaptability to change", "Emotional regulation", "Crisis management skills", "Long-term wellbeing strategies"]
    },
    { 
        id: 4, 
        name: "Managing Stress in Daily Life", 
        date: "March 15, 2025", 
        desc: "Practical ways to handle everyday stress.", 
        type: "online",
        fullDesc: "Modern life is full of stressors - from work deadlines to family responsibilities. This workshop provides practical, actionable strategies to identify your stress triggers and develop healthy responses. Learn to transform stress into productivity!",
        instructor: "Dr. James Wilson",
        duration: "2 hours",
        benefits: ["Daily stress management", "Work-life balance", "Healthy habit formation", "Sustainable self-care routines"]
    }
];

// Array of positive affirmations
const affirmations = [
    "You are capable and strong.",
    "Today is full of possibilities!",
    "You've got this!",
    "Your mental health matters.",
    "Small steps lead to big changes.",
    "You deserve peace and happiness.",
    "Be kind to yourself today.",
    "You are worthy of self-care.",
    "Every breath is a fresh start.",
    "You are not alone in your journey."
];

// Function to display events with enhanced cards
function displayEvents() {
    const offlineList = document.getElementById("offline-events");
    const onlineList = document.getElementById("online-events");
    const eventDropdown = document.getElementById("event");

    workshops.forEach(workshop => {
        // Create event card with more cheerful design
        const div = document.createElement("div");
        div.className = "event-card";
        
        // Add emoji based on workshop type
        const emoji = workshop.type === "offline" ? "🏢" : "💻";
        
        // Create card content with more details
        div.innerHTML = `
            <h3>${emoji} ${workshop.name}</h3>
            <p><strong>Date:</strong> ${workshop.date}</p>
            <p><strong>With:</strong> ${workshop.instructor}</p>
            <p><strong>Duration:</strong> ${workshop.duration}</p>
            <div class="card-button">Click for details</div>
        `;
        
        div.addEventListener("click", () => showModal(workshop));

        if (workshop.type === "offline") {
            offlineList.appendChild(div);
        } else {
            onlineList.appendChild(div);
        }

        // Add to dropdown
        const option = document.createElement("option");
        option.value = workshop.id;
        option.textContent = '${workshop.name} (${workshop.type})';
        eventDropdown.appendChild(option);
    });
}

// Show enhanced modal with workshop details
function showModal(workshop) {
    // Update modal title and basic info
    document.getElementById("modal-title").textContent = workshop.name;
    document.getElementById("modal-description").textContent = workshop.fullDesc;
    
    // Update type with emoji
    const typeEmoji = workshop.type === "offline" ? "🏢" : "💻";
    document.getElementById("modal-type").textContent = 'Type: ${typeEmoji} ${workshop.type.toUpperCase()}';
    
    // Update date
    document.getElementById("modal-date").textContent = '📅 Date: ${workshop.date}';
    
    // Add instructor
    document.getElementById("modal-instructor").textContent = '👨‍🏫 Instructor: ${workshop.instructor}';
    
    // Add duration
    document.getElementById("modal-duration").textContent = '⏱ Duration: ${workshop.duration}';
    
    // Add benefits
    const benefitsList = document.getElementById("modal-benefits");
    benefitsList.innerHTML = ""; // Clear previous benefits
    
    workshop.benefits.forEach(benefit => {
        const li = document.createElement("li");
        li.textContent = benefit;
        benefitsList.appendChild(li);
    });
    
    // Display the modal
    document.getElementById("modal").style.display = "block";
}
// Close modal
document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});

// Handle registration
document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const selectedEventId = document.getElementById("event").value;
    const selectedWorkshop = workshops.find(w => w.id == selectedEventId);

    const message = selectedWorkshop.type === "offline"
        ? "📍 Address and venue details will be sent via email."
        : "🔗 Zoom link will be provided in the registered email.";

    document.getElementById("confirmation-message").innerHTML = `
        <div class="success-animation">
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
            <p>Thank you, ${name}! ${message}</p>
        </div>
    `;
    
    // Show a random affirmation
    showRandomAffirmation();
});

// Function to create and add self-assessment section
function addSelfAssessmentSection() {
    const mainElement = document.querySelector("main");
    const registerSection = document.querySelector(".register");
    
    // Create assessment section
    const assessmentSection = document.createElement("section");
    assessmentSection.className = "assessment";
    
    assessmentSection.innerHTML = `
        <h2>🧐 How are you feeling today?</h2>
        <p>Take a few minutes to check in with yourself. A regular self-assessment can help you understand your mental health better.</p>
        <div class="assessment-card">
            <h3>Mental Health Self-Assessment</h3>
            <p>This quick assessment will help you understand your current mental state and suggest resources that might help.</p>
            <ul>
                <li>✓ Completely anonymous</li>
                <li>✓ Takes only 5 minutes</li>
                <li>✓ Receive personalized suggestions</li>
                <li>✓ Track your progress over time</li>
            </ul>
            <button id="start-assessment" class="assessment-btn">Begin Self-Assessment</button>
        </div>
    `;
    
    // Insert before the registration section
    mainElement.insertBefore(assessmentSection, registerSection);
    
    // Add event listener to the button
    document.getElementById("start-assessment").addEventListener("click", function() {
        // Create URL for a new page (this would be implemented separately)
        const assessmentURL = "self-assessment.html";
        
        // Open in new tab
        window.open(assessmentURL, '_blank');
    });
}

// Function to add the breathing exercise
function addBreathingExercise() {
    const mainElement = document.querySelector("main");
    
    // Create breathing exercise section
    const breathingSection = document.createElement("section");
    breathingSection.className = "breathing-exercise";
    
    breathingSection.innerHTML = `
        <h2>🧘 Take a Moment to Breathe</h2>
        <p>Feeling overwhelmed? Take a short break with this guided breathing exercise.</p>
        <div class="exercise-card">
            <div id="breathing-animation" class="breath-circle">
                <div class="instruction">Click to begin</div>
            </div>
            <button id="start-breathing" class="breathing-btn">Start Exercise</button>
        </div>
    `;
    
    // Add to the end of main content
    mainElement.appendChild(breathingSection);
    
    // Variables for the breathing exercise
    let breathingInterval;
    let isExerciseRunning = false;
    const breathCircle = document.getElementById("breathing-animation");
    const startButton = document.getElementById("start-breathing");
    
    // Add event listener to the button
    startButton.addEventListener("click", function() {
        if (!isExerciseRunning) {
            // Start the exercise
            isExerciseRunning = true;
            startButton.textContent = "End Exercise";
            
            // Function to run the breathing cycle
            runBreathingCycle();
            
            // Set interval to repeat the cycle
            breathingInterval = setInterval(runBreathingCycle, 19000); // 7s inhale + 5s hold + 7s exhale
        } else {
            // End the exercise
            clearInterval(breathingInterval);
            isExerciseRunning = false;
            startButton.textContent = "Start Exercise";
            
            // Reset the circle
            breathCircle.className = "breath-circle";
            breathCircle.querySelector(".instruction").textContent = "Click to begin";
            
            // Show a random affirmation
            showRandomAffirmation();
        }
    });
    
    function runBreathingCycle() {
        // Inhale phase
        breathCircle.className = "breath-circle inhale";
        breathCircle.querySelector(".instruction").textContent = "Inhale slowly... (7s)";
        
        // Hold phase
        setTimeout(() => {
            breathCircle.className = "breath-circle hold";
            breathCircle.querySelector(".instruction").textContent = "Hold... (5s)";
        }, 7000);
        
        // Exhale phase
        setTimeout(() => {
            breathCircle.className = "breath-circle exhale";
            breathCircle.querySelector(".instruction").textContent = "Exhale slowly... (7s)";
        }, 12000);
    }
}

// Function to create and add user stories
function addUserStories() {
    // Sample user stories
    const stories = [
        {
            name: "Sarah K.",
            age: 32,
            story: "After struggling with work anxiety for years, the techniques I learned in the stress management workshop gave me practical tools I use every day.",
            workshop: "Managing Stress in Daily Life"
        },
        {
            name: "David M.",
            age: 45,
            story: "The mindfulness meditation workshop changed my perspective on self-care. I now take 10 minutes each morning to center myself.",
            workshop: "Mindfulness Meditation"
        },
        {
            name: "Priya S.",
            age: 28,
            story: "Building resilience helped me navigate a difficult career transition. I'm stronger now and better equipped to handle life's challenges.",
            workshop: "Building Resilience"
        }
    ];
    
    // Create the stories section
    const storiesSection = document.createElement("section");
    storiesSection.className = "user-stories";
    
    // Create the heading and intro
    storiesSection.innerHTML = `
        <h2>💬 Community Stories</h2>
        <p>Real experiences from people who've participated in our workshops</p>
        <div class="stories-container"></div>
    `;
    
    // Add to page before footer
    const footer = document.querySelector("footer");
    document.body.insertBefore(storiesSection, footer);
    
    // Get the container
    const container = document.querySelector(".stories-container");
    
    // Add each story
    stories.forEach(story => {
        const storyCard = document.createElement("div");
        storyCard.className = "story-card";
        
        storyCard.innerHTML = `
            <div class="quote-mark">"</div>
            <p class="story-text">${story.story}</p>
            <p class="story-attribution">- ${story.name}, ${story.age}</p>
            <p class="story-workshop">Attended: ${story.workshop}</p>
        `;
        
        container.appendChild(storyCard);
    });
}

// Function to show a random affirmation in a popup
function showRandomAffirmation() {
    // Get a random affirmation
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const affirmation = affirmations[randomIndex];
    
    // Create the popup
    const popup = document.createElement("div");
    popup.className = "affirmation-popup";
    popup.innerHTML = `
        <div class="affirmation-content">
            <p>✨ ${affirmation} ✨</p>
        </div>
    `;
    
    // Add to body
    document.body.appendChild(popup);
    
    // Show with animation
    setTimeout(() => {
        popup.classList.add("show");
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        popup.classList.remove("show");
        setTimeout(() => {
            document.body.removeChild(popup);
        }, 500);
    }, 5000);
}

// Initialize everything
function initialize() {
    displayEvents();
    addSelfAssessmentSection();
    addBreathingExercise();
    addUserStories();
    
    // Show random affirmation occasionally
    setInterval(() => {
        // 10% chance to show an affirmation every 30 seconds
        if (Math.random() < 0.1) {
            showRandomAffirmation();
        }
    }, 30000);
}

// Run initialization when DOM is loaded
document.addEventListener("DOMContentLoaded", initialize);