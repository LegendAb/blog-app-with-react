const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Legend Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#800080",
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;