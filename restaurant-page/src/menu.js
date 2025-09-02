function createMenu() {
    const content = document.getElementById('content');
    
    // Clear any existing content
    content.innerHTML = '';
    
    // Create main menu container
    const main = document.createElement('main');
    main.classList.add('menu-page');
    
    // Menu header
    const header = document.createElement('div');
    header.classList.add('menu-header');
    
    const title = document.createElement('h1');
    title.textContent = 'Our Menu';
    
    const subtitle = document.createElement('p');
    subtitle.classList.add('menu-subtitle');
    subtitle.textContent = 'Authentic Regional Chinese Cuisine';
    
    header.appendChild(title);
    header.appendChild(subtitle);
    
    // Menu sections
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    
    // Helper function to create menu sections
    function createMenuSection(sectionTitle, items) {
        const section = document.createElement('div');
        section.classList.add('menu-section');
        
        const sectionHeader = document.createElement('h2');
        sectionHeader.textContent = sectionTitle;
        section.appendChild(sectionHeader);
        
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            
            const itemHeader = document.createElement('div');
            itemHeader.classList.add('item-header');
            
            const itemName = document.createElement('h3');
            itemName.textContent = item.name;
            
            const itemPrice = document.createElement('span');
            itemPrice.classList.add('price');
            itemPrice.textContent = item.price;
            
            itemHeader.appendChild(itemName);
            itemHeader.appendChild(itemPrice);
            
            const itemDescription = document.createElement('p');
            itemDescription.classList.add('item-description');
            itemDescription.textContent = item.description;
            
            menuItem.appendChild(itemHeader);
            menuItem.appendChild(itemDescription);
            section.appendChild(menuItem);
        });
        
        return section;
    }
    
    // Appetizers
    const appetizers = createMenuSection('Appetizers 🥟', [
        {
            name: 'Xiaolongbao (Soup Dumplings)',
            price: '£8.50',
            description: 'Delicate steamed dumplings filled with pork and rich broth, served with ginger soy dipping sauce.'
        },
        {
            name: 'Sichuan Wontons in Chili Oil',
            price: '£7.80',
            description: 'Handmade wontons in a spicy, aromatic chili oil with Sichuan peppercorns.'
        },
        {
            name: 'Crispy Spring Rolls',
            price: '£6.50',
            description: 'Traditional vegetable spring rolls served with sweet and sour dipping sauce.'
        },
        {
            name: 'Cold Sesame Noodles',
            price: '£7.20',
            description: 'Chilled wheat noodles tossed in creamy sesame sauce with julienned vegetables.'
        }
    ]);
    
    // Main Dishes
    const mains = createMenuSection('Main Dishes 🍜', [
        {
            name: 'Peking Duck',
            price: '£28.00',
            description: 'Half duck roasted to perfection, served with pancakes, spring onions, cucumber, and hoisin sauce.'
        },
        {
            name: 'Mapo Tofu',
            price: '£12.50',
            description: 'Silky tofu in spicy Sichuan sauce with minced pork and fermented black beans.'
        },
        {
            name: 'Kung Pao Chicken',
            price: '£14.80',
            description: 'Diced chicken stir-fried with peanuts, vegetables, and dried chilies in savory sauce.'
        },
        {
            name: 'Sweet and Sour Fish',
            price: '£18.60',
            description: 'Fresh fish fillets in golden batter with pineapple, bell peppers in tangy sauce.'
        },
        {
            name: 'Beef in Black Bean Sauce',
            price: '£16.20',
            description: 'Tender beef strips wok-fried with onions and peppers in aromatic black bean sauce.'
        },
        {
            name: 'Ma La Hot Pot',
            price: '£24.00',
            description: 'Traditional Sichuan hot pot with mixed vegetables, tofu, and your choice of meat.'
        }
    ]);
    
    // Rice & Noodles
    const riceNoodles = createMenuSection('Rice & Noodles 🍚', [
        {
            name: 'Yangzhou Fried Rice',
            price: '£10.50',
            description: 'Classic fried rice with shrimp, char siu pork, eggs, and mixed vegetables.'
        },
        {
            name: 'Dan Dan Noodles',
            price: '£11.80',
            description: 'Sichuan street food favorite with hand-pulled noodles in spicy sesame sauce.'
        },
        {
            name: 'Beef Chow Mein',
            price: '£12.20',
            description: 'Stir-fried egg noodles with tender beef strips and crisp vegetables.'
        },
        {
            name: 'Clay Pot Rice',
            price: '£13.50',
            description: 'Traditional clay pot rice with Chinese sausage, mushrooms, and seasonal vegetables.'
        }
    ]);
    
    // Desserts
    const desserts = createMenuSection('Desserts 🥮', [
        {
            name: 'Mango Pudding',
            price: '£5.50',
            description: 'Silky smooth mango pudding topped with fresh mango pieces and coconut flakes.'
        },
        {
            name: 'Sesame Balls',
            price: '£6.00',
            description: 'Deep-fried glutinous rice balls filled with red bean paste and coated in sesame seeds.'
        },
        {
            name: 'Almond Tofu',
            price: '£4.80',
            description: 'Light and refreshing almond-flavored tofu served with mixed fruit.'
        }
    ]);
    
    // Beverages
    const beverages = createMenuSection('Beverages 🍵', [
        {
            name: 'Jasmine Tea',
            price: '£3.50',
            description: 'Premium jasmine green tea, traditionally served in a ceramic pot.'
        },
        {
            name: 'Oolong Tea',
            price: '£4.00',
            description: 'High-quality oolong tea with complex floral and fruity notes.'
        },
        {
            name: 'Fresh Lychee Juice',
            price: '£4.50',
            description: 'Refreshing lychee juice made from fresh fruit.'
        },
        {
            name: 'Chinese Herbal Tea',
            price: '£5.00',
            description: 'Traditional herbal blend promoting health and wellness.'
        }
    ]);
    
    // Append all sections to menu container
    menuContainer.appendChild(appetizers);
    menuContainer.appendChild(mains);
    menuContainer.appendChild(riceNoodles);
    menuContainer.appendChild(desserts);
    menuContainer.appendChild(beverages);
    
    // Append header and container to main
    main.appendChild(header);
    main.appendChild(menuContainer);
    
    // Append main to content div
    content.appendChild(main);
}

export default createMenu;
