import EventDetail from '../components/Events/EventDetail'

const Event = ({currentMovie, setCurrentMovie}) => {
    return <section>
            <div className="list-movie">
                <EventDetail />
            </div>
    </section>
}

export default Event