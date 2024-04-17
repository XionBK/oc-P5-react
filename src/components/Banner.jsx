export function Banner ({image, title}) {

    const style = {backgroundImage : `url(${image})`}

    return <div style={style} className="banner">
        {title && <p className="banner-title">{title}</p>}
    </div>
}