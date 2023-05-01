import { Label, Div } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterQuery } from '../../redux/contacts/contacts-slice';
import { TextField } from '@mui/material';

const Filter = () => {
  const value = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(filterQuery(e.currentTarget.value));
  };

  return (
    <Div>
      <Label>
        <TextField
          id="outlined-basic"
          label="Find contacts by name"
          variant="outlined"
          type="text"
          value={value}
          onChange={changeFilter}
        />
      </Label>
    </Div>
  );
};
export default Filter;
