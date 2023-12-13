const admin = require("firebase-admin");
const serviceAccount = require("./innovationogtekt-firebase-adminsdk-ec56o-8d9c418cd2.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://innovationogtekt-default-rtdb.europe-west1.firebasedatabase.app",
});

const db = admin.firestore();

const filters = {
  Area: ["København K", "Østerbro", "Nørrebro", "Vesterbro", "Amager", "Sydhavn", "Frederiksberg", "Valby"],
  "Age Requirement": ["18+", "21+", "25+"],
  Atmosphere: ["Casual", "Upscale", "Dive Bar", "Sports Bar", "Rooftop", "Beachfront"],
  Capacity: ["Small (<50 people)", "Medium (50-150 people)", "Large (>150 people)"],
  "Live Music": ["Yes, frequently", "Occasionally", "No live music"],
  "Music Genre": ["Blues", "Classical", "Rock", "Pop", "Jazz", "Electronic", "Country", "R&B", "Reggae", "Mixed"],
  "Opening Hours": ["Morning (8am - 12pm)", "Afternoon (12pm - 5pm)", "Evening (5pm - 10pm)", "Late Night (10pm - 3am)"],
  Price: ["$ (Budget-friendly)", "$$ (Moderate)", "$$$ (Pricey)", "$$$$ (Upscale)"],
  "Table Service": ["Available", "Not available"],
};

function validateInput(value, filterKey) {
  // Check if value is an array or a single value
  if (Array.isArray(value)) {
    // Validate each value in the array
    value.forEach(val => {
      if (!filters[filterKey].includes(val)) {
        throw new Error(`Invalid value for ${filterKey}: ${val}`);
      }
    });
  } else {
    // Validate the single value
    if (!filters[filterKey].includes(value)) {
      throw new Error(`Invalid value for ${filterKey}: ${value}`);
    }
  }
}

async function addVenue(Area, AgeRequirement, Atmosphere, Capacity, Description, LiveMusic, MusicGenre, OpeningHours, Price, TableService, VenueName) {
  // Validate each input against the filters
  validateInput(Area, 'Area');
  validateInput(AgeRequirement, 'Age Requirement');
  validateInput(Atmosphere, 'Atmosphere');
  validateInput(Capacity, 'Capacity');
  validateInput(LiveMusic, 'Live Music');
  validateInput(MusicGenre, 'Music Genre');
  validateInput(OpeningHours, 'Opening Hours');
  validateInput(Price, 'Price');
  validateInput(TableService, 'Table Service');

  const venueData = {
    area: Area,
    ageRequirement: AgeRequirement,
    atmosphere: Atmosphere,
    capacity: Capacity,
    description: Description,
    liveMusic: LiveMusic,
    musicGenre: MusicGenre,
    openingHours: OpeningHours,
    price: Price,
    tableService: TableService,
    venueName: VenueName,
  };

  await db.collection("VenueList").doc(VenueName).set(venueData);
  console.log(`${VenueName} document created successfully.`);
}

// Example usage:
addVenue(
  "Østerbro", 
  "21+", 
  "Upscale", 
  "Large (>150 people)", 
  "A modern concert hall designed by French architect Jean Nouvel with amazing acoustics.", 
  "Yes, frequently", 
  ["Classical", "Mixed"], 
  "Evening (5pm - 10pm)", 
  "$$$ (Pricey)", 
  "Not available", 
  "DR Koncerthuset"
).catch(error => console.error(error.message));

addVenue(
  "Vesterbro", 
  "18+", 
  "Casual", 
  "Medium (50-150 people)", 
  "Popular music and party venue hosting a wide range of genres.", 
  "Yes, frequently", 
  "Mixed", 
  "Evening (5pm - 10pm)", 
  "$$ (Moderate)", 
  "Not available", 
  "VEGA"
);

addVenue(
  "Nørrebro", 
  "21+", 
  "Dive Bar", 
  "Small (<50 people)", 
  "Renowned nightclub for electronic music, featuring international and local DJs.", 
  "Occasionally", 
  "Electronic", 
  "Late Night (10pm - 3am)", 
  "$$ (Moderate)", 
  "Available", 
  "Culture Box"
);
addVenue(
  "Amager", 
  "18+", 
  "Upscale", 
  "Large (>150 people)", 
  "Multi-purpose arena for major concerts and sports events.", 
  "Yes, frequently", 
  "Mixed", 
  "Evening (5pm - 10pm)", 
  "$$$ (Pricey)", 
  "Available", 
  "Royal Arena"
);
addVenue(
  "København K", 
  "18+", 
  "Casual", 
  "Small (<50 people)", 
  "Historic music venue known for rock, soul, and blues concerts.", 
  "Yes, frequently", 
  "Mixed", 
  "Evening (5pm - 10pm)", 
  "$ (Budget-friendly)", 
  "Not available", 
  "Drop Inn"
);
addVenue(
  "Vesterbro", 
  "18+", 
  "Casual", 
  "Medium (50-150 people)", 
  "Popular club with a diverse music selection, frequented by a young crowd.", 
  "Yes, frequently", 
  "Mixed", 
  "Late Night (10pm - 3am)", 
  "$$ (Moderate)", 
  "Available", 
  "Club Mambo Copenhagen"
);
addVenue(
  "København K", 
  "21+", 
  "Upscale", 
  "Small (<50 people)", 
  "Exclusive nightclub with modern design and a sophisticated ambiance.", 
  "Occasionally", 
  "Mixed", 
  "Late Night (10pm - 3am)", 
  "$$$ (Pricey)", 
  "Available", 
  "Dorsia"
);

addVenue(
  "København K", 
  "18+", 
  "Casual", 
  "Medium (50-150 people)", 
  "Historic venue known for live blues music every night.", 
  "Yes, frequently", 
  "Blues", 
  "Evening (5pm - 10pm)", 
  "$ (Budget-friendly)", 
  "Not available", 
  "Mojo Blues Bar"
);

addVenue(
  "Nørrebro", 
  "18+", 
  "Casual", 
  "Small (<50 people)", 
  "Popular nightclub and music venue known for indie rock and electronica.", 
  "Yes, frequently", 
  "Mixed", 
  "Late Night (10pm - 3am)", 
  "$$ (Moderate)", 
  "Not available", 
  "Rust"
);
addVenue(
  "Vesterbro", 
  "21+", 
  "Upscale", 
  "Large (>150 people)", 
  "Elegant and stylish nightclub with a focus on electronic and house music.", 
  "Occasionally", 
  "Mixed", 
  "Late Night (10pm - 3am)", 
  "$$$ (Pricey)", 
  "Available", 
  "Arch"
);
addVenue(
  "Vesterbro", 
  "18+", 
  "Casual", 
  "Medium (50-150 people)", 
  "Popular for its vibrant atmosphere and a great selection of cocktails.", 
  "Occasionally", 
  "Mixed", 
  "Evening (5pm - 10pm)", 
  "$$ (Moderate)", 
  "Available", 
  "Bakken Kbh"
);
addVenue(
  "Nørrebro", 
  "18+", 
  "Casual", 
  "Medium (50-150 people)", 
  "Famous for its live jazz performances and cozy ambiance.", 
  "Yes, frequently", 
  "Jazz", 
  "Evening (5pm - 10pm)", 
  "$ (Budget-friendly)", 
  "Not available", 
  "La Fontaine"
);
addVenue(
  "Frederiksberg", 
  "21+", 
  "Upscale", 
  "Small (<50 people)", 
  "Known for its exclusive environment and fine dining experience.", 
  "Occasionally", 
  "Classical", 
  "Evening (5pm - 10pm)", 
  "$$$ (Pricey)", 
  "Available", 
  "Salon 39"
);
addVenue(
  "København K", 
  "18+", 
  "Casual", 
  "Small (<50 people)", 
  "A well-known spot for craft beers and a relaxed atmosphere.", 
  "No live music", 
  "Mixed", 
  ["Afternoon (12pm - 5pm)", "Evening (5pm - 10pm)"], 
  "$$ (Moderate)", 
  "Not available", 
  "Fermentoren"
);
