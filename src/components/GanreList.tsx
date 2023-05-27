import useGanres from "../hooks/useGanres";

const GanreList = () => {
  const { data } = useGanres();

  return (
    <ul>
      {data.map((ganre) => (
        <li>{ganre.name}</li>
      ))}
    </ul>
  );
};

export default GanreList;
