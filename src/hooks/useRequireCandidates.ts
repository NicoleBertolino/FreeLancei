import useFetchCandidates from "./useFetchCandidates";

const useRequireCandidates = (url?: string) => {
    let candidates;
    const loading = false;
    const error = false;

    if(url)
        return useFetchCandidates(url);
    
    candidates = require("../app/data/providers.json").results;

    return {candidates, loading, error};
}

export default useRequireCandidates;