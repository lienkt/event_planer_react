import Events from '../Components/Events/ListOfEvents'

const Home = ({currentMovie, setCurrentMovie}) => {
    return <section>
            <div className="list-movie">
                <Events currentMovie={currentMovie} setCurrentMovie={setCurrentMovie}/>
            </div>
    </section>
}

export default Home