const Header = ({visitedCountries,loggedIn}) => {
    return ( 
        <header>
            <div className="headerLogo">
                <img src="https://picsum.photos/id/110/600/400" alt="" />
            </div>
            
            <div>
                {loggedIn
                    ?<div className="userInfo">
                        <img src="https://picsum.photos/id/111/600/400" alt="" />
                        <p>Username</p>
                        <p>Pažymėtų straipsnių kiekis : {visitedCountries}</p>
                        <button>Atsijungti</button>
                    </div>
                    :<div className="userInfo">
                        <button>Prisijungti</button>
                    </div>

            }
            </div>
           
        
        </header>
     );
}
 
export default Header;