import React from "react";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#059669", // green top bar
        color: "white",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ fontWeight: "700", fontSize: "22px" }}>JAN SEVA</div>

      <button
        style={{
          backgroundColor: "white",
          color: "#059669",
          border: "none",
          padding: "8px 14px",
          borderRadius: "6px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        + Report Issue
      </button>
    </nav>
  );
}

export default Navbar;
