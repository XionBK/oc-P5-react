
export function Person ({host}) {

    let hostName = host.name;
    const personName = hostName.split(' ');

    return <div className="person">
        <span>{personName[0]} <br /> {personName[1]}</span>
        <img src={host.picture} alt="profil" />
    </div>
}