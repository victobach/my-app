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
    Area: Area,
    "Age Requirement": AgeRequirement,
    Atmosphere: Atmosphere,
    Capacity: Capacity,
    description: Description,
    "Live Music": LiveMusic,
    "Music Genre": MusicGenre,
    "Opening Hours": OpeningHours,
    Price: Price,
    "Table Service": TableService,
    venueName: VenueName,
  };

  await db.collection("VenueList").doc(VenueName).set(venueData);
  console.log(`${VenueName} document created successfully.`);
}

// Example usage:
addVenue(
  "Emil Holms Kanal 20 ",
  "Østerbro ",
  "21+ ",
  "Upscale ",
  "Large (>150 people) ",
  "A modern concert hall designed by French architect Jean Nouvel with amazing acoustics. ",
  "Yes, frequently ",
  ["Classical ", "Mixed ", "Reggae "],
  "Evening (5pm - 10pm) ",
  "$$$ (Pricey) ",
  "Not available",
  "DR Koncerthuset "
).catch((error) => console.error(error.message));

addVenue(
  "Vestergade 10 ",
  "København K ",
  "18+ ",
  "Casual ",
  "Small (<50 people) ",
  "A cozy bar in the heart of Copenhagen ",
  "No live music ",
  ["Mixed ", "Reggae "],
  "Evening (5pm - 10pm) ",
  "$ (Budget-friendly) ",
  "Available",
  "A-bar "
);

addVenue(
  "Gothersgade 11 ",
  "Vesterbro ",
  "21+ ",
  "Upscale ",
  "Medium (50-150 people) ",
  "A-tropical-themed-bar-with-a-wide-selection-of-cocktails ",
  "Occasionally ",
  ["Pop ", "R&B "],
  "Evening (5pm - 10pm) ",
  "$$ (Moderate) ",
  "Available",
  "Aloha-bar "
);

addVenue(
  "Nørregade 1 ",
  "Nørrebro ",
  "21+ ",
  "Dive Bar ",
  "Large (>150 people) ",
  "Very nice nice bar ",
  "Occasionally ",
  ["Pop ", "R&B "],
  "Evening (5pm - 10pm) ",
  "$$ (Moderate) ",
  "Available",
  "Angels Club "
);
addVenue(
  "Nørregade 41 ",
  "Amager ",
  "21+ ",
  "Dive Bar ",
  "Medium (50-150 people) ",
  "Very nice nice bar ",
  "Occasionally ",
  ["Pop ", "R&B "],
  "Evening (5pm - 10pm) ",
  "$$ (Moderate) ",
  "Available",
  "Arch "
);
addVenue(
  "Gothersgade 19 ",
  "Amager ",
  "21+ ",
  "Rooftop ",
  "Medium (50-150 people) ",
  "Very nice nice bar ",
  "Occasionally ",
  ["Pop ", "R&B "],
  "Evening (5pm - 10pm) ",
  "$$ (Moderate) ",
  "Available",
  "Badabing "
);
addVenue(
  "Flæsketorvet 19 ",
  "Sydhavn ",
  "18+ ",
  "Beachfront ",
  "Large (>150 people) ",
  "Very nice nice bar ",
  "Occasionally ",
  ["Pop ", "R&B "],
  "Evening (5pm - 10pm) ",
  "$$ (Moderate) ",
  "Available",
  "Bakken kbh "
);
//
addVenue(
  "Ny Østergade 14 ",
  "Frederiksberg ",
  "18+ ",
  "Casual ",
  "Medium (50-150 people) ",
  "Very nice nice bar ",
  "No live music ",
  ["Pop ", "R&B "],
  "Evening (5pm - 10pm) ",
  "$$ (Moderate) ",
  "Available",
  "Bistro Central "
);

