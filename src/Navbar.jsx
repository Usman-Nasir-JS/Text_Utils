const Navbar = () => {
    return (
      <nav
        style={{
          // backgroundColor: "#333",
          color: "black",
          position: "fixed",
          width: "100%",
          top: 0,
          left: 0,
          padding: "20px 20px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "25px",
            margin: 0,
            padding: 0,
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          <li style={{ cursor: "pointer", color: "#4A90E5" }}><u>M.Usman Nasir</u></li>
          <li style={{ cursor: "pointer" }}>Home</li>
          <li style={{ cursor: "pointer" }}>About</li>
          
          <ul
            style={{
              paddingLeft: "60%",
            }}
          >
            <li style={{ cursor: "pointer" }}>Text Utils</li>
          </ul>
        </ul>
      </nav>
    );
};
  
export default Navbar;