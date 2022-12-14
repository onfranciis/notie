import Card from "./Card";
import { receiveNote } from "./HandleNote";

const CardsSection = ({ handlePreview }) => {
  return receiveNote()?.map((item) => (
    <Card
      Key={item.Created}
      Color={item.Color}
      Title={item.Title}
      Body={item.Body}
      Date={item.Date}
      ID={item.Id}
      preview={(data) => handlePreview(data)}
    />
  ));
};

export default CardsSection;
