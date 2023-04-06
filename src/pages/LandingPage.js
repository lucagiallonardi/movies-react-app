import MoviesGrid from "../Componentes/MoviesGrid";
import { Search } from "../Componentes/Search";
import { useQuery } from "../Hooks/useQuery";

function LandingPage(){
    const query = useQuery();
    const search = query.get("search");
    return <div>
        <Search />
        <MoviesGrid key={search}/>
        </div>
}

export default LandingPage;