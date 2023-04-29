import { PropTypes } from 'prop-types';

const Contacts = props => {
  return (
    <>
      <div>
        <div>{props.children}</div>
      </div>
    </>
  );
};

export default Contacts;

Contacts.prototype = {
  props: PropTypes.object,
};
