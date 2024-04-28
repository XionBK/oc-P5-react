import star from '../assets/star.svg'

export function Rating ({rating, total}) {

    const element = []
    let inactiveClass = ''

    for (let index = 0; index < total; index++) {

        if(index < rating)
            inactiveClass = ''
        else
            inactiveClass = 'inactive'

        element.push(<img key={index} className={inactiveClass} src={star} alt="star" />)
    }

    return <div className="rating">
        {element}
    </div>
}

Rating.defaultProps = {
    total: 5
}