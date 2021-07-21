import Details from '../Components/Events/EventsDetails' // need to change the path after

const details = ({currentMovie, setCurrentMovie}) => {
    return <section>
            <div className="list-movie">
                <Details currentMovie={currentMovie} setCurrentMovie={setCurrentMovie}/>
            </div>
    </section>
}

export default details