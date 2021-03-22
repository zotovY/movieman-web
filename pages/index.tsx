import { NextPage } from "next";
import MenuComponent from "../components/menu";
import MovieHorizontalList from "../components/movie-horizontal-list";

const HomePage: NextPage = () => {
    return <main className="home-page">
        <MenuComponent/>
        <MovieHorizontalList/>
    </main>
}

export default  HomePage;
