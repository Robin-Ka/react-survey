import CheckBoxes from "./CheckBoxes";
import RadioButtons from "./RadioButtons";
import { useState, useEffect } from "react";


function Form(){
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        review: "",
        rating: "",
        activity: []
    });

    useEffect(() => {
        console.log("Current State:", formData);
    }, [formData]);

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;

        if (type === "checkbox") {
            setFormData((prevFormData) => {
                const updatedActivity = checked
                    ? [...prevFormData.activity, value] 
                    : prevFormData.activity.filter((item) => item !== value);
                return {
                    ...prevFormData,
                    activity: updatedActivity, 
                };
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }

    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        for (let key in formData){
            console.log(key, formData[key]);
        }

        setFormData({
            ...formData,
            username: "",
            email: "",
            review: "",
            rating: "",
            activity: []
        });
    };


    return (
        <>
        
            <form className="form"  onSubmit={handleSubmit }>
                <h2>Tell us what you think about your rubber duck!</h2>
                <div className="form__group radio">
                    <h3>How do you rate your rubber duck colour?</h3>
                    <RadioButtons handleInputChange={handleInputChange}/>
                </div>
                <div className="form__group">
                    <h3>How do you like to spend time with your rubber duck</h3>
                    <CheckBoxes handleInputChange={handleInputChange}/>
                </div>
                <label>What else have you got to say about your rubber duck?
                    <textarea name="review" cols="30" rows="10" value={formData.review} onChange={handleInputChange}></textarea>
                </label>
                <label>Put your name here (if you feel like it):
                    <input type="text" name="username" value={formData.username} onChange={handleInputChange}/>
                </label>
                <label>Leave us your email pretty please??
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange}/>
                </label>
                <input className="form__submit" type="submit" value="Submit Survey!"/>
            </form>

        
        </>
    )
}

export default Form;