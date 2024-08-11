export const menuItems = {
  wrapper: {
    overflowX: "hidden",
    overflowY: "scroll",
    "> div": {
      display: "grid",
      gap: "10px",
      gridTemplateColumns: "repeat(3,1fr)",
      px: "10px"
    }
  },

  item: {
    background: "white",
    height: "325px",
    padding: "10px",
    position: "relative",
    overflow: "hidden",
    image: {
      background: "primary",
      height: "200px",
      overflow: "hidden",
      textAlign: "center",
      img: {
        height: "100%"
      }
    },
    calories: {
      color: "primary",
      fontSize: "1rem"
    },
    name: {
      fontSize: "1.375rem",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap"
    },
    price: {
      fontSize: "2.5rem",
      fontWeight: "500"
    },
    addButton: {
      background: "primary",
      borderRadius: "50%",
      bottom: "10px",
      color: "text2",
      cursor: "pointer",
      fontSize: "2rem",
      height: "50px",
      lineHeight: "50px",
      position: "absolute",
      right: "20px",
      textAlign: "center",
      width: "50px"
    }
  }
};