addVenue(
  "Ny Østergade 10 ",
  "Valby ",
  "18+ ",
  "Upscale ",
  "Small (<50 people) ",
  "Very nice nice bar ",
  "No live music ",
  ["Pop ", "R&B "],
  "Evening (5pm - 10pm) ",
  "$$ (Moderate) ",
  "Available",
  "Cafe det elektriske hjørne "
);

addVenue(
  "Ny Østergade 10 ",
  "Nørrebro ",
  "18+ ",
  "Dive Bar ",
  "Medium (50-150 people) ",
  "Very nice nice bar ",
  "No live music ",
  ["Pop ", "R&B "],
  "Evening (5pm - 10pm) ",
  "$$ (Moderate) ",
  "Available",
  "Café nexus "
);

addVenue(
  "Ny Østergade 30 ",
  "Østerbro ",
  "18+ ",
  "Sports Bar ",
  "Small (<50 people) ",
  "Very nice nice bar ",
  "No live music ",
  ["Pop ", "R&B "],
  "Evening (5pm - 10pm) ",
  "$$ (Moderate) ",
  "Available",
  "Cafe victor "
);

addVenue(
  "Ny Østergade 30 ",
  "Sydhavn ",
  "18+ ",
  "Rooftop ",
  "Medium (50-150 people) ",
  "Very nice nice bar ",
  "No live music ",
  ["Pop ", "R&B "],
  "Evening (5pm - 10pm) ",
  "$$ (Moderate) ",
  "Available",
  "Cafe victor "
);

addVenue(
  "Ny Østergade 30 ",
  "Frederiksberg ",
  "18+ ",
  "Beachfront ",
  "Small (<50 people) ",
  "Very nice nice bar ",
  "No live music ",
  ["Pop ", "R&B "],
  "Evening (5pm - 10pm) ",
  "$$ (Moderate) ",
  "Available",
  "Club mambo copenhagen "
);

addVenue(
  "Ny Østergade 30 ",
  "Valby ",
  "18+ ",
  "Casual ",
  "Small (<50 people) ",
  "Very nice nice bar ",
  "No live music ",
  ["Pop ", "R&B "],
  "Evening (5pm - 10pm) ",
  "$$ (Moderate) ",
  "Available",
  "Culture box "
);

addVenue(
  "Ny Østergade 30 ",
  "Valby ",
  "18+ ",
  "Upscale ",
  "Small (<50 people) ",
  "Very nice nice bar ",
  "Yes, frequently ",
  ["Pop ", "R&B "],
  "Morning (8am - 12pm) ",
  "$$ (Moderate) ",
  "Available",
  "Dorsia "
);

addVenue(
  "Ny Østergade 30 ",
  "Valby ",
  "18+ ",
  "Dive Bar ",
  "Small (<50 people) ",
  "Very nice nice bar ",
  "Yes, frequently ",
  ["Pop ", "R&B "],
  "Morning (8am - 12pm) ",
  "$$ (Moderate) ",
  "Available",
  "Drop inn "
);

addVenue(
  "Ny Østergade 30 ",
  "Vesterbro ",
  "18+ ",
  "Sports Bar ",
  "Large (>150 people) ",
  "Very nice nice bar ",
  "Yes, frequently ",
  ["Pop ", "R&B "],
  "Morning (8am - 12pm) ",
  "$$ (Moderate) ",
  "Available",
  "Fermentoren "
);

addVenue(
  "Ny Østergade 30 ",
  "Amager ",
  "18+ ",
  "Rooftop ",
  "Medium (50-150 people) ",
  "Very nice nice bar ",
  "Yes, frequently ",
  ["Pop ", "R&B "],
  "Morning (8am - 12pm) ",
  "$$ (Moderate) ",
  "Available",
  "Gorilla "
);

addVenue(
  "Ny Østergade 30 ",
  "Amager ",
  "18+ ",
  "Beachfront ",
  "Large (>150 people) ",
  "Very nice nice bar ",
  "Yes, frequently ",
  ["Pop ", "R&B "],
  "Afternoon (12pm - 5pm) ",
  "$$ (Moderate) ",
  "Available",
  "La fontaine "
);

