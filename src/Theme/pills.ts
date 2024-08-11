const pillDefault = {
  borderRadius: "0.25rem",
  color: "#fff",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "500",
  lineHeight: "1.5",
  minWidth: "6.25rem",
  padding: "0.5rem 1rem",
  textAlign: "center",
  textTransform: "uppercase",
  "&:hover": {
    filter: "brightness(1.1)"
  }
};

export const pills = {
  primary: {
    ...pillDefault,
    backgroundColor: "primary"
  }
};
