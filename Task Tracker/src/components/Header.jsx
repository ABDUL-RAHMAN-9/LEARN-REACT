import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title = " Task Tracker" }) =>
{
    const onClick = () =>
    {
        console.log("clicked")
    }
    return (
        <div>
            <header className='header'>
                <h1>{title}</h1>
                <Button color='green' text='ADD' onClick={onClick} />
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
