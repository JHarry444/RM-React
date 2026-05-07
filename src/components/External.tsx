import Trainer from "./Trainer";
import trainers from '../data/trainers.json';

function External() {
    return (
        <section>
            <h2>External Data</h2>
            {
                // In a real application, you would fetch this data from an API
                // and store it in state using useState and useEffect hooks
                trainers.map(trainer => (
                    <Trainer key={trainer.name + trainer.age} name={trainer.name} age={trainer.age} specialty={trainer.specialty} />
                ))
            }
        </section>
    );
}

export default External;