// This file contains the objects to store the data in objects for each of the point of interest

// window.onload = function () {
    // window.onload is commented for now bcz it interferes with the functionality of the dropdown JS (app.js) file

    // declaring an array of object to to store the values 
    let parkFeature = [{
            name: 'Bike Trail',
            colour: '#ea9154',
            icon: 'images/bike_path_icon.svg',
            about: '<p>This is a 7 km paved multi-use recreational trail that stretches from Lakeview Park to the Oshawa Valley Botanical Garden. Surrounded by lush vegetation the recreational trail meanders along the Oshawa Creek.</p><p> Along the recreational trail there are connections to other recreational trails including the Michael Starr Trail, Harmony Creek Trail, and other attractions including Oshawa Valley Botanical Garden and downtown Oshawa.</p> <p> Portions of the recreational trail travel close to the creek and has steep slopes, sharp turns and unprotected edges. Caution should be used when accessing and maneuvering the recreational trail.</p>',
            galleryImages: ['images/temp_pic1.jpg', 'images/temp_pic1.jpg', 'images/temp_pic1.jpg', 'images/temp_pic1.jpg'],
            paths: ['bike_to_peony', 'bike_to_waterfall', 'bike_to_bridge', 'bike_to_daylily', 'bike_to_memory']
        },
        {
            name: 'Peony Garden',
            colour: '#CC7B94',
            icon: 'images/peony_icon.svg',
            about: '<p>The Peony Garden is located within the Oshawa Valley Botanical Garden. In 2001, the Canadian Peony Society donated 100 plants from the Wally Gilbert Collection to the project. This contribution led to the official launch of the Oshawa Valley Botanical Garden.</p> <p>Further donations from peony breeders and suppliers across North America have led to the entire collection flourishing into the largest contemporary collection of peonies in North America. With more than 300 varieties in cultivation, the collection is truly impressive!</p> <p>The succession of blooms begins in late May and continues through to the last week of June. The Annual Peony Festival coincides with the climax of the bloom cycle in June.</p>',
            galleryImages: ['images/temp_pic2.jpg', 'images/temp_pic2.jpg', 'images/temp_pic2.jpg', 'images/temp_pic2.jpg'],
            paths: ['peony_to_bike', 'peony_to_waterfall', 'peony_to_bridge', 'peony_to_daylily', 'peony_to_memory']
        },
        {
            name: 'Waterfall Garden',
            colour: '#3995B1',
            icon: 'images/water_feature_icon.svg',
            about: '<p>The Rockery Garden is located within Kinsman Valley Park of the Oshawa Valley Botanical Garden. It is just north of the Peony Garden and features a waterfall.</p> <p>The garden and its surroundings provides the perfect opportunity to enjoy nature and is a beautiful backdrop for any occasion.',
            galleryImages: ['images/temp_pic3.jpg', 'images/temp_pic3.jpg', 'images/temp_pic3.jpg', 'images/temp_pic3.jpg'],
            paths: ['waterfall_to_peony', 'waterfall_to_bike', 'waterfall_to_bridge', 'waterfall_to_daylily', 'waterfall_to_memory']
        },
        {
            name: 'Rotary Bridge',
            colour: '#9D885F',
            icon: 'images/bridge_icon.svg',
            about: '<p>Rotary Bridge was dedicated by the Rotary Club Oshawa-Parkwood and opened in celebration of the 100th anniversary of Rotary International in 2006.</p> <p>It is located over The Oshawa Creek in The Oshawa Valley Botanical Gardens and it will serve to remind the citizens of Oshawa of the tremendous acts of service that both Rotary Clubs have performed for so many years.</p>',
            galleryImages: ['images/temp_pic4.jpg', 'images/temp_pic4.jpg', 'images/temp_pic4.jpg', 'images/temp_pic4.jpg'],
            paths: ['bridge_to_peony', 'bridge_to_waterfall', 'bridge_to_bike', 'bridge_to_daylily', 'bridge_to_memory']
        },
        {
            name: 'Daylily Collection',
            colour: '#967EA5',
            icon: 'images/daylily_icon.svg',
            about: '<p>The one of a kind collection of locally hybridized daylilies addition to the already beautiful gardens was made possible by the generous donation from Henry Lorrain and the late Douglas Lycett, founders of We’re in the Hayfield Now.</p> <p>The City would like to thank the volunteers including the Oshawa Garden Club, Brooklin Horticulture Society and individual volunteers who dedicated their time to dig, transport, store and replant the daylilies to make this collection a reality.</p> <p>The 265 daylily collection was established in 2017 and can be found on the east side of the Oshawa Creek directly across from the Peony Garden with access to the Kolodzie Oshawa Creek Bike Path.</p>',
            galleryImages: ['images/temp_pic5.jpg', 'images/temp_pic5.jpg', 'images/temp_pic5.jpg', 'images/temp_pic5.jpg'],
            paths: ['daylily_to_peony', 'daylily_to_waterfall', 'daylily_to_beidge', 'daylily_to_bike', 'daylily_to_memory']
        },
        {
            name: 'Memory Garden',
            colour: '#547EAC',
            icon: 'images/memory_garden_icon.svg',
            about: '<p>The Memory Garden is comprised of several gardens and includes tree lined walkways and a central gathering area which provides a formal gathering space and opportunities for passive recreation. The Memory Garden provides an opportunity where residents can honour and remember loved ones through the Commemorative Tree and Bench program.</p> <p>Visitors to the Oshawa Valley Botanical Gardens can now enjoy a new shade structure thanks to donations from the Rotary Club of Oshawa and the Rotary Club of Oshawa-Parkwood.</p> <p>The shade structure is classically designed and features an antique bronze Rotary emblem in the center of the floor, perfect for quiet contemplation, as a centrepiece for photographs or as a formal wedding ceremony.</p>',
            galleryImages: ['images/temp_pic6.jpg', 'images/temp_pic6.jpg', 'images/temp_pic6.jpg', 'images/temp_pic6.jpg'],
            paths: ['memory_to_peony', 'memory_to_waterfall', 'memory_to_bridge', 'memory_to_daylily', 'memory_to_bike']
        },
    ];

    // Constants to access the tabs
    const TABS = document.querySelectorAll('.tab');

    // Info panel elements
    const TITLE_BAR = document.querySelector('#titleBar');
    const TITLE = document.querySelector('#title');
    const TITLE_BAR_ICON = document.querySelector('#titleBarIcon');
    const GALLERY_IMAGES = document.querySelectorAll('.galleryImage');
    const ABOUT_TEXT = document.querySelector('#about');
    const DESTINATIONS = document.querySelectorAll('.menuItem');
    let activeColour = "";


    // This block of code will parse the data from the URL of the page and determine which tab to open when the app initially opens
    // determining the ID of the tab
    let params = new URLSearchParams(location.search);
    let parsed = params.get('id');
    let i = parseInt(parsed);
    if (!isNaN(i)) {
        // setting the color scheme and the content inside the info panel based on the id parsed from the tab AND ONLY IF THE ID IS AVAILABLE IN THE URL
        // if no ID is available, then it will load the default HTML

        resetTabAppearance();
        activeColour = parkFeature[i].colour;
        TABS[i].style.backgroundColor = activeColour;
        TITLE_BAR.style.backgroundColor = activeColour;
        TITLE.textContent = parkFeature[i].name;
        TITLE_BAR_ICON.src = parkFeature[i].icon;
        for (let j in GALLERY_IMAGES)
            GALLERY_IMAGES[j].src = parkFeature[i].galleryImages[j];
        // for (let j in DESTINATIONS)
        //     DESTINATIONS[j].textContent = parkFeature[i].paths[j];
        ABOUT_TEXT.innerHTML = parkFeature[i].about;
    }

    // seting event listener on each tab using a loop (to reduce redundant code)
    // will allow the user to click each tab and based on the tab selected, it will populate the content
    for (let i in TABS) {

        TABS[i].addEventListener('click', function () {
            resetTabAppearance();
            activeColour = parkFeature[i].colour;
            TABS[i].style.backgroundColor = activeColour;
            TITLE_BAR.style.backgroundColor = activeColour;
            TITLE.textContent = parkFeature[i].name;
            TITLE_BAR_ICON.src = parkFeature[i].icon;
            for (let j in GALLERY_IMAGES)
                GALLERY_IMAGES[j].src = parkFeature[i].galleryImages[j];

                // The below code sets the items in the drop down to the path names when bottom nav items are clicked
                // The text is already updated to the selected destination in the drop down code in app.js
                // Consider removing
            // for (let j in DESTINATIONS)
            //     DESTINATIONS[j].textContent = parkFeature[i].paths[j];
            ABOUT_TEXT.innerHTML = parkFeature[i].about;
        });
    }

    // Functions to reset the appearance of the tabs
    function resetTabAppearance() {
        for (let i = 0; i < 6; i++) {
            TABS[i].style.backgroundColor = '#707070';
            TITLE_BAR.style.backgroundColor = '#383838';
        }
    }

// }