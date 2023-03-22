import { useEffect, useState } from "react";
import Card from "./Card";
import { receiveNote } from "./HandleNote";

const CardsSection = ({ handlePreview }) => {
  const [Notes, setNotes] = useState(receiveNote());

  useEffect(() => {
    setNotes(receiveNote());
  }, []);

  return Notes?.map((item, index) => (
    <Card
      Key={item.Key}
      Color={item.Color}
      Title={item.Title}
      Body={item.Body}
      Date={item.Date}
      Index={index}
      preview={(data) => handlePreview(data)}
    />
  ));
};

export default CardsSection;
