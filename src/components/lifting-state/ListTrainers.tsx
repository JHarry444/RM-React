import { useContext } from "react";
import { type TrainerType } from "./Trainers";
import { v4 as uuid4 } from 'uuid';
import { ThemeContext } from "../../context/ThemeContext";
function ListTrainers({ trainers }: { trainers: TrainerType[] }) {

    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <h2>Trainers List</h2>
            <div id="trainersList">
                {trainers.map((trainer) => (
                    <div key={uuid4()} className={`trainerCard-${theme}`}>
                        <h3>{trainer.name}</h3>
                        <p>Age: {trainer.age}</p>
                        <p>Specialty: {trainer.specialty}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default ListTrainers;