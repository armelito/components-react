import React from 'react';
import './Profil.css';

const Profil = (PassedComponent) => {
    return class extends React.Component {
        render(){
            return (
                <div className="Profil">
                    <PassedComponent {...this.props}/>
                </div>
            )
        }
    }
}

const ProfilSchema = ({name, age}) => <div>{name} {age}</div>

const NewProfil = Profil(ProfilSchema);

export default NewProfil;