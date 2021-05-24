import './Accordion.scss'

const Accordion = ({title, index, children}) => {

    return (

            <div className="accordion" id={`accordion${title}${index}`}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id={`heading${title}${index}`}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target={`#collapseOne${title}${index}`} aria-expanded="true" aria-controls={`collapseOne${title}${index}`}>
                            {title}
                        </button>
                    </h2>
                    <div id={`collapseOne${title}${index}`} className="accordion-collapse collapse"
                         aria-labelledby={`heading${title}${index}`} data-bs-parent={`#accordion${title}${index}`}>
                        <div className="accordion-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Accordion