import Details from '../components/Events/EventsDetails' // need to change the path after

const Event = ({currentMovie, setCurrentMovie}) => {
    return <section>
            <div className="list-movie">
                <Details currentMovie={currentMovie} setCurrentMovie={setCurrentMovie}/>
            </div>
    </section>
}

export default Event