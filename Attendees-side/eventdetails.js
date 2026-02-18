// event-details.js - Complete with duplicated events array
var events = [
    {
        title: "Tech Conference",
        date: "March 15, 2024",
        description: "Learn about web development",
        location: "Addis Ababa",
        category: "Technology",
        featured: true
    },
    {
        title: "Music Festival",
        date: "March 20, 2024",
        description: "Local bands performance",
        location: "Meskel Square",
        category: "Music"
    },
    {
        title: "Art Festival",
        date: "March 2, 2024",
        description: "butifule art fictions",
        location: "Meskel Square",
        category: "Art Festival",
        featured: true
    },
    {
        title: "Festival",
        date: "March 30, 2024",
        description: "Local bands performance, artists work",
        location: "Meskel Square",
        category: "festival"
    },
    {
        title: "Tech Conference 2024",
        date: "March 15, 2024",
        description: "Learn about React, Node.js and modern web development.",
        location: "Conference Center, Addis Ababa",
        category: "conference",
        featured: true
    },
    {
        title: "Local Music Festival",
        date: "March 20, 2024",
        description: "Experience Ethiopian contemporary music with performances from emerging artists.",
        location: "Meskel Square, Addis Ababa",
        category: "music",
        featured: true
    },
    {
        title: "Art Exhibition Opening",
        date: "April 2, 2024",
        description: "Contemporary African art exhibition featuring local and international artists.",
        location: "National Museum of Ethiopia",
        category: "exhibition"
    },
    {
        title: "Startup Pitch Night",
        date: "April 10, 2024",
        description: "Upcoming startups present their innovative ideas to investors.",
        location: "Innovation Hub, Addis Ababa",
        category: "startup",
        featured: true
    },
    {
        title: "Food & Culture Fair",
        date: "April 20, 2024",
        description: "Taste Ethiopian dishes and explore cultural performances.",
        location: "Friendship Park, Addis Ababa",
        category: "culture"
    },
    {
        title: "Tech Career Fair",
        date: "March 25, 2024",
        description: "Meet top tech companies in Ethiopia. Bring your CV and portfolio.",
        location: "Sheraton Addis, Ballroom",
        category: "career",
        featured: true
    },
    {
        title: "Book Reading Event",
        date: "May 5, 2024",
        description: "Local authors share their latest books and stories.",
        location: "Addis Ababa University Library",
        category: "literature"
    },
    {
        title: "Green Tech Expo",
        date: "July 5, 2024",
        description: "Showcasing sustainable and eco-friendly technology solutions.",
        location: "Addis Ababa Exhibition Center",
        category: "expo"
    }
];

function loadEventDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');
    
    const eventDetailsContainer = document.getElementById('event-details-content');
    
    if (eventId && events[eventId]) {
        const event = events[eventId];
        
        eventDetailsContainer.innerHTML = `
            <div class="event-header">
                <h1>${event.title}</h1>
                <p class="event-meta">📅 ${event.date} | 📍 ${event.location} | 🏷️ ${event.category}</p>
            </div>
            
            <div class="event-body">
                <div class="event-description">
                    <h3>About This Event</h3>
                    <p>${event.description}</p>
                </div>
                
                <div class="event-info">
                    <h3>Event Details</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <strong>Date:</strong>
                            <span>${event.date}</span>
                        </div>
                        <div class="info-item">
                            <strong>Location:</strong>
                            <span>${event.location}</span>
                        </div>
                        <div class="info-item">
                            <strong>Category:</strong>
                            <span>${event.category}</span>
                        </div>
                        ${event.featured ? '<div class="featured-badge">⭐ Featured Event</div>' : ''}
                    </div>
                </div>
                
                <div class="event-actions">
                    <button class="register-btn-large">Register for this Event</button>
                    <button class="back-btn" onclick="window.history.back()">← Back to Events</button>
                </div>
            </div>
        `;
    } else {
        eventDetailsContainer.innerHTML = `
            <div class="error-message">
                <h2>Event Not Found</h2>
                <p>The event you're looking for doesn't exist or has been removed.</p>
                <button class="back-btn" onclick="window.location.href='home.html'">← Back to Home</button>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', loadEventDetails);