addVenue(
  "Ny Østergade 30 ",
  "Sydhavn ",
  "18+ ",
  "Upscale ",
  "Large (>150 people) ",
  "Very nice nice bar ",
  "Yes, frequently ",
  ["Pop ", "R&B "],
  "Afternoon (12pm - 5pm) ",
  "$$ (Moderate) ",
  "Available",
  "Levi's "
);

addVenue(
  "Ny Østergade 30 ",
  "Nørrebro ",
  "18+ ",
  "Casual ",
  "Large (>150 people) ",
  "Very nice nice bar ",
  "Yes, frequently ",
  ["Pop ", "R&B "],
  "Afternoon (12pm - 5pm) ",
  "$$ (Moderate) ",
  "Available",
  "Moju blues bar "
);

addVenue(
  "Ny Østergade 30 ",
  "Nørrebro ",
  "18+ ",
  "Beachfront ",
  "Large (>150 people) ",
  "Very nice nice bar ",
  "Yes, frequently ",
  ["Pop ", "R&B "],
  "Afternoon (12pm - 5pm) ",
  "$$ (Moderate) ",
  "Available",
  "Royal arena "
);

addVenue(
  "Ny Østergade 30 ",
  "Frederiksberg ",
  "18+ ",
  "Sports Bar ",
  "Medium (50-150 people) ",
  "Very nice nice bar ",
  "No live music ",
  ["Pop ", "R&B "],
  "Afternoon (12pm - 5pm) ",
  "$$ (Moderate) ",
  "Available",
  "Rust "
);

addVenue(
  "Ny Østergade 30 ",
  "Valby ",
  "18+ ",
  "Upscale ",
  "Large (>150 people) ",
  "Very nice nice bar ",
  "No live music ",
  ["Pop ", "R&B "],
  "Afternoon (12pm - 5pm) ",
  "$$ (Moderate) ",
  "Not available",
  "Salon 39 "
);

addVenue(
  "Ny Østergade 30 ",
  "Sydhavn ",
  "18+ ",
  "Upscale ",
  "Small (<50 people) ",
  "Very nice nice bar ",
  "No live music ",
  ["Pop ", "R&B ", "Blues ", "Classical ", "Rock ", "Pop ", "Jazz "],
  "Late Night (10pm - 3am) ",
  "$$ (Moderate) ",
  "Not available",
  "Vega "
);

addVenue(
  "Ny Østergade 30 ",
  "Sydhavn ",
  "18+ ",
  "Upscale ",
  "Small (<50 people) ",
  "Very nice nice bar ",
  "No live music ",
  ["Pop ", "R&B ", "Blues ", "Classical ", "Rock ", "Pop ", "Jazz "],
  "Late Night (10pm - 3am) ",
  "$$ (Moderate) ",
  "Not available",
  "Wallstreet pub "
);

addVenue(
  "Ny Østergade 30 ",
  "Vesterbro ",
  "18+ ",
  "Upscale ",
  "Medium (50-150 people) ",
  "Very nice nice bar ",
  "No live music ",
  ["Pop ", "R&B ", "Jazz ", "Electronic ", "Country ", "R&B ", "Reggae "],
  "Late Night (10pm - 3am) ",
  "$$ (Moderate) ",
  "Not available",
  "Zoo "
);

addVenue(
  "Ny Østergade 30 ",
  "Frederiksberg ",
  "18+ ",
  "Upscale ",
  "Medium (50-150 people) ",
  "Very nice nice bar ",
  "Occasionally ",
  [
    "Pop ",
    "R&B ",
    "Mixed ",
    "Jazz ",
    "Electronic ",
    "Country ",
    "R&B ",
    "Reggae ",
  ],
  "Late Night (10pm - 3am) ",
  "$$ (Moderate) ",
  "Not available",
  "Øl "
);
