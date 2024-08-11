export const menuItems = {
  wrapper: {
    overflowX: "hidden",
    overflowY: "scroll",
    width: "calc(100% - .5rem)",
    "::-webkit-scrollbar": {
      width: ".5rem",
      background: "scrollbarBg1"
    },

    "::-webkit-scrollbar-thumb ": {
      background: "scrollbarThumb1"
    },

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
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      bottom: "10px",
      color: "primary",
      cursor: "pointer",
      fontSize: "2.75rem",
      height: "45px",
      lineHeight: "50px",
      position: "absolute",
      right: "20px",
      textAlign: "center",
      width: "45px",
      boxShadow: "0 0 10px rgba(0,0,0,.5)",
      background: "linear-gradient(0deg, rgba(217,217,217,1) 10%, rgba(246,246,246,1) 90%)"
    }
  }
};
