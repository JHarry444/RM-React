import { useEffect, useState } from "react";
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

    async function fetchTrainers() {
        try {
            const res = await fetch("http://localhost:8080/trainers");
            const data = await res.json();
            setTrainers(data);
        } catch (error) {
            console.error(error);
        }
    }



    // will only get called when the component is mounted, so it will only fetch the trainers once
    // mounted -> initial render
    useEffect(() => {
        const trainerInterval = setInterval(fetchTrainers, 3_000);

        // cleanup function to clear the interval when the component is unmounted
        // unmounted -> component is removed from the DOM
        // this is important to prevent memory leaks and unnecessary API calls when the component is no longer in use
   
        return () => clearInterval(trainerInterval);
    }, []);



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