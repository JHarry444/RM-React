import { useContext, useState } from "react";
import { type TrainerType } from "./Trainers";
import { v4 as uuid4 } from 'uuid';
import { ThemeContext } from "../../context/ThemeContext";
function ListTrainers({ trainers }: { trainers: TrainerType[] }) {

    const { theme } = useContext(ThemeContext);
    const [currentPage, setCurrentPage] = useState(1);
    const trainersPerPage = 10;

    const totalPages = Math.ceil(trainers.length / trainersPerPage);
    const startIndex = (currentPage - 1) * trainersPerPage;
    const endIndex = startIndex + trainersPerPage;
    const paginatedTrainers = trainers.slice(startIndex, endIndex);

    const handlePrevious = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <h2>Trainers List</h2>
            <div id="trainersList">
                {paginatedTrainers.map((trainer) => (
                    <div key={uuid4()} className={`trainerCard-${theme}`}>
                        <h3>{trainer.name}</h3>
                        <p>Age: {trainer.age}</p>
                        <p>Specialty: {trainer.specialty}</p>
                    </div>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="pagination">
                    <button onClick={handlePrevious} disabled={currentPage === 1}>
                        Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageClick(page)}
                            className={currentPage === page ? "active" : ""}
                        >
                            {page}
                        </button>
                    ))}

                    <button onClick={handleNext} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>
            )}

            <p className="pagination-info">
                Page {currentPage} of {totalPages} | Showing {paginatedTrainers.length} of {trainers.length} trainers
            </p>
        </div>
    );
}

export default ListTrainers;