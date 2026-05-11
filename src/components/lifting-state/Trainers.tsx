import { useState } from "react";
import AddTrainer from "./AddTrainer";
import ListTrainers from "./ListTrainers";
import "./trainers.css";


export type TrainerType = {
    name: string;
    age: number;
    specialty: string;
}

function Trainers() {
    const [trainers, setTrainers] = useState<TrainerType[]>([]);


    return (
        <>
            <h1>Inverse Data Flow</h1>
            <div id="trainerContainer">
                <AddTrainer setTrainers={setTrainers} />
                <ListTrainers trainers={trainers} />
            </div>
        </>

    );
}

export default Trainers;