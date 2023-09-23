const admin = require("firebase-admin");
const serviceAccount = require("./innovationogtekt-firebase-adminsdk-ec56o-8d9c418cd2.json");
const VenueList = [
  "BadaBing",
  "A-Bar",
  "Zoo",
  "Aloha Bar",
  "Wallstreet pub",
  "Angels Club",
  "Øl",
  "Gorilla",
  "Old Irish Pub",
  "Café Nexus",
  "Bistro Central",
  "Café Det Elektriske Hjørne",
  "Levi's",
  "Café Victor",
];
const arr = VenueList;
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://innovationogtekt-default-rtdb.europe-west1.firebasedatabase.app", // Replace with your Firestore URL
});

const db = admin.firestore();

async function createSimilarDocuments([
  Address,
  AgeReq,
  Atmosphere,
  Capacity,
  Description,
  LiveMusic,
  MusicGenre,
  OpeningHours,
  Price,
  TableService,
  VenueName,
]) {
  const names = [VenueName];
  const data = {
    venueName: VenueName,
    adress: Address,
    ageReg: AgeReq,
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

  for (const name of names) {
    await db.collection("VenueList").doc(name).set(data);
  }

  console.log(names, "Document created successfully.");
}

// Call the function to create documents
/* createSimilarDocuments([
  "Address",
  "AgeReq",
  "Atmosphere",
  "Capacity",
  "Description",
  "LiveMusic",
  "MusicGenre",
  "OpeningHours",
  "Price",
  "TableService",
  "BadaBing",
]); */

function createall(documents) {
  for (let i = 0; i < 14; i++) {
    createSimilarDocuments([
      "Address",
      "AgeReq",
      "Atmosphere",
      "Capacity",
      "Description",
      "LiveMusic",
      "MusicGenre",
      "OpeningHours",
      "Price",
      "TableService",
      documents[i],
    ]);
  }
}
createall(arr);
