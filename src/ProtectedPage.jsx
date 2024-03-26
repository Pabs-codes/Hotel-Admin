import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';


export default function ProtectedPage({ page }) {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/" />;
    } else {
        return page;
    }
}

ProtectedPage.propTypes = {
    page: PropTypes.node.isRequired,
};
