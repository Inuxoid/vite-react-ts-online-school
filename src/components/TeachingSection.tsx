import { ways } from '../data.ts'
import WayToTeach from "../components/WayToTeach.tsx";
function TeachingSection() {
    return (
        <section>
            <h3>
                Наш подход к обучению
            </h3>
            <ul>
                {ways.map(way => <WayToTeach key={way.title} {...way} />)}
            </ul>
        </section>
    )
}

export default TeachingSection;