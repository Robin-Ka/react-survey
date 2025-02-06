import PropTypes from "prop-types";

function RadioButtons(props) {
    const { handleInputChange } = props;

    return (
        <ul>
            <li>
                <input 
                    id="color-one" 
                    type="radio" 
                    name="rating" 
                    value="1" 
                    onChange={handleInputChange}
                />
                <label htmlFor="color-one">1</label>
            </li>
            <li>
                <input 
                    id="color-two" 
                    type="radio" 
                    name="rating" 
                    value="2" 
                    onChange={handleInputChange}
                />
                <label htmlFor="color-two">2</label>
            </li>
            <li>
                <input 
                    id="color-three" 
                    type="radio" 
                    name="rating" 
                    value="3" 
                    onChange={handleInputChange}
                />
                <label htmlFor="color-three">3</label>
            </li>
            <li>
                <input 
                    id="color-four" 
                    type="radio" 
                    name="rating" 
                    value="4" 
                    onChange={handleInputChange}
                />
                <label htmlFor="color-four">4</label>
            </li>
        </ul>
    );
}

RadioButtons.propTypes = {
    handleInputChange: PropTypes.func
};

export default RadioButtons;
