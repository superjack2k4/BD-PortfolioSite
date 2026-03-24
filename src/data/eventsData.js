/**
 * Events data — automatically discovers event images from the Event folder.
 *
 * Uses a single broad import.meta.glob to capture ALL images across all
 * event sub-folders, then groups them by folder name.  This avoids issues
 * with special characters in individual folder names (like apostrophes).
 */

/* ── 1. Grab every .webp image inside assets/Event/ sub-folders ── */
const allImages = import.meta.glob(
  "/src/assets/Event/**/*.webp",
  { eager: true }
);

/* ── 2. Group images by folder name ────────────────────── */
const grouped = {};

Object.entries(allImages).forEach(([path, mod]) => {
  // path looks like: /src/assets/Event/FolderName/image.jpg
  const parts = path.split("/");
  // parts: ["", "src", "assets", "Event", "FolderName", "image.jpg"]
  const folderName = parts[4]; // the event folder name
  if (!folderName) return;

  if (!grouped[folderName]) grouped[folderName] = [];
  grouped[folderName].push(mod.default);
});

/* ── 3. Description map (manually curated) ─────────────── */
const descriptions = {
  "CEO 3.0":
    "An exclusive leadership summit bringing together top executives and emerging leaders for strategic dialogue and innovation.",
  "CN Awurudu":
    "A vibrant cultural celebration of the Sinhala and Tamil New Year, filled with traditions, games, and community bonding.",
  "LDS_25":
    "The flagship Leadership Development Seminar designed to unlock potential, inspire action, and empower youth leaders.",
  "Summer Induction 26.27":
    "The gateway for new members — an immersive onboarding experience that sets the foundation for an impactful AIESEC journey.",
  "Wavez'25":
    "A high-energy social and networking event that creates unforgettable moments of connection, fun, and AIESEC spirit.",
};

/* ── 4. Display name map (prettier titles) ─────────────── */
const displayNames = {
  "CEO 3.0": "CEO 3.0",
  "CN Awurudu": "CN Awurudu",
  "LDS_25": "LDS '25",
  "Summer Induction 26.27": "Summer Induction 26/27",
  "Wavez'25": "Wavez '25",
};

/* ── 5. Build final array ──────────────────────────────── */
const eventsData = Object.keys(grouped).map((folder) => ({
  title: displayNames[folder] || folder,
  description: descriptions[folder] || "",
  images: grouped[folder],
}));

export default eventsData;
