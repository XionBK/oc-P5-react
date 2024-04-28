/**
 * @param {URL} image
 * @param {string} title
 * @returns {JSX.Element}
 */
export function Banner ({image, title}) {

    const style = {backgroundImage : `url(${image})`}

    return <div style={style} className="banner">
        {title && <h1 className="banner-title">{title}</h1>}
    </div>
}