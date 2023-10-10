import './RulesModal.css'
import React, {useState} from 'react';

function RulesModal(props) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    }

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')

    }

    return (
        <>
            <button className="large-round-button yellow" onClick={toggleModal}>
                <div className="large-round-button-highlight"></div>
            </button>

            {modal && 
                <div className="modal">
                    <div className="overlay" onClick={toggleModal}></div>
                    <div className="modal-content"> 
                        <div className="modal-header">
                            <h2>How To Play</h2>
                            <button className="close-modal" onClick={toggleModal}>&times;</button>
                        </div>
                        <hr />
                        <p>Guess the name of the Pokémon in the pixelated image. Use the right side screen to enter a guess.</p>
                        <ul>
                            <li>5 chances to guess the correct name.</li>
                            <li>Each incorrect guess will make the image more clear.</li>
                            <li>Select specific generations or a mix of multiple.</li>
                        </ul>
                    </div>
                </div>
            }
        </>
    );
}

export default RulesModal;