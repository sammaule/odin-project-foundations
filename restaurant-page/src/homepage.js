function createHomepage() {
    const content = document.getElementById('content');
    
    // Clear any existing content
    content.innerHTML = '';
    
    // Create main homepage container
    const main = document.createElement('main');
    main.classList.add('homepage');
    
    // Create hero section
    const heroSection = document.createElement('div');
    heroSection.classList.add('hero-section');
    
    // Hero image
    const heroImage = document.createElement('img');
    heroImage.src = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
    heroImage.alt = 'Golden Dragon Restaurant Interior';
    heroImage.classList.add('hero-image');
    
    // Restaurant title
    const title = document.createElement('h1');
    title.textContent = 'Golden Dragon';
    
    // Tagline
    const tagline = document.createElement('p');
    tagline.classList.add('tagline');
    tagline.textContent = 'Authentic Regional Chinese Cuisine in the Heart of London';
    
    // Append hero elements
    heroSection.appendChild(heroImage);
    heroSection.appendChild(title);
    heroSection.appendChild(tagline);
    
    // Create welcome section
    const welcomeSection = document.createElement('div');
    welcomeSection.classList.add('welcome-section');
    
    // Welcome heading
    const welcomeHeading = document.createElement('h2');
    welcomeHeading.textContent = 'Welcome to Golden Dragon';
    
    // Welcome paragraphs
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = 'Nestled in the vibrant streets of London, Golden Dragon brings you the authentic flavors of regional Chinese cuisine. Our family-owned restaurant has been serving the local community for over 20 years, combining traditional recipes passed down through generations with the finest fresh ingredients.';
    
    const paragraph2 = document.createElement('p');
    paragraph2.textContent = 'From the spicy delights of Sichuan province to the delicate dim sum of Guangdong, our menu celebrates the diverse culinary traditions of China. Each dish is carefully crafted by our experienced chefs who trained in the regions where these recipes originated.';
    
    const paragraph3 = document.createElement('p');
    paragraph3.textContent = 'Whether you\'re joining us for a casual lunch, intimate dinner, or special celebration, Golden Dragon offers an unforgettable dining experience that transports you straight to the bustling markets and family kitchens of China.';
    
    // Create highlights section
    const highlights = document.createElement('div');
    highlights.classList.add('highlights');
    
    // Helper function to create highlight items
    function createHighlightItem(emoji, title, description) {
        const item = document.createElement('div');
        item.classList.add('highlight-item');
        
        const heading = document.createElement('h3');
        heading.textContent = `${emoji} ${title}`;
        
        const desc = document.createElement('p');
        desc.textContent = description;
        
        item.appendChild(heading);
        item.appendChild(desc);
        
        return item;
    }
    
    // Create highlight items
    const highlight1 = createHighlightItem('🥟', 'Authentic Recipes', 'Traditional dishes prepared using time-honored techniques and authentic ingredients.');
    const highlight2 = createHighlightItem('🌶️', 'Regional Specialties', 'Explore the diverse flavors from different provinces of China, from mild Cantonese to spicy Sichuan.');
    const highlight3 = createHighlightItem('🏮', 'Warm Atmosphere', 'Experience genuine Chinese hospitality in our beautifully decorated dining rooms.');
    
    // Append highlight items to highlights container
    highlights.appendChild(highlight1);
    highlights.appendChild(highlight2);
    highlights.appendChild(highlight3);
    
    // Append all elements to welcome section
    welcomeSection.appendChild(welcomeHeading);
    welcomeSection.appendChild(paragraph1);
    welcomeSection.appendChild(paragraph2);
    welcomeSection.appendChild(paragraph3);
    welcomeSection.appendChild(highlights);
    
    // Append sections to main
    main.appendChild(heroSection);
    main.appendChild(welcomeSection);
    
    // Append main to content div
    content.appendChild(main);
}

export default createHomepage;
