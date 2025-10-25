// codepen.js - Complete with events array
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

function displayEvents(){
    var listofevents = document.getElementById("events-Container");
    if (!listofevents) return;
    
    listofevents.innerHTML = '';
    var nonFeaturedEvents = events.filter(function(event){
        return !event.featured;
    });

    nonFeaturedEvents.forEach(function(event, index){
        var eventDiv = document.createElement('div');
        eventDiv.className = 'event-card';
        eventDiv.innerHTML = '<h3>' + event.title + '</h3>' 
            + '<p>📅 ' + event.date + '</p>'
            + '<button class="details-btn" data-event-id="' + index + '">View Details</button>';
        listofevents.appendChild(eventDiv);
    });
}

function displayFeaturedEvents(){
    var featuredContainer = document.getElementById("events-grid");
    if (!featuredContainer) return;
    
    featuredContainer.innerHTML = '';
    var featuredEvents = events.filter(function(event) {
        return event.featured === true;
    });

    featuredEvents.forEach(function(event, index){
        var eventDiv = document.createElement('div');
        eventDiv.className = 'event-card featured-card';
        eventDiv.innerHTML = '<h3>' + event.title + '</h3>' 
            + '<p>📅 ' + event.date + '</p>'
            + '<button class="details-btn" data-event-id="' + index + '">View Details</button>';
        featuredContainer.appendChild(eventDiv);
    });
}

function displayAllEvents() {
    var featuredContainer = document.getElementById("events-grid");
    if (!featuredContainer) return;
    
    featuredContainer.innerHTML = '';
    events.forEach(function(event, index) {
        var eventDiv = document.createElement('div');
        eventDiv.className = 'event-card';
        eventDiv.innerHTML = '<h3>' + event.title + '</h3>' 
            + '<p>📅 ' + event.date + '</p>'
            + '<button class="details-btn" data-event-id="' + index + '">View Details</button>';
        featuredContainer.appendChild(eventDiv);
    });
}

function setupEventListeners(){
    document.addEventListener('click', function(e){
        if(e.target.classList.contains('details-btn')){
            const eventId = e.target.getAttribute('data-event-id');
            window.location.href = `eventdetails.html?id=${eventId}`;
        }
    });
}

// Initialize based on current page
if (window.location.href.includes('browse.html')) {
    displayAllEvents();
} else {
    displayEvents();
    displayFeaturedEvents();
}

setupEventListeners();