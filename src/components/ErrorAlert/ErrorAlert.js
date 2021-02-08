import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Alert from 'react-bootstrap/Alert';

const ErrorAlert = ({ message, handleCloseAlert }) => {
  return (
    <Alert variant="danger" onClose={handleCloseAlert} dismissible className="shadow">
      <Alert.Heading>
        <FontAwesomeIcon icon={faExclamationTriangle} />
        <span className="ml-2">Alert</span>
      </Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
};

export default ErrorAlert;
