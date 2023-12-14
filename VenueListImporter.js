const admin = require("firebase-admin");
const serviceAccount = require("./innovationogtekt-firebase-adminsdk-ec56o-8d9c418cd2.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://innovationogtekt-default-rtdb.europe-west1.firebasedatabase.app",
});

const db = admin.firestore();

const filters = {
  Address: [], // Add options if needed; validation will not be enforced for Address
  Area: [
    "København K ",
    "Østerbro ",
    "Nørrebro ",
    "Vesterbro ",
    "Amager ",
    "Sydhavn ",
    "Frederiksberg ",
    "Valby ",
  ],
  "Age Requirement": ["18+ ", "21+ ", "25+ "],
  Atmosphere: [
    "Casual ",
    "Upscale ",
    "Dive Bar ",
    "Sports Bar ",
    "Rooftop ",
    "Beachfront ",
  ],
  Capacity: [
    "Small (<50 people) ",
    "Medium (50-150 people) ",
    "Large (>150 people) ",
  ],
  "Live Music": ["Yes, frequently ", "Occasionally ", "No live music "],
  "Music Genre": [
    "Blues ",
    "Classical ",
    "Rock ",
    "Pop ",
    "Jazz ",
    "Electronic ",
    "Country ",
    "R&B ",
    "Reggae ",
    "Mixed ",
  ],
  "Opening Hours": [
    "Morning (8am - 12pm) ",
    "Afternoon (12pm - 5pm) ",
    "Evening (5pm - 10pm) ",
    "Late Night (10pm - 3am) ",
  ],
  Price: [
    "$ (Budget-friendly) ",
    "$$ (Moderate) ",
    "$$$ (Pricey) ",
    "$$$$ (Upscale) ",
  ],
  "Table Service": ["Available", "Not available"],
};

function validateInput(value, filterKey) {
  // Skip validation for Address
  if (filterKey === "Address") {
    return;
  }

  // Check if value is an array or a single value
  if (Array.isArray(value)) {
    // Validate each value in the array
    value.forEach((val) => {
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

async function addVenue(
  Address,
  Area,
  AgeRequirement,
  Atmosphere,
  Capacity,
  Description,
  LiveMusic,
  MusicGenre,
  OpeningHours,
  Price,
  TableService,
  VenueName
) {
  // Validate each input against the filters
  validateInput(Address, "Address");
  validateInput(Area, "Area");
  validateInput(AgeRequirement, "Age Requirement");
  validateInput(Atmosphere, "Atmosphere");
  validateInput(Capacity, "Capacity");
  validateInput(LiveMusic, "Live Music");
  validateInput(MusicGenre, "Music Genre");
  validateInput(OpeningHours, "Opening Hours");
  validateInput(Price, "Price");
  validateInput(TableService, "Table Service");

  const venueData = {
    address: Address,
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
  "min store pik ",
  "Østerbro ",
  "21+ ",
  "Upscale ",
  "Large (>150 people) ",
  "A modern concert hall designed by French architect Jean Nouvel with amazing acoustics. ",
  "Yes, frequently ",
  ["Classical ", "Mixed "],
  "Evening (5pm - 10pm) ",
  "$$$ (Pricey) ",
  "Not available",
  "DR Koncerthuset "
).catch((error) => console.error(error.message));
