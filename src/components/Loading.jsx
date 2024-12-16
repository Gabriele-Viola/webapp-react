import 'ldrs/mirage'
export default function Loading() {
    return (
        <div style={{ minHeight: 'calc(100vh - 220px)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '2rem' }}>
            <div className='btn btn-danger fs-3'>
                <i class="bi bi-film"></i>
                <span>  Wait please...</span>
            </div>
            <l-mirage size="60" speed="2.5" color="red"></l-mirage>
        </div>
    )
} 
