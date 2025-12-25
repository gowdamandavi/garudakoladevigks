// validate-structure.js
import fs from "fs";
import path from "path";

const root = process.cwd();

const expected = [
    // top-level
    "public",
    path.join("public", "favicon.ico"),
    "src",
    path.join("src", "assets"),
    path.join("src", "assets", "images"),
    path.join("src", "components"),
    path.join("src", "pages"),
    path.join("src", "api"),
    path.join("src", "App.jsx"),
    path.join("src", "main.jsx"),
    path.join("src", "index.css"),
    "package.json",
    "vite.config.js"
];

// images we expect (placeholders OK)
const expectedImages = [
    "garuda_4.jpg",
    "garuda_deity.png",
    "sita_abduction.jpg",
    "koladevi-location.jpg",
    "hero-temple.jpg", // optional gallery
    "gallery1.jpg",
    "gallery2.jpg"
];

// components
const expectedComponents = [
    path.join("src", "components", "Header.jsx"),
    path.join("src", "components", "Footer.jsx"),
    path.join("src", "components", "BookingForm.jsx")
];

// pages
const expectedPages = [
    path.join("src", "pages", "Home.jsx"),
    path.join("src", "pages", "About.jsx"),
    path.join("src", "pages", "UniqueDeity.jsx"),
    path.join("src", "pages", "Legend.jsx"),
    path.join("src", "pages", "Gallery.jsx"),
    path.join("src", "pages", "Sevas.jsx"),
    path.join("src", "pages", "Contact.jsx")
];

// api
const expectedApi = [path.join("src", "api", "bookings.js")];

function checkExists(relPath) {
    const p = path.join(root, relPath);
    return fs.existsSync(p);
}

function checkDir(relPath) {
    const p = path.join(root, relPath);
    try {
        return fs.statSync(p).isDirectory();
    } catch {
        return false;
    }
}

console.log("Folder structure validator\nProject root:", root, "\n");

let missing = [];

// check expected paths
for (const p of expected) {
    const absolute = path.join(root, p);
    const exists = fs.existsSync(absolute);
    if (!exists) missing.push(p);
}

for (const p of expectedComponents)
    if (!checkExists(p)) missing.push(p);
for (const p of expectedPages)
    if (!checkExists(p)) missing.push(p);
for (const p of expectedApi)
    if (!checkExists(p)) missing.push(p);

    // images: check that at least one of core images exists, and list which are missing/present
const imagesDir = path.join(root, "src", "assets", "images");
let presentImages = [];
let missingImages = [];

if (checkDir(path.join("src", "assets", "images"))) {
    for (const img of expectedImages) {
        const p = path.join("src", "assets", "images", img);
        if (checkExists(p)) presentImages.push(img);
        else missingImages.push(img);
    }
} else {
    missing.push(path.join("src", "assets", "images"));
    missingImages = expectedImages.slice();
}

console.log("Quick results:");
if (missing.length === 0) {
    console.log("✅ Required files and directories: OK");
} else {
    console.log("❌ Missing required items:");
    for (const m of missing) console.log("  -", m);
}

console.log("\nImage check (src/assets/images):");
if (presentImages.length) {
    console.log(" Present images:");
    presentImages.forEach(i => console.log("  ✓", i));
} else {
    console.log(" No expected images found.");
}
if (missingImages.length) {
    console.log(" Missing (placeholders recommended):");
    missingImages.forEach(i => console.log("  -", i));
}

console.log("\nDetails & suggestions:");
if (!checkExists("package.json")) {
    console.log(" • package.json missing — create one (see earlier example).");
}
if (!checkExists("vite.config.js")) {
    console.log(" • vite.config.js missing — create with basic Vite React config.");
}
if (!checkExists(path.join("src", "App.jsx"))) {
    console.log(" • src/App.jsx missing — create main app component.");
}
if (!checkExists(path.join("src", "main.jsx"))) {
    console.log(" • src/main.jsx missing — create entry that mounts App.");
}

if (missing.length > 0 || presentImages.length === 0) {
    console.log("\nValidator result: FAILED");
    process.exitCode = 2;
} else {
    console.log("\nValidator result: PASSED");
    process.exitCode = 0;
}