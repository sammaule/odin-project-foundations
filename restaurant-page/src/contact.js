function createContact() {
    const content = document.getElementById('content');
    
    // Clear any existing content
    content.innerHTML = '';
    
    // Create main contact container
    const main = document.createElement('main');
    main.classList.add('contact-page');
    
    // Contact header
    const header = document.createElement('div');
    header.classList.add('contact-header');
    
    const title = document.createElement('h1');
    title.textContent = 'Contact Us';
    
    const subtitle = document.createElement('p');
    subtitle.classList.add('contact-subtitle');
    subtitle.textContent = 'Get in touch with Golden Dragon';
    
    header.appendChild(title);
    header.appendChild(subtitle);
    
    // Contact content container
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    
    // Restaurant information section
    const infoSection = document.createElement('div');
    infoSection.classList.add('contact-section', 'restaurant-info');
    
    const infoTitle = document.createElement('h2');
    infoTitle.textContent = '🏮 Restaurant Information';
    infoSection.appendChild(infoTitle);
    
    // Address
    const addressDiv = document.createElement('div');
    addressDiv.classList.add('contact-item');
    
    const addressLabel = document.createElement('h3');
    addressLabel.textContent = '📍 Address';
    
    const addressText = document.createElement('p');
    addressText.innerHTML = '123 Chinatown Street<br>London, WC2H 7DE<br>United Kingdom';
    
    addressDiv.appendChild(addressLabel);
    addressDiv.appendChild(addressText);
    
    // Phone
    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('contact-item');
    
    const phoneLabel = document.createElement('h3');
    phoneLabel.textContent = '📞 Phone';
    
    const phoneText = document.createElement('p');
    phoneText.innerHTML = '+44 20 7123 4567<br>For reservations and inquiries';
    
    phoneDiv.appendChild(phoneLabel);
    phoneDiv.appendChild(phoneText);
    
    // Email
    const emailDiv = document.createElement('div');
    emailDiv.classList.add('contact-item');
    
    const emailLabel = document.createElement('h3');
    emailLabel.textContent = '✉️ Email';
    
    const emailText = document.createElement('p');
    emailText.innerHTML = 'info@goldendragonlondon.co.uk<br>reservations@goldendragonlondon.co.uk';
    
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailText);
    
    infoSection.appendChild(addressDiv);
    infoSection.appendChild(phoneDiv);
    infoSection.appendChild(emailDiv);
    
    // Opening hours section
    const hoursSection = document.createElement('div');
    hoursSection.classList.add('contact-section', 'opening-hours');
    
    const hoursTitle = document.createElement('h2');
    hoursTitle.textContent = '🕒 Opening Hours';
    hoursSection.appendChild(hoursTitle);
    
    const hoursTable = document.createElement('div');
    hoursTable.classList.add('hours-table');
    
    const hoursData = [
        { day: 'Monday - Thursday', hours: '12:00 PM - 10:00 PM' },
        { day: 'Friday - Saturday', hours: '12:00 PM - 11:00 PM' },
        { day: 'Sunday', hours: '12:00 PM - 9:30 PM' }
    ];
    
    hoursData.forEach(item => {
        const hourRow = document.createElement('div');
        hourRow.classList.add('hour-row');
        
        const daySpan = document.createElement('span');
        daySpan.classList.add('day');
        daySpan.textContent = item.day;
        
        const hoursSpan = document.createElement('span');
        hoursSpan.classList.add('hours');
        hoursSpan.textContent = item.hours;
        
        hourRow.appendChild(daySpan);
        hourRow.appendChild(hoursSpan);
        hoursTable.appendChild(hourRow);
    });
    
    hoursSection.appendChild(hoursTable);
    
    // Special note
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('special-note');
    noteDiv.innerHTML = '<p><strong>Note:</strong> We recommend making a reservation, especially for weekend dining. Last orders are taken 30 minutes before closing time.</p>';
    hoursSection.appendChild(noteDiv);
    
    // Location and transport section
    const locationSection = document.createElement('div');
    locationSection.classList.add('contact-section', 'location-info');
    
    const locationTitle = document.createElement('h2');
    locationTitle.textContent = '🚇 How to Find Us';
    locationSection.appendChild(locationTitle);
    
    const transportInfo = document.createElement('div');
    transportInfo.classList.add('transport-info');
    
    const tubeDiv = document.createElement('div');
    tubeDiv.classList.add('transport-item');
    
    const tubeLabel = document.createElement('h3');
    tubeLabel.textContent = 'Underground';
    
    const tubeText = document.createElement('p');
    tubeText.textContent = 'Leicester Square Station (3 min walk) - Northern & Piccadilly Lines';
    
    tubeDiv.appendChild(tubeLabel);
    tubeDiv.appendChild(tubeText);
    
    const busDiv = document.createElement('div');
    busDiv.classList.add('transport-item');
    
    const busLabel = document.createElement('h3');
    busLabel.textContent = 'Bus';
    
    const busText = document.createElement('p');
    busText.textContent = 'Multiple bus routes serve the area: 14, 19, 22, 24, 29, 38, 176';
    
    busDiv.appendChild(busLabel);
    busDiv.appendChild(busText);
    
    const parkingDiv = document.createElement('div');
    parkingDiv.classList.add('transport-item');
    
    const parkingLabel = document.createElement('h3');
    parkingLabel.textContent = 'Parking';
    
    const parkingText = document.createElement('p');
    parkingText.textContent = 'Limited street parking. Nearest car park: NCP Chinatown (2 min walk)';
    
    parkingDiv.appendChild(parkingLabel);
    parkingDiv.appendChild(parkingText);
    
    transportInfo.appendChild(tubeDiv);
    transportInfo.appendChild(busDiv);
    transportInfo.appendChild(parkingDiv);
    
    locationSection.appendChild(transportInfo);
    
    // Events and bookings section
    const eventsSection = document.createElement('div');
    eventsSection.classList.add('contact-section', 'events-info');
    
    const eventsTitle = document.createElement('h2');
    eventsTitle.textContent = '🎉 Private Events & Bookings';
    eventsSection.appendChild(eventsTitle);
    
    const eventsText = document.createElement('p');
    eventsText.textContent = 'Golden Dragon is perfect for special occasions, corporate events, and private dining. We can accommodate groups of 20-80 guests with customized menus and dedicated service.';
    
    const eventsContact = document.createElement('p');
    eventsContact.innerHTML = '<strong>For private bookings:</strong><br>Call: +44 20 7123 4567<br>Email: events@goldendragonlondon.co.uk';
    
    eventsSection.appendChild(eventsText);
    eventsSection.appendChild(eventsContact);
    
    // Append all sections to contact container
    contactContainer.appendChild(infoSection);
    contactContainer.appendChild(hoursSection);
    contactContainer.appendChild(locationSection);
    contactContainer.appendChild(eventsSection);
    
    // Append header and container to main
    main.appendChild(header);
    main.appendChild(contactContainer);
    
    // Append main to content div
    content.appendChild(main);
}

export default createContact;
