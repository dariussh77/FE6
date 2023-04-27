const User = ({user}) => {
    return ( 
        <>
            <option value={user.vardas}>{user.vardas}</option>
        </>
     );
}
 
export default User;