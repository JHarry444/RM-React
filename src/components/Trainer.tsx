type TrainerProps = {
    name: string;
    age: number;
    specialty: string;
}

function Trainer({name, age, specialty}: TrainerProps) {
 
    return ( 
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Specialty: {specialty}</p>
        </>
     );
}

export default Trainer;