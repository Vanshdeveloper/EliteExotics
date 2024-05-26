function toggleMenu() {
    let navLinks = document.querySelector('.ul');
    navLinks.classList.toggle('open');

    // Add or remove the event listener based on menu state
    if (navLinks.classList.contains('open')) {
        document.addEventListener('click', closeMenuOutside);
    } else {
        document.removeEventListener('click', closeMenuOutside);
    }
}

function closeMenuOutside(event) {
    let navLinks = document.querySelector('.ul');
    let menuIcon = document.querySelector('.nav-opn-btn');

    // Check if the clicked element is not within the menu or menu icon
    if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
        navLinks.classList.remove('open');
        document.removeEventListener('click', closeMenuOutside);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Array to hold car data
    const carsData = [
        {
            "make": "Ferrari",
            "model": "LaFerrari",
            "year": 2015,
            "engine": "6.3L V12 hybrid",
            "horsepower": 950,
            "torque": 900,
            "top_speed": "350 km/h",
            "acceleration_0_100": "2.4 seconds",
            "price": "$1,420,000",
            "image_url": "Assests/laFerrari.jpg"
        },
        {
            "make": "Ferrari",
            "model": "SF90 Stradale",
            "year": 2020,
            "engine": "4.0L V8 hybrid",
            "horsepower": 986,
            "torque": 800,
            "top_speed": "340 km/h",
            "acceleration_0_100": "2.5 seconds",
            "price": "$625,000",
            "image_url": "Assests/ferrari-SF90.jpg"
        },
        {
            "make": "Lamborghini",
            "model": "Aventador SVJ",
            "year": 2019,
            "engine": "6.5L V12",
            "horsepower": 759,
            "torque": 720,
            "top_speed": "351 km/h",
            "acceleration_0_100": "2.8 seconds",
            "price": "$517,770",
            "image_url": "Assests/lam-aventador.jpg"
        },
        {
            "make": "Bugatti",
            "model": "Chiron",
            "year": 2018,
            "engine": "8.0L Quad-Turbocharged W16",
            "horsepower": 1500,
            "torque": 1600,
            "top_speed": "420 km/h",
            "acceleration_0_100": "2.4 seconds",
            "price": "$3,000,000",
            "image_url": "Assests/bugatti-chiron.jpg"
        },
        {
            "make": "McLaren",
            "model": "P1",
            "year": 2015,
            "engine": "3.8L Twin-Turbo V8 hybrid",
            "horsepower": 903,
            "torque": 900,
            "top_speed": "350 km/h",
            "acceleration_0_100": "2.7 seconds",
            "price": "$1,150,000",
            "image_url": "Assests/mclaren-p1.jpg"
        },
        {
            "make": "Porsche",
            "model": "918 Spyder",
            "year": 2015,
            "engine": "4.6L V8 hybrid",
            "horsepower": 887,
            "torque": 944,
            "top_speed": "340 km/h",
            "acceleration_0_100": "2.6 seconds",
            "price": "$845,000",
            "image_url": "Assests/porsche-918.jpg"
        },
        {
            "make": "Koenigsegg",
            "model": "Agera RS",
            "year": 2017,
            "engine": "5.0L Twin-Turbo V8",
            "horsepower": 1160,
            "torque": 1280,
            "top_speed": "447 km/h",
            "acceleration_0_100": "2.6 seconds",
            "price": "$2,500,000",
            "image_url": "Assests/koenigsegg-agera-rs.jpg"
        },
        {
            "make": "Pagani",
            "model": "Huayra (Special Edition)",
            "year": 2012,
            "engine": "6.0L Twin-Turbo V12",
            "horsepower": 730,
            "torque": 1000,
            "top_speed": "383 km/h",
            "acceleration_0_100": "2.8 seconds",
            "price": "$2,600,000",
            "image_url": "Assests/pagani.jpg"
        },
        {
            "make": "Aston Martin",
            "model": "Valkyrie",
            "year": 2021,
            "engine": "6.5L V12 hybrid",
            "horsepower": 1160,
            "torque": 900,
            "top_speed": "402 km/h",
            "acceleration_0_100": "2.5 seconds",
            "price": "$3,000,000",
            "image_url": "Assests/aston-martin.jpg"
        },
        {
            "make": "Mercedes-Benz",
            "model": "AMG One",
            "year": 2021,
            "engine": "1.6L V6 hybrid",
            "horsepower": 1000,
            "torque": 1000,
            "top_speed": "350 km/h",
            "acceleration_0_100": "2.7 seconds",
            "price": "$2,720,000",
            "image_url": "Assests/mercedes-one.jpg"
        },
        {
            "make": "Ford",
            "model": "GT",
            "year": 2017,
            "engine": "3.5L Twin-Turbo V6",
            "horsepower": 647,
            "torque": 746,
            "top_speed": "348 km/h",
            "acceleration_0_100": "3.0 seconds",
            "price": "$500,000",
            "image_url": "Assests/ford-GT.jpg"
        },
        {
            "make": "Chevrolet",
            "model": "Corvette ZR1",
            "year": 2019,
            "engine": "6.2L Supercharged V8",
            "horsepower": 755,
            "torque": 969,
            "top_speed": "341 km/h",
            "acceleration_0_100": "2.9 seconds",
            "price": "$121,000",
            "image_url": "Assests/corvette-ZR1.jpg"
        },
        {
            "make": "Nissan",
            "model": "GT-R Nismo (Stage-2 Tuned)",
            "year": 2020,
            "engine": "3.8L Twin-Turbo V6",
            "horsepower": 600,
            "torque": 652,
            "top_speed": "330 km/h",
            "acceleration_0_100": "2.5 seconds",
            "price": "$210,000",
            "image_url": "Assests/gtr.jpg"
        },
        {
            "make": "Hennessey",
            "model": "Venom F5",
            "year": 2021,
            "engine": "6.6L Twin-Turbo V8",
            "horsepower": 1817,
            "torque": 1617,
            "top_speed": "484 km/h",
            "acceleration_0_100": "2.6 seconds",
            "price": "$1,800,000",
            "image_url": "Assests/Hennessey.jpg"
        },
        {
            "make": "SSC",
            "model": "Tuatara",
            "year": 2020,
            "engine": "5.9L Twin-Turbo V8",
            "horsepower": 1750,
            "torque": 1735,
            "top_speed": "455 km/h",
            "acceleration_0_100": "2.5 seconds",
            "price": "$1,625,000",
            "image_url": "Assests/SSC-Tuatara.jpg"
        }
    ];

    // Reference to the container where cars will be displayed
    const carsContainer = document.querySelector('.cars-cont');
    // Reference to the "Show More Cars" button
    const showMoreBtn = document.getElementById('show-more-btn');

    // Variable to keep track of how many cars are currently displayed
    let displayedCars = 4;

    // Function to display a given list of cars
    function displayCars(cars) {
        // Clear the container before adding new cars
        carsContainer.innerHTML = '';
        cars.forEach(car => {
            // Create a div element for each car
            const carItem = document.createElement('div');
            carItem.className = 'car-item';
            // Set the inner HTML of the car item with the car data
            carItem.innerHTML = `
                <img src="${car.image_url}" alt="${car.make} ${car.model}">
                <h3>${car.make} ${car.model}</h3>
                <p>${car.year} | ${car.engine} | ${car.horsepower} HP</p>
                <p>${car.price}</p>
            `;
            // Add an event listener to show car details when the car is clicked
            carItem.addEventListener('click', () => {
                showCarDetails(car);
            });
            // Append the car item to the container
            carsContainer.appendChild(carItem);
        });
    }

    // Function to show the details of a clicked car in a modal
    function showCarDetails(car) {
        // Reference to modal elements
        const modal = document.getElementById('car-modal');
        const modalImage = document.getElementById('modal-car-image');
        const modalName = document.getElementById('modal-car-name');
        const modalDescription = document.getElementById('modal-car-description');
        const modalDetails = document.getElementById('modal-car-details');

        // Set the modal content with the car details
        modalImage.src = car.image_url;
        modalName.textContent = `${car.make} ${car.model}`;
        modalDescription.textContent = `${car.year} | ${car.engine} | ${car.horsepower} HP`;
        modalDetails.innerHTML = `
            <p>Top Speed: ${car.top_speed}</p>
            <p>0-100 km/h: ${car.acceleration_0_100}</p>
            <p>Price: ${car.price}</p>
        `;

        // Display the modal
        modal.style.display = 'block';
    }

    // Event listener for the "Show More Cars" button
    showMoreBtn.addEventListener('click', () => {
        // Increase the number of displayed cars by 4
        displayedCars += 11;
        // If the displayed cars exceed the total number of cars, hide the button
        if (displayedCars >= carsData.length) {
            displayedCars = carsData.length;
            showMoreBtn.style.display = 'none';
        }
        // Display the cars
        displayCars(carsData.slice(0, displayedCars));
    });

    // Display the initial set of cars
    displayCars(carsData.slice(0, displayedCars));

    // References to the modal and the close button
    const modal = document.getElementById('car-modal');
    const closeModalBtn = document.querySelector('.close-btn');

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Close the modal when clicking outside of it
    window.onclick = function (event) {
        if (event.target === modal) {
            closeModal();
        }
    }

    // Close the modal when clicking the close button
    closeModalBtn.onclick = closeModal;

    // Add event listeners for the test drive and purchase buttons
    document.getElementById('book-test-drive').addEventListener('click', () => openFormModal('Test Drive'));
    document.getElementById('purchase-car').addEventListener('click', () => openFormModal('Purchase Car'));
});


function openFormModal(action) {
    const formModal = document.getElementById('form-modal');
    const formTitle = document.getElementById('form-title');
    const userForm = document.getElementById('user-form');

    // Set the form title based on the action (Book Test Drive or Purchase Car)
    formTitle.textContent = action;

    // Show the form modal
    formModal.style.display = 'block';

    // Handle form submission
    userForm.onsubmit = function(event) {
        event.preventDefault();
        alert(`${action} form submitted! \n Other Details are sent to your Email \n         *Not REALLY😁*`);
        closeModal('form-modal');
    };

    userForm.reset()
}

// Function to close the modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Add event listeners for the close buttons
document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', () => {
        closeModal(button.parentElement.parentElement.id);
    });
});
