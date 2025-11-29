const mockIssues = [
  {
    id: 1,
    title: "Pothole near Sector 5",
    description:
      "Huge pothole on main road causing traffic and risk of accidents.",
    imageUrl:
      "https://images.pexels.com/photos/1197095/pexels-photo-1197095.jpeg",
    location: "Nerul, Sector 5, Navi Mumbai",
    area: "Nerul",
    status: "Pending",              // unsolved
    upvotes: 12,
    createdAt: "2025-11-28T10:00:00Z",
    tag: "Road",                    // type-wise filter
    organisation: "Road Department" // who should solve it
  },
  {
    id: 2,
    title: "Garbage not collected",
    description:
      "Garbage piled up for 3 days near the community park dustbin.",
    imageUrl:
      "https://images.pexels.com/photos/3735210/pexels-photo-3735210.jpeg",
    location: "Sector 21, Nerul, Navi Mumbai",
    area: "Nerul",
    status: "In Progress",          // unsolved (still working)
    upvotes: 8,
    createdAt: "2025-11-27T14:30:00Z",
    tag: "Garbage",
    organisation: "Sanitation Dept"
  },
  {
    id: 3,
    title: "Street light not working",
    description:
      "Street light opposite building A-3 is not working. Area is dark at night.",
    imageUrl:
      "https://images.pexels.com/photos/3404200/pexels-photo-3404200.jpeg",
    location: "Palm Beach Road, Navi Mumbai",
    area: "Palm Beach",
    status: "Resolved",             // solved
    upvotes: 20,
    createdAt: "2025-11-26T20:00:00Z",
    tag: "Lighting",
    organisation: "Electricity Dept"
  },
];

export default mockIssues;
