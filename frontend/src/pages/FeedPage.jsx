import React, { useState, useMemo } from "react";
import IssueCard from "../components/IssueCard";
import mockIssues from "../data/mockIssues";

function FeedPage() {
  const [issues, setIssues] = useState(
    [...mockIssues].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  );

  // filter states
  const [selectedTag, setSelectedTag] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All"); // All / Solved / Unsolved
  const [selectedArea, setSelectedArea] = useState("All");
  const [selectedOrg, setSelectedOrg] = useState("All");
  const [sortBy, setSortBy] = useState("recent"); // recent / upvotes

  // unique tags/areas/orgs for dropdowns
  const tags = useMemo(
    () => ["All", ...Array.from(new Set(issues.map((i) => i.tag)))],
    [issues]
  );

  const areas = useMemo(
    () => ["All", ...Array.from(new Set(issues.map((i) => i.area)))],
    [issues]
  );

  const orgs = useMemo(
    () => ["All", ...Array.from(new Set(issues.map((i) => i.organisation)))],
    [issues]
  );

  const handleUpvote = (id) => {
    const updated = issues.map((issue) =>
      issue.id === id ? { ...issue, upvotes: issue.upvotes + 1 } : issue
    );
    setIssues(updated);
  };

  // 🔍 FILTER + SORT LOGIC
  const filteredAndSortedIssues = useMemo(() => {
    let result = [...issues];

    // tag filter (Road / Garbage / Lighting)
    if (selectedTag !== "All") {
      result = result.filter((issue) => issue.tag === selectedTag);
    }

    // status filter: Solved / Unsolved
    if (statusFilter === "Solved") {
      result = result.filter((issue) => issue.status === "Resolved");
    } else if (statusFilter === "Unsolved") {
      result = result.filter(
        (issue) => issue.status !== "Resolved" // Pending + In Progress
      );
    }

    // area-wise filter
    if (selectedArea !== "All") {
      result = result.filter((issue) => issue.area === selectedArea);
    }

    // organisation-wise filter
    if (selectedOrg !== "All") {
      result = result.filter((issue) => issue.organisation === selectedOrg);
    }

    // sort
    if (sortBy === "recent") {
      result.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (sortBy === "upvotes") {
      result.sort((a, b) => b.upvotes - a.upvotes);
    }

    return result;
  }, [issues, selectedTag, statusFilter, selectedArea, selectedOrg, sortBy]);

  const clearFilters = () => {
    setSelectedTag("All");
    setStatusFilter("All");
    setSelectedArea("All");
    setSelectedOrg("All");
    setSortBy("recent");
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "24px auto", padding: "0 16px" }}>
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "700",
          marginBottom: "16px",
        }}
      >
        Public Issue Feed
      </h1>

      {/* FILTER BAR */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "16px",
          alignItems: "center",
        }}
      >
        {/* Tag filter */}
        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          style={selectStyle}
        >
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag === "All" ? "All Types" : tag}
            </option>
          ))}
        </select>

        {/* Status filter */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={selectStyle}
        >
          <option value="All">All Status</option>
          <option value="Solved">Solved</option>
          <option value="Unsolved">Unsolved</option>
        </select>

        {/* Area filter */}
        <select
          value={selectedArea}
          onChange={(e) => setSelectedArea(e.target.value)}
          style={selectStyle}
        >
          {areas.map((area) => (
            <option key={area} value={area}>
              {area === "All" ? "All Areas" : area}
            </option>
          ))}
        </select>

        {/* Organisation filter */}
        <select
          value={selectedOrg}
          onChange={(e) => setSelectedOrg(e.target.value)}
          style={selectStyle}
        >
          {orgs.map((org) => (
            <option key={org} value={org}>
              {org === "All" ? "All Organisations" : org}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={selectStyle}
        >
          <option value="recent">Sort: Recent First</option>
          <option value="upvotes">Sort: Most Upvoted</option>
        </select>

        <button
          onClick={clearFilters}
          style={{
            padding: "6px 10px",
            borderRadius: "6px",
            border: "1px solid #9ca3af",
            backgroundColor: "white",
            cursor: "pointer",
            fontSize: "13px",
          }}
        >
          Clear Filters
        </button>
      </div>

      {/* FEED */}
      {filteredAndSortedIssues.length === 0 ? (
        <p>No issues match selected filters.</p>
      ) : (
        filteredAndSortedIssues.map((issue) => (
          <IssueCard
            key={issue.id}
            issue={issue}
            onUpvote={handleUpvote}
          />
        ))
      )}
    </div>
  );
}

// Small shared style for dropdowns
const selectStyle = {
  padding: "6px 10px",
  borderRadius: "6px",
  border: "1px solid #d1d5db",
  fontSize: "13px",
};

export default FeedPage;
