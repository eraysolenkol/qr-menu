import PropTypes from 'prop-types';
import { getTypes, getTypePreview } from "../helpers/helper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

function Sidebar(props) {

    const types = getTypes();

    function handleType(type) {
        document.getElementById("sidenav").classList.toggle("open");
        props.setSelectedType(type);
        props.setTypePreview(getTypePreview(type));
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div id="sidenav" className="sidenav">
            <div className="sidenav-img-container">
                {
                    types.map((type) => (
                        <div className="type-box" key={type}>
                            <a
                                onClick={() =>  {
                                    handleType(type);
                                    scrollToTop();
                                }}
                                style={type === props.selectedType ? { color: "red" } : { color: "#ffaa0d" }}
                            >
                                <FontAwesomeIcon icon={faCaretRight}/><span style={{marginRight:"10px"}}></span>{type}
                            </a>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

Sidebar.propTypes = {
    selectedType: PropTypes.string.isRequired,
    setSelectedType: PropTypes.func.isRequired,
    setTypePreview: PropTypes.func.isRequired
};

export default Sidebar;