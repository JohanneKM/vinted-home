import { useState } from "react";
import axios from "axios";

const Publish = ({ token }) => {
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

  //   const token =
  //     "TjyIdQwqRWjWoSeKdkh-4Cs9_ZtP-1bkTMHqjykOowYn0SOgIcPPBCpeaFZz-fes";

  //   const token3 = "qn4vuzg-nCZltq2rro4a4h6zivVI47UTgKOtaORKZkxjXlRfEJ0hfZ7raCKJiplf"

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
    <div className="publish">
      <p className="sell-article">Vends ton article</p>
      <form onSubmit={handleSubmit}>
        <div className="add-picture">
          <label htmlFor="picture">Ajoute une photo</label>
          <input
            onChange={(event) => {
              setPicture(event.target.files[0]);
            }}
            id="picture"
            type="file"
          />
        </div>

        <div className="title-and-desc">
          <label htmlFor="title">Titre</label>
          <input
            onChange={handleTitle}
            id="title"
            type="text"
            placeholder="ex: Chemise Sézane verte"
          />
          <label htmlFor="description">Décris ton article</label>
          <input
            onChange={handleDescription}
            id="description"
            type="text"
            placeholder="Décris ton article"
          />
        </div>
        <div className="brand-size-location">
          <label htmlFor="brand"> Marque </label>

          <input
            onChange={handleBrand}
            id="brand"
            type="text"
            placeholder="ex: Zara"
          />
          <label htmlFor="size">Taille</label>
          <input
            onChange={handleSize}
            id="size"
            type="text"
            placeholder="ex: L/40/12"
          />
          <label htmlFor="color">Couleur</label>
          <input
            onChange={handleColor}
            id="color"
            type="text"
            placeholder="ex: Fushia"
          />
          <label htmlFor="état">État</label>
          <input
            onChange={handleCondition}
            id="condition"
            type="text"
            placeholder="Neuf avec étiquette"
          />
          <label htmlFor="location">Lieu</label>
          <input
            onChange={handleLocation}
            id="location"
            type="text"
            placeholder="ex: Paris"
          />
        </div>

        <div className="price">
          <label htmlFor="price">Prix</label>
          <input
            onChange={handlePrice}
            id="price"
            type="text"
            placeholder="0,00 €"
          />
          <input
            type="checkbox"
            placeholder="Je suis intéressé(e) par les échanges."
          />
        </div>
        <div className="submit">
          <input type="submit" value="Ajouter" />
        </div>
      </form>
      {pictureFromCloudinary && <img src={pictureFromCloudinary} alt="jack" />}
    </div>
  );
};

export default Publish;
