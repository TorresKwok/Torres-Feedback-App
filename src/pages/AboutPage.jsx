import { Link } from 'react-router-dom'
import Card from '../component/shared/Card'

function AboutPage() {
    return <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>This is a React app to leave feedback for a product or service</p>
            <p>Author: Torres Kwok</p>
            <p>Version: 1.0.0</p>

            <p>
                <Link to="/" textcolor="white">Back to Home Page</Link>
            </p>
        </div>
    </Card>
}

export default AboutPage