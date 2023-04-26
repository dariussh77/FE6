import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const NewCardForm = () => {
    return ( 
        <>
            <section id="newCounty">
                <h1>Add new country</h1>
                <form>
                    <input 
                        type="text" 
                        name=""
                    />
                </form>
            </section>
        </>
     );
}
 
export default NewCardForm;