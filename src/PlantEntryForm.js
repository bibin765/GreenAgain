import React,{ useState } from 'react';
import { useForm } from 'react-hook-form'
import { createPlantEntry } from './API'

const PlantEntryForm = ({ location, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { register, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            data.latitude = location.latitude;
            data.longitude = location.longitude;
            console.log(data)
            await createPlantEntry(data);
            onClose();
        } catch (error) {
            console.log(error);
            setError(error.message);
            setLoading(false);
        }
        
    }

    return(
        <div>
        <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
        {error ? <h3 className="error">{error}</h3> : null}
        <label htmlFor="name">Name</label>
        <input name="name" required ref={register}/>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" ref={register} />
        <label htmlFor="description">Description</label>
        <textarea name="description" rows={2} ref={register}></textarea>
        <label htmlFor="image">Image</label>
        <input name="image" ref={register}/>
        <label htmlFor="plantDate">Plant Date</label>
        <input name="plantDate" type="date" required ref={register}/>
        <button disabled = {loading}>{loading ? 'loading..' :'Create Plant'}</button>
        </form>
        </div>
    );
};

export default PlantEntryForm;