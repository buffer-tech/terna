// API endpoint
const API_URL = 'http://localhost:8000/api/home/about/';

// DOM elements
const loadingOverlay = document.getElementById('loading-overlay');
const errorMessage = document.getElementById('error-message');
const errorText = document.getElementById('error-text');

// Fetch and display about data
async function fetchAboutData() {
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        displayAboutData(data);
        hideLoading();
    } catch (error) {
        console.error('Error fetching about data:', error);
        showError(error.message);
    }
}

// Display the about data
function displayAboutData(data) {
    // Project header
    document.getElementById('project-name').textContent = data.project_name;
    document.getElementById('project-description').textContent = data.description;
    document.getElementById('version-badge').textContent = `Version ${data.version}`;
    document.getElementById('date-badge').textContent = `Launched ${data.launch_date}`;
    
    // Features
    displayFeatures(data.features);
    
    // Tech stack
    displayTechStack(data.tech_stack);
    
    // Collaborators
    displayCollaborators(data.collaborators);
}

// Display features
function displayFeatures(features) {
    const featuresGrid = document.getElementById('features-grid');
    featuresGrid.innerHTML = '';
    
    features.forEach(feature => {
        const featureCard = document.createElement('div');
        featureCard.className = 'feature-card';
        featureCard.innerHTML = `
            <div class="feature-icon">✓</div>
            <p>${feature}</p>
        `;
        featuresGrid.appendChild(featureCard);
    });
}

// Display tech stack
function displayTechStack(techStack) {
    const techDetails = document.getElementById('tech-details');
    techDetails.innerHTML = '';
    
    // Backend
    const backendDiv = createTechCategory('Backend', techStack.backend, true);
    techDetails.appendChild(backendDiv);
    
    // Frontend
    const frontendDiv = createTechCategory('Frontend', [techStack.frontend], false);
    techDetails.appendChild(frontendDiv);
    
    // API
    const apiDiv = createTechCategory('API', [techStack.api], false);
    techDetails.appendChild(apiDiv);
    
    // Authentication
    const authDiv = createTechCategory('Authentication', [techStack.authentication], false);
    techDetails.appendChild(authDiv);
}

// Create tech category element
function createTechCategory(title, items, isList) {
    const div = document.createElement('div');
    div.className = 'tech-category';
    
    const h3 = document.createElement('h3');
    h3.textContent = title;
    div.appendChild(h3);
    
    if (isList && Array.isArray(items)) {
        const ul = document.createElement('ul');
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
        div.appendChild(ul);
    } else {
        const p = document.createElement('p');
        p.textContent = items[0];
        div.appendChild(p);
    }
    
    return div;
}

// Display collaborators
function displayCollaborators(collaborators) {
    const collaboratorsGrid = document.getElementById('collaborators-grid');
    collaboratorsGrid.innerHTML = '';
    
    collaborators.forEach(collaborator => {
        const card = document.createElement('div');
        card.className = 'collaborator-card';
        
        const contributionsList = collaborator.contributions.map(c => `<li>${c}</li>`).join('');
        
        card.innerHTML = `
            <div class="card-header">
                <img src="${collaborator.avatar}" alt="${collaborator.name}" class="avatar">
                <h3>${collaborator.name}</h3>
                <p class="role">${collaborator.role}</p>
            </div>
            <div class="card-body">
                <div class="contributions">
                    <h4>Contributions:</h4>
                    <ul>${contributionsList}</ul>
                </div>
            </div>
            <div class="card-footer">
                <a href="mailto:${collaborator.email}" class="contact-link email" title="Email" aria-label="Email ${collaborator.name}">
                    📧
                </a>
                <a href="${collaborator.github}" target="_blank" rel="noopener noreferrer" class="contact-link github" title="GitHub" aria-label="${collaborator.name}'s GitHub">
                    🔗
                </a>
                <a href="${collaborator.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-link linkedin" title="LinkedIn" aria-label="${collaborator.name}'s LinkedIn">
                    💼
                </a>
            </div>
        `;
        
        collaboratorsGrid.appendChild(card);
    });
}

// Hide loading overlay
function hideLoading() {
    loadingOverlay.classList.add('hidden');
}

// Show error message
function showError(message) {
    hideLoading();
    errorText.textContent = message;
    errorMessage.style.display = 'block';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchAboutData();
});
