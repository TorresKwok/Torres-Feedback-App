import { Link } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'

function AboutIconLink() {
    return <div className='about-link'>
        <Link to={{
            pathname: '/about',
            search: '?sort=about',
            hash: '#about'
        }}>
            <FaQuestion size={30} />
        </Link>
    </div>
}

export default AboutIconLink