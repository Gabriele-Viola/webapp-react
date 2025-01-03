import 'ldrs/mirage'
import { useGlobalContext } from '../contexts/GlobalContext'
import OutServer from './outServer'
export default function Loading({ found }) {
    const { errorMessage } = useGlobalContext()
    return (
        <>
            {errorMessage ? <OutServer /> :
                <div style={{ minHeight: 'calc(100vh - 220px)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '2rem' }}>
                    <div className='btn btn-danger fs-3'>
                        <i className="bi bi-film"></i>
                        <span>  Wait please...</span>
                    </div>
                    <l-mirage size="60" speed="2.5" color="red"></l-mirage>
                </div>}
        </>
    )
} 
