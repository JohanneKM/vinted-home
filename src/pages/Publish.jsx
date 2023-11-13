import { useState } from "react";
import axios from "axios";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState();
  const [pictureFromCloudinary, setPictureFromCloudinary] = useState();

  const token =
    "TjyIdQwqRWjWoSeKdkh-4Cs9_ZtP-1bkTMHqjykOowYn0SOgIcPPBCpeaFZz-fes";

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleBrand = (event) => {
    setBrand(event.target.value);
  };

  const handleSize = (event) => {
    setSize(event.target.value);
  };

  const handleColor = (event) => {
    setColor(event.target.value);
  };

  const handleCondition = (event) => {
    setCondition(event.target.value);
  };

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();

      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("location", location);
      formData.append("price", price);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Salut");
      console.log(response);
      setPictureFromCloudinary(response.data.secure_url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Vends ton article</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={(event) => {
              setPicture(event.target.files[0]);
            }}
            type="file"
          />
          <input
            onChange={handleTitle}
            type="text"
            placeholder="ex: Chemise Sézane verte"
          />
          <input
            onChange={handleDescription}
            type="text"
            placeholder="Décris ton article"
          />
        </div>
        <div>
          <input onChange={handleBrand} type="text" placeholder="ex: Zara" />
          <input onChange={handleSize} type="text" placeholder="ex: L/40/12" />
          <input onChange={handleColor} type="text" placeholder="ex: Fushia" />
          <input
            onChange={handleCondition}
            type="text"
            placeholder="Neuf avec étiquette"
          />
          <input
            onChange={handleLocation}
            type="text"
            placeholder="ex: Paris"
          />
        </div>

        <div>
          <input onChange={handlePrice} type="text" placeholder="0,00 €" />
          <input
            type="checkbox"
            placeholder="Je suis intéressé(e) par les échanges."
          />
        </div>
        <input type="submit" value="Ajouter" />
      </form>
      {pictureFromCloudinary && <img src={pictureFromCloudinary} alt="jack" />}
    </div>
  );
};

export default Publish;
