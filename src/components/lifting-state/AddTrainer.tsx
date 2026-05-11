import React, { useState } from "react";
import type { TrainerType } from "./Trainers";

function AddTrainer({ setTrainers }: { setTrainers: React.Dispatch<React.SetStateAction<TrainerType[]>> }) {
    const [data, setData] = useState<TrainerType>({ name: "", age: 0, specialty: "" });

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTrainers(prev => [...prev, data]);
        setData({ name: "", age: 0, specialty: "" });
        nameRef.current?.focus();
    }

    const nameRef = React.useRef<HTMLInputElement>(null);

    return (
        <div>
            <h2>Add Trainer</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="addTrainerName">Name:</label>
                <input
                    ref={nameRef}
                    type="text"
                    id="addTrainerName"
                    name="name"
                    value={data.name}
                    onChange={e => setData({ age: data.age, specialty: data.specialty, name: e.target.value })}
                    required

                    autoFocus
                />
                <label htmlFor="addTrainerAge">Age:</label>
                <input
                    type="number"
                    id="addTrainerAge"
                    name="age"
                    value={data.age}
                    onChange={e => setData({ ...data, age: parseInt(e.target.value) })}
                    required
                    min={0}
                    max={100}
                />
                <label htmlFor="addTrainerSpecialty">Specialty:</label>
                <input type="text" id="addTrainerSpecialty" name="specialty" value={data.specialty} onChange={e => setData({ ...data, specialty: e.target.value })} />
                <button type="submit">Add Trainer</button>
            </form>
        </div>
    );
}

export default AddTrainer;