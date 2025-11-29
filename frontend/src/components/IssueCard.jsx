import React from "react";

function IssueCard({ issue, onUpvote }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "16px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        marginBottom: "16px",
        maxWidth: "800px",
        marginInline: "auto",
        marginTop: "24px",
      }}
    >
      {/* Image */}
      {issue.imageUrl && (
        <img
          src={issue.imageUrl}
          alt={issue.title}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        />
      )}

      {/* Title */}
      <h2 style={{ fontSize: "20px", fontWeight: "600" }}>{issue.title}</h2>

      {/* Description */}
      <p style={{ color: "#4b5563", marginTop: "4px" }}>
        {issue.description}
      </p>

      {/* Location */}
      <p style={{ color: "#2563eb", fontSize: "14px", marginTop: "6px" }}>
        📍 {issue.location}
      </p>

      {/* Status */}
      <p
        style={{
          fontSize: "14px",
          marginTop: "4px",
          fontWeight: "600",
          color:
            issue.status === "Resolved"
              ? "#16a34a"
              : issue.status === "In Progress"
              ? "#f97316"
              : "#b91c1c",
        }}
      >
        Status: {issue.status}
      </p>

      {/* Tag + Organisation */}
      <p
        style={{
          fontSize: "13px",
          marginTop: "4px",
          color: "#4b5563",
        }}
      >
        Type: {issue.tag} • Dept: {issue.organisation}
      </p>

      {/* Bottom row: upvote + time */}
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => onUpvote && onUpvote(issue.id)}
          style={{
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          👍 Upvote ({issue.upvotes})
        </button>

        <span style={{ fontSize: "12px", color: "#6b7280" }}>
          Posted at {new Date(issue.createdAt).toLocaleString()}
        </span>
      </div>
    </div>
  );
}

export default IssueCard;
