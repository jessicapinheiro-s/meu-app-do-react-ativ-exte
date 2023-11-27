import { Link } from 'react-router-dom';
import React, { useState } from "react"
import MenuHeader from '../components/header/header';
import { FaCheckCircle, FaCircle } from 'react-icons/fa';
import { RiMedalFill } from "react-icons/ri";
import { FaMedal } from "react-icons/fa6";
import { IoIosMedal } from "react-icons/io";
import { IoMedalSharp } from "react-icons/io5";
import { GiStarMedal } from "react-icons/gi";




export default function MeuProgresso() {
    const [progress, setProgress] = useState(0);
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
        { id: 6, name: 'Item 6' },
        { id: 7, name: 'Item 7' },
        { id: 8, name: 'Item 8' },
        { id: 9, name: 'Item 9' },
        { id: 10, name: 'Item 10' },
        // Adicione quantos itens desejar
    ];

    const handleIncrement = () => {
        if (progress < 100) {
            setProgress(progress + 10);
        }
    };

    const handleDecrement = () => {
        if (progress > 0) {
            setProgress(progress - 10);
        }
    };

    const renderProgressIcons = () => {
        return items.map((item) => (
            <div className='container-item-medal'key={item.id}>
                {progress >= item.id * 10 ? (
                    <div className='container-medal'>
                        <GiStarMedal className='icon'/>
                        <FaCheckCircle style={{ color: '#4caf50', marginRight: '8px' }} />
                        <p>{item.name}</p>
                    </div>
                ) : (
                    <div className='container-medal'>
                        <GiStarMedal className='icon'/>
                        <FaCircle style={{ color: '#ccc', marginRight: '8px' }} />
                        <p>{item.name}</p>
                    </div>
                )}
                
            </div>
        ));
    };

    return (
        <div>
            <MenuHeader nome='Jéssica' />
            <div className='container-progress'>
                <div className='container-item-progress'>
                    {renderProgressIcons()}
                </div>
                <div className='container-bar-progress'>
                    <button onClick={handleDecrement} disabled={progress === 0}>
                        -
                    </button>
                    <div className='bar' >
                        <div
                            style={{
                                width: `${progress}%`,
                                height: '20px',
                                backgroundColor: '#4caf50',
                                transition: 'width 0.3s',
                            }}
                        />
                    </div>
                    <button onClick={handleIncrement} disabled={progress === 100}>
                        +
                    </button>
                </div>
                <p>{`${progress}% concluído`}</p>
            </div>
        </div>
    )
}