/**
 * Events data — automatically discovers event images from the Event folder
 * and maps them to detailed structured event profiles.
 */

// 1. Grab every .webp image inside assets/Event/ sub-folders
const allImages = import.meta.glob("/src/assets/Event/**/*.webp", {
  eager: true,
});

// 2. Group images by folder name
const grouped = {};
Object.entries(allImages).forEach(([path, mod]) => {
  const parts = path.split("/");
  const folderName = parts[4];
  if (!folderName) return;
  if (!grouped[folderName]) grouped[folderName] = [];
  grouped[folderName].push(mod.default);
});

// 3. Detailed event metadata mapped by folder name
const detailedEvents = {
  "CN Awurudu": {
    title: "Awurudu",
    description:
      "Awurudu is AIESEC in University of Kelaniya’s vibrant New Year celebration, bringing together members to experience traditional games, cultural performances, and festive activities. This event fosters engagement, unity, and appreciation for diverse traditions.",
    timeline: "March – April",
    type: "Physical Celebration",
    audience: "Undergraduates from University of Kelaniya & IIT",
    participants: "100+ delegates",
    partnership: "LKR 75,000",
    link: "https://www.facebook.com/share/p/1AspTEcx29/?mibextid=wwXIfr",
  },
  "CEO 3.0": {
    title: "CEO 2.0",
    description:
      "CEO 2.0 is a one-day workshop series focused on developing future CEOs. Targeting prefect boards from top schools in the Western Province, the event includes hands-on activities, discussions with entrepreneurs and business leaders, and sessions on key business topics to inspire youth.",
    timeline: "April – June",
    type: "Physical Workshop",
    audience: "Post & Current A/L Students, Undergraduates",
    participants: "300+ delegates",
    partnership: "LKR 500,000",
    link: "https://www.facebook.com/share/p/16xY7nS9ZN/?mibextid=wwXIfr",
  },
  "LDS_25": {
    title: "Leadership Development Seminar (LDS) 2025",
    description:
      "LDS 2025 is the largest annual conference of AIESEC in University of Kelaniya, designed to empower young leaders through workshops, leadership spaces, and interactive activities that build confidence, resilience, and essential soft skills.",
    timeline: "July – October",
    type: "Physical Conference",
    audience: "Undergraduates from AIESEC in UOK & IIT",
    participants: "150+ aspiring leaders",
    partnership: "LKR 450,000",
    link: "https://www.facebook.com/share/p/1BV75VDxr2/?mibextid=wwXIfr",
  },
  "Summer Induction 26.27": {
    title: "Summer Induction",
    description:
      "A new chapter begins as passionate young changemakers officially step into the 26.27 journey with AIESEC in University of Kelaniya.\n\nFrom fresh faces to fearless dreams, Summer Induction marked the start of leadership, growth, and lifelong connections.\n\nThis is not just an event, it’s the beginning of impact.",
    timeline: "January – March",
    type: "Internal Event",
    audience: "New Members",
    participants: null,
    partnership: null,
    link: null, /* No link specifically requested */
  },
  "Wavez'25": {
    title: "WAVEZ",
    description:
      "Relive the unforgettable moments from July 20th as passionate youth from Sri Lanka and around the world came together at Wellawatte Beach for a day of impact, unity, and ocean conservation, organized by AIESEC in University of Kelaniya.\n\nLeaving footprints but with impact!",
    timeline: "July",
    type: "Physical Event",
    audience: "Youth & Undergraduates",
    participants: null,
    partnership: null,
    link: "https://www.facebook.com/share/p/1K7JuUBXxi/?mibextid=wwXIfr",
  },
};

// 4. Build final array
const eventsData = Object.keys(grouped)
  .map((folder) => {
    const data = detailedEvents[folder] || {};
    return {
      title: data.title || folder,
      description: data.description || "",
      timeline: data.timeline || null,
      type: data.type || null,
      audience: data.audience || null,
      participants: data.participants || null,
      partnership: data.partnership || null,
      link: data.link !== undefined ? data.link : null,
      images: grouped[folder],
    };
  })
  // Optional: Sort them in a specific order if desired, or let Object.keys dictate
  .sort((a, b) => a.title.localeCompare(b.title));

export default eventsData;
