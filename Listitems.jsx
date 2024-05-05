export default function Listitems({obj}) {

    return (
        <>
        <h2>{obj.name}</h2>
            <ol>
                <li>Power: {obj.power}</li>
                <li>Strength_level: {obj.strength_level}</li>
                <li>Hair color: {obj.hair_color}</li>
            </ol>
        </>

    )
}