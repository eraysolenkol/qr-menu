import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import foods from "../jsons/foods.json";
import { useState } from "react";
import { getTypes, getTypePreview } from "../helpers/helper";

function Home() {

    const types = getTypes();
    const [selectedType, setSelectedType] = useState(types[0]);
    const [typePreview, setTypePreview] = useState(getTypePreview(types[0]));
    
    return (
        <>
            <Sidebar setTypePreview={setTypePreview} selectedType={selectedType} setSelectedType={setSelectedType} />
            <Navbar />
            <div className="container">
                <div className="img-container">
                    <div className="type-preview">
                        <img src={typePreview.image} />
                        <p>{typePreview.preview_name}</p>
                    </div>
                    <div className="items">
                        {
                            foods.filter((food) => food.type === selectedType).map((food, index) =>
                                <>
                                    <div key={index} className="item">
                                        <div className="image">
                                            <img src={food.image} />

                                        </div>
                                        <div className="attr">
                                            <p>{food.name}</p>
                                            <p>{food.price.toFixed(2).replace(".", ",")}<sub><span className="money">TL</span></sub></p>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;