import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const heartIcon = <FontAwesomeIcon icon={faHeart} className="text-danger"/>
    const githubIcon = <FontAwesomeIcon icon={faGithub} className="text-secondary" style={{fontSize:'20px'}}/>
    const myFooter = { marginTop: 'auto' }

    return (
        <footer
        className="bg-dark py-5 text-white"
        style={myFooter}
        >
            <div
            className="container"
            >
                <div
                className="row"
                >
                    <div
                    className="col-8"
                    >
                        <p
                        className="text-secondary"
                        >
                           Made with { heartIcon } by <a href="https://www.jonahlouis.ca/" target="_blank" rel="noreferrer">Jonah Louis</a> 
                        </p> 
                    </div>
                    <div
                    className="col-4 text-right"
                    >
                        {/*  */}
                        <a href="https://github.com/jonahlouis4/StudyBuddy" target="_blank" rel="noreferrer">
                            { githubIcon }
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
