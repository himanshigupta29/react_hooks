import React, {useState} from 'react';

const NewSongForm = ({addSong}) => {

    const [title, setSongTitle] = useState('');

    const handleFormSubmit = (e) => {

        e.preventDefault();
        addSong(title);
        setSongTitle('');
        
    }


    return (
        <form onSubmit = {handleFormSubmit} >
            <label>
                Song Name:
            </label>
            <input type="text" required 
             value = {title}
             onChange = { (e) => { setSongTitle(e.target.value) } }
             />
             
            <input type = "submit"  value="Add New Song" />
        </form>
    )
};

export default NewSongForm;