const Header = ({pazymetiKiekis}) => {
    return ( 
        <> 
            <header>
                <img src="https://picsum.photos/id/1040/100/100" alt="Pilis"/>   
                <div>
                <i className="bi bi-person-circle"></i>
                <span> Darius</span>
                <span> Pažymėtų:{pazymetiKiekis}</span>
                </div> 
            </header> 
        </>
     );
}
 
export default Header;