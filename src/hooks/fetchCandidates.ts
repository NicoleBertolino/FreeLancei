import { useState, useEffect } from "react";
import { Candidate } from "../interfaces/Candidate";

type State = Candidate[] | [];

const fetchCandidates = (url: string) => {
    const [candidates, setCandidates] = useState<[State]>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchC() {
            const response = await fetch(url);
            const result = await response.json();

            setCandidates(result.results);
        }

        try {
            fetchC();
        } catch(error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [url]);

    return {candidates, loading, error};
}


export default fetchCandidates;