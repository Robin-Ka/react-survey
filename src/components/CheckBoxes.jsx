import PropTypes from "prop-types";


function CheckBoxes(props){
    const { handleInputChange } = props;


    return (

        <>

            <ul>
                <li>
                    <label>
                        <input name="activity" type="checkbox" value="swimming" onChange={handleInputChange}/>Swimming
                    </label>
                </li>
                <li>
                    <label>
                        <input name="activity" type="checkbox" value="bathing" onChange={handleInputChange}/>Bathing
                    </label>
                </li>
                <li>
                    <label>
                        <input name="activity" type="checkbox" value="chatting" onChange={handleInputChange}/>Chatting
                    </label>
                </li>
                <li>
                    <label>
                        <input name="activity" type="checkbox" value="noTime" onChange={handleInputChange}/>I don&apos;t like to spend time with it
                    </label>
                </li>
            </ul>

        </>

    )

}

CheckBoxes.propTypes = {
    handleInputChange: PropTypes.func
};


export default CheckBoxes;
