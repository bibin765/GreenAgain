import React from 'react';
//import { Form } from 'react-bootstrap/lib/Navbar';

const PlantEntryForm = () => {
    return(
        <form class="entry-form">
        <label htmlFor="name">Name</label>
        <input name="name" required />
        <label htmlFor="email">Email</label>
        <input name="email" type="email" />
        <label htmlFor="description">Description</label>
        <textarea name="description" rows={3}></textarea>
        <label htmlFor="image">Image</label>
        <input name="image" />
        <label htmlFor="plantDate">Plant Date</label>
        <input name="plantDate" type="date" />



    </form>
    );
};

export default PlantEntryForm